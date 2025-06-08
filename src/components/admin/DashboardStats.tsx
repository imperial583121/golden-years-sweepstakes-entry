
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, UserCheck, Clock } from 'lucide-react';

interface DashboardStatsProps {
  stats: {
    totalVisitors: number;
    totalLeads: number;
    lastLeadEntry: string | null;
  };
}

const DashboardStats: React.FC<DashboardStatsProps> = ({ stats }) => {
  const formatLastEntry = (timestamp: string | null) => {
    if (!timestamp) return 'No entries yet';
    return new Date(timestamp).toLocaleString();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Total Visitors */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-600">
            Total Visitors
          </CardTitle>
          <Users className="h-4 w-4 text-blue-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-900">
            {stats.totalVisitors.toLocaleString()}
          </div>
          <p className="text-xs text-gray-500 mt-1">
            All page visits tracked
          </p>
        </CardContent>
      </Card>

      {/* Total Leads */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-600">
            Total Leads
          </CardTitle>
          <UserCheck className="h-4 w-4 text-green-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-900">
            {stats.totalLeads.toLocaleString()}
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Sweepstakes entries
          </p>
        </CardContent>
      </Card>

      {/* Last Lead Entry */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-600">
            Last Entry
          </CardTitle>
          <Clock className="h-4 w-4 text-orange-600" />
        </CardHeader>
        <CardContent>
          <div className="text-sm font-medium text-gray-900">
            {formatLastEntry(stats.lastLeadEntry)}
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Most recent submission
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardStats;
