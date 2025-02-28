"use client";

import { 
  Users,
  FileText,
  DollarSign,
  TicketCheck,
  BarChart3,
} from "lucide-react";
import DashboardLayout from "@/components/dashboard-layout";

export default function Dashboard() {
  const stats = {
    totalClients: 24,
    activeProjects: 5,
    unpaidInvoices: 3,
    openTickets: 2,
    monthlyRevenue: 8750,
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <header className="bg-white shadow-sm h-16 flex items-center px-6">
        <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
      </header>

      {/* Main content area */}
      <main className="flex-1 overflow-auto p-6">
        <div className="mb-6">
          <h2 className="text-lg font-medium text-gray-900">Overview</h2>
          <p className="text-sm text-gray-500">Welcome back, here's what's happening with your business today.</p>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-500">Total Clients</h3>
              <Users className="h-5 w-5 text-blue-500" />
            </div>
            <div className="mt-2">
              <p className="text-2xl font-semibold text-gray-900">{stats.totalClients}</p>
              <p className="text-xs text-green-600 mt-1">+2 from last month</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-500">Active Projects</h3>
              <FileText className="h-5 w-5 text-indigo-500" />
            </div>
            <div className="mt-2">
              <p className="text-2xl font-semibold text-gray-900">{stats.activeProjects}</p>
              <p className="text-xs text-green-600 mt-1">+1 from last week</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-500">Unpaid Invoices</h3>
              <DollarSign className="h-5 w-5 text-yellow-500" />
            </div>
            <div className="mt-2">
              <p className="text-2xl font-semibold text-gray-900">{stats.unpaidInvoices}</p>
              <p className="text-xs text-gray-500 mt-1">Due within 30 days</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-500">Open Tickets</h3>
              <TicketCheck className="h-5 w-5 text-red-500" />
            </div>
            <div className="mt-2">
              <p className="text-2xl font-semibold text-gray-900">{stats.openTickets}</p>
              <p className="text-xs text-gray-500 mt-1">Awaiting response</p>
            </div>
          </div>
        </div>

        {/* Charts and activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow lg:col-span-2">
            <div className="px-5 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Monthly Revenue</h3>
            </div>
            <div className="p-5">
              <div className="flex items-center mb-4">
                <p className="text-2xl font-semibold text-gray-900">${stats.monthlyRevenue}</p>
                <div className="ml-3 flex items-center text-sm text-green-600">
                  <BarChart3 className="h-4 w-4 mr-1" />
                  <span>12% increase</span>
                </div>
              </div>
              <div className="h-64 bg-gray-50 rounded-md flex items-center justify-center">
                <p className="text-gray-500 text-sm">Revenue chart will be displayed here</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow">
            <div className="px-5 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
            </div>
            <div className="p-5">
              <ul className="space-y-5">
                <li className="relative pl-6">
                  <div className="absolute left-0 top-2 h-2 w-2 rounded-full bg-green-500"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Invoice #1089 paid</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Client: Acme Inc. - $1,200.00
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      2 hours ago
                    </p>
                  </div>
                </li>
                <li className="relative pl-6">
                  <div className="absolute left-0 top-2 h-2 w-2 rounded-full bg-blue-500"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">New support ticket</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Client: TechCorp - Website updates
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Yesterday at 3:24 PM
                    </p>
                  </div>
                </li>
                <li className="relative pl-6">
                  <div className="absolute left-0 top-2 h-2 w-2 rounded-full bg-indigo-500"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">New project created</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Client: GlobalTech - Mobile app development
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      2 days ago
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
} 