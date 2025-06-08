
import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, Trash2, Download, ChevronDown, ChevronRight } from 'lucide-react';

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

interface LeadsTableProps {
  leads: Lead[];
  onDeleteLead: (id: string) => void;
}

const LeadsTable: React.FC<LeadsTableProps> = ({ leads, onDeleteLead }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showExport, setShowExport] = useState(false);

  console.log('LeadsTable received leads:', leads);
  console.log('Leads count:', leads.length);

  // Filter leads based on search term
  const filteredLeads = useMemo(() => {
    if (!searchTerm) return leads;
    
    const term = searchTerm.toLowerCase();
    return leads.filter(lead => 
      lead.email?.toLowerCase().includes(term) ||
      lead.phone?.toLowerCase().includes(term) ||
      lead.first_name?.toLowerCase().includes(term) ||
      lead.last_name?.toLowerCase().includes(term)
    );
  }, [leads, searchTerm]);

  const calculateAge = (birthYear: number | null) => {
    if (!birthYear) return 'N/A';
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  };

  const isAgeConfirmed = (birthYear: number | null) => {
    if (!birthYear) return false;
    const age = calculateAge(birthYear);
    return typeof age === 'number' && age >= 18;
  };

  const exportToCSV = () => {
    const headers = [
      'Full Name',
      'Email', 
      'Phone',
      'Street Address',
      'City',
      'State',
      'ZIP Code',
      'Birth Year',
      'Age',
      'Age Confirmed',
      'Submission Date'
    ];

    const csvData = filteredLeads.map(lead => [
      `${lead.first_name} ${lead.last_name}`,
      lead.email,
      lead.phone || '',
      lead.address || '',
      lead.city || '',
      lead.state || '',
      lead.zip_code || '',
      lead.birth_year || '',
      calculateAge(lead.birth_year),
      isAgeConfirmed(lead.birth_year) ? 'Yes' : 'No',
      new Date(lead.created_at).toLocaleString()
    ]);

    const csvContent = [headers, ...csvData]
      .map(row => row.map(field => `"${field}"`).join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sweepstakes_leads_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const handleDelete = (lead: Lead) => {
    if (window.confirm(`Are you sure you want to delete the entry for ${lead.first_name} ${lead.last_name}?`)) {
      onDeleteLead(lead.id);
    }
  };

  return (
    <div className="space-y-6">
      {/* Search and Export Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Sweepstakes Leads ({filteredLeads.length})</span>
            <Button
              variant="outline"
              onClick={() => setShowExport(!showExport)}
              className="flex items-center gap-2"
            >
              {showExport ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              Export Options
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search by email, phone, or name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Export Section - Collapsible */}
          {showExport && (
            <div className="bg-gray-50 p-4 rounded-lg border">
              <h4 className="font-medium text-gray-900 mb-2">Export Data</h4>
              <p className="text-sm text-gray-600 mb-3">
                Export all {filteredLeads.length} filtered leads to CSV format
              </p>
              <Button
                onClick={exportToCSV}
                className="flex items-center gap-2"
                disabled={filteredLeads.length === 0}
              >
                <Download className="w-4 h-4" />
                Export to CSV
              </Button>
            </div>
          )}

          {/* Debug Info */}
          <div className="bg-yellow-50 p-3 rounded border">
            <p className="text-sm text-yellow-800">
              Debug: Showing {filteredLeads.length} leads from {leads.length} total
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Leads Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-semibold">Full Name</TableHead>
                  <TableHead className="font-semibold">Email</TableHead>
                  <TableHead className="font-semibold">Phone</TableHead>
                  <TableHead className="font-semibold">Address</TableHead>
                  <TableHead className="font-semibold">Birth Year</TableHead>
                  <TableHead className="font-semibold">Age Confirmed</TableHead>
                  <TableHead className="font-semibold">Submitted</TableHead>
                  <TableHead className="font-semibold text-center">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredLeads.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center py-8 text-gray-500">
                      {searchTerm ? 'No leads found matching your search' : leads.length === 0 ? 'No leads submitted yet' : 'No leads found'}
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredLeads.map((lead) => (
                    <TableRow key={lead.id} className="hover:bg-gray-50">
                      <TableCell className="font-medium">
                        {lead.first_name} {lead.last_name}
                      </TableCell>
                      <TableCell>{lead.email}</TableCell>
                      <TableCell>{lead.phone || 'N/A'}</TableCell>
                      <TableCell>
                        <div className="text-sm">
                          {lead.address && <div>{lead.address}</div>}
                          <div>
                            {lead.city && `${lead.city}, `}
                            {lead.state} {lead.zip_code}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        {lead.birth_year || 'N/A'}
                        {lead.birth_year && (
                          <div className="text-xs text-gray-500">
                            Age: {calculateAge(lead.birth_year)}
                          </div>
                        )}
                      </TableCell>
                      <TableCell>
                        <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                          isAgeConfirmed(lead.birth_year)
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {isAgeConfirmed(lead.birth_year) ? 'Yes' : 'No'}
                        </span>
                      </TableCell>
                      <TableCell className="text-sm">
                        {new Date(lead.created_at).toLocaleDateString()}
                        <div className="text-xs text-gray-500">
                          {new Date(lead.created_at).toLocaleTimeString()}
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleDelete(lead)}
                          className="flex items-center gap-1"
                        >
                          <Trash2 className="w-3 h-3" />
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LeadsTable;
