
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { LogOut, Users, UserCheck, Clock } from 'lucide-react';
import DashboardStats from './DashboardStats';
import LeadsTable from './LeadsTable';

interface AdminDashboardProps {
  onLogout: () => void;
}

interface Lead {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  address: string | null;
  city: string | null;
  state: string | null;
  zip_code: string | null;
  birth_year: number | null;
  created_at: string;
  date_of_birth: string | null;
}

interface TableStats {
  table_name: string;
  row_count: number;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const [stats, setStats] = useState({
    totalVisitors: 0,
    totalLeads: 0,
    lastLeadEntry: null as string | null
  });
  const [leads, setLeads] = useState<Lead[]>([]);
  const [tableStats, setTableStats] = useState<TableStats[]>([]);
  const [loading, setLoading] = useState(true);
  const [debugInfo, setDebugInfo] = useState<any>(null);
  const { toast } = useToast();

  const fetchStats = async () => {
    try {
      console.log('Fetching dashboard stats from admin_summary_stats...');
      const { data, error } = await supabase
        .from('admin_summary_stats')
        .select('*')
        .single();

      if (error) {
        console.error('Stats fetch error:', error);
        throw error;
      }

      console.log('Stats data received:', data);
      setStats({
        totalVisitors: data.total_visitors || 0,
        totalLeads: data.total_leads || 0,
        lastLeadEntry: data.last_lead_entry
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
      toast({
        title: "Error",
        description: "Failed to load dashboard statistics",
        variant: "destructive"
      });
    }
  };

  const fetchTableStats = async () => {
    try {
      console.log('Fetching table stats from admin_dashboard_stats...');
      const { data, error } = await supabase
        .from('admin_dashboard_stats')
        .select('*');

      if (error) {
        console.error('Table stats fetch error:', error);
        throw error;
      }

      console.log('Table stats data received:', data);
      setTableStats(data || []);
    } catch (error) {
      console.error('Error fetching table stats:', error);
      toast({
        title: "Error",
        description: "Failed to load table statistics",
        variant: "destructive"
      });
    }
  };

  const fetchLeads = async () => {
    try {
      console.log('Fetching leads data...');
      
      // Try fetching from entries table
      const { data, error, count } = await supabase
        .from('entries')
        .select('*', { count: 'exact' })
        .order('created_at', { ascending: false });

      console.log('Query result - data:', data);
      console.log('Query result - error:', error);
      console.log('Query result - count:', count);

      if (error) {
        console.error('Leads fetch error:', error);
        
        // Set debug info for display
        setDebugInfo({
          error: error.message,
          code: error.code,
          details: error.details,
          hint: error.hint
        });
        
        throw error;
      }

      console.log('Leads data received:', data);
      console.log('Number of leads:', data?.length || 0);
      setLeads(data || []);
      setDebugInfo({ 
        count, 
        leadsFetched: data?.length || 0,
        success: true 
      });
    } catch (error) {
      console.error('Error fetching leads:', error);
      toast({
        title: "Error", 
        description: "Failed to load leads data",
        variant: "destructive"
      });
    }
  };

  const deleteLead = async (id: string) => {
    try {
      console.log('Deleting lead with ID:', id);
      const { error } = await supabase
        .from('entries')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Delete error:', error);
        throw error;
      }

      // Update local state to remove the deleted lead
      setLeads(prevLeads => prevLeads.filter(lead => lead.id !== id));
      
      // Refresh stats after deletion
      await Promise.all([fetchStats(), fetchTableStats()]);
      
      console.log('Lead deleted successfully');
      toast({
        title: "Success",
        description: "Lead deleted successfully"
      });
    } catch (error) {
      console.error('Error deleting lead:', error);
      toast({
        title: "Error",
        description: "Failed to delete lead",
        variant: "destructive"
      });
    }
  };

  useEffect(() => {
    const loadData = async () => {
      console.log('Loading admin dashboard data...');
      setLoading(true);
      
      try {
        await Promise.all([fetchStats(), fetchTableStats(), fetchLeads()]);
      } catch (error) {
        console.error('Error loading dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            </div>
            <Button
              onClick={onLogout}
              variant="outline"
              className="flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Dashboard Stats */}
          <DashboardStats stats={stats} />

          {/* Table Statistics */}
          <Card>
            <CardHeader>
              <CardTitle>Database Table Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {tableStats.map((table) => (
                  <div key={table.table_name} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="font-medium capitalize">{table.table_name.replace('_', ' ')}</span>
                    <span className="text-sm text-gray-600">{table.row_count} rows</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Debug Info */}
          {debugInfo && (
            <Card className="bg-yellow-50 border-yellow-200">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-yellow-900 mb-2">Debug Information:</h3>
                <div className="text-sm text-yellow-800 space-y-1">
                  <p>Total leads in component state: {leads.length}</p>
                  <p>Stats total leads: {stats.totalLeads}</p>
                  {debugInfo.count !== undefined && <p>Database count from query: {debugInfo.count}</p>}
                  {debugInfo.leadsFetched !== undefined && <p>Leads fetched: {debugInfo.leadsFetched}</p>}
                  {debugInfo.success && <p className="text-green-700">✓ Leads fetch successful</p>}
                  {debugInfo.error && (
                    <div className="mt-2 p-2 bg-red-100 rounded">
                      <p className="font-semibold text-red-900">Error: {debugInfo.error}</p>
                      {debugInfo.code && <p>Code: {debugInfo.code}</p>}
                      {debugInfo.details && <p>Details: {debugInfo.details}</p>}
                      {debugInfo.hint && <p>Hint: {debugInfo.hint}</p>}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Leads Table */}
          <LeadsTable leads={leads} onDeleteLead={deleteLead} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
