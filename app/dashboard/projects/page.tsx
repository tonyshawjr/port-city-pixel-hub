"use client";

import { useState } from "react";
import { 
  Plus,
  Search,
  Filter,
  Calendar,
  FileText,
  DollarSign,
  Clock,
  CheckCircle,
  AlertCircle,
  MoreHorizontal,
  ChevronDown,
  FileUp,
  MessageSquare
} from "lucide-react";
import DashboardLayout from "@/components/dashboard-layout";
import Link from "next/link";

// Sample project data
const projects = [
  {
    id: "PRJ-2023-001",
    name: "Website Redesign",
    client: "Acme Inc.",
    startDate: "2023-05-10",
    endDate: "2023-07-15",
    status: "In Progress",
    budget: 5000,
    invoiced: 3000,
    paid: 2000,
    files: 4,
    notes: 8
  },
  {
    id: "PRJ-2023-002",
    name: "Mobile App Development",
    client: "GlobalTech",
    startDate: "2023-06-01",
    endDate: "2023-09-30",
    status: "In Progress",
    budget: 12000,
    invoiced: 4000,
    paid: 4000,
    files: 6,
    notes: 12
  },
  {
    id: "PRJ-2023-003",
    name: "Brand Identity",
    client: "Startup Hub",
    startDate: "2023-04-15",
    endDate: "2023-05-30",
    status: "Completed",
    budget: 3500,
    invoiced: 3500,
    paid: 3500,
    files: 8,
    notes: 5
  },
  {
    id: "PRJ-2023-004",
    name: "E-commerce Platform",
    client: "Design Masters",
    startDate: "2023-07-01",
    endDate: "2023-10-31",
    status: "Not Started",
    budget: 8500,
    invoiced: 2000,
    paid: 2000,
    files: 2,
    notes: 3
  },
  {
    id: "PRJ-2023-005",
    name: "SEO Optimization",
    client: "TechCorp",
    startDate: "2023-05-20",
    endDate: "2023-06-20",
    status: "Completed",
    budget: 1800,
    invoiced: 1800,
    paid: 1200,
    files: 3,
    notes: 7
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800";
      case "In Progress":
        return "bg-blue-100 text-blue-800";
      case "Not Started":
        return "bg-gray-100 text-gray-800";
      case "On Hold":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  const toggleProjectDetails = (projectId: string) => {
    if (selectedProject === projectId) {
      setSelectedProject(null);
    } else {
      setSelectedProject(projectId);
    }
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <header className="bg-white shadow-sm h-16 flex items-center justify-between px-6">
        <h1 className="text-xl font-semibold text-gray-800">Projects</h1>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          New Project
        </button>
      </header>

      {/* Main content area */}
      <main className="flex-1 overflow-auto p-6">
        <div className="mb-6">
          <h2 className="text-lg font-medium text-gray-900">Manage Projects</h2>
          <p className="text-sm text-gray-500">Track all your client projects, agreements, and financials</p>
        </div>

        {/* Search and filters */}
        <div className="mb-6 flex flex-col sm:flex-row justify-between gap-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Search projects..."
            />
          </div>
          <div className="flex space-x-2">
            <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </button>
            <select className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
              <option>All Statuses</option>
              <option>In Progress</option>
              <option>Completed</option>
              <option>Not Started</option>
              <option>On Hold</option>
            </select>
          </div>
        </div>

        {/* Projects list */}
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          <ul className="divide-y divide-gray-200">
            {projects.map((project) => (
              <li key={project.id} className="hover:bg-gray-50">
                <div className="px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <button 
                        onClick={() => toggleProjectDetails(project.id)}
                        className="mr-3 text-gray-400 hover:text-gray-500"
                      >
                        <ChevronDown className={`h-5 w-5 transform ${selectedProject === project.id ? 'rotate-180' : ''} transition-transform duration-200`} />
                      </button>
                      <div>
                        <h3 className="text-sm font-medium text-blue-600">{project.id}</h3>
                        <Link href={`/dashboard/projects/${project.id}`} className="text-base font-medium text-gray-900 hover:text-blue-600">
                          {project.name}
                        </Link>
                        <p className="text-sm text-gray-500">Client: {project.client}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-8">
                      <div className="hidden md:block">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                          <span className="text-sm text-gray-500">
                            {formatDate(project.startDate)} - {formatDate(project.endDate)}
                          </span>
                        </div>
                      </div>
                      <div>
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                      </div>
                      <div className="hidden lg:block">
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 text-gray-400 mr-1" />
                          <span className="text-sm text-gray-500">
                            {formatCurrency(project.paid)} / {formatCurrency(project.budget)}
                          </span>
                        </div>
                      </div>
                      <Link 
                        href={`/dashboard/projects/${project.id}`}
                        className="text-sm text-blue-600 hover:text-blue-800"
                      >
                        View Details
                      </Link>
                      <button className="text-gray-400 hover:text-gray-500">
                        <MoreHorizontal className="h-5 w-5" />
                      </button>
                    </div>
                  </div>

                  {/* Expanded project details */}
                  {selectedProject === project.id && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Financial details */}
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="text-sm font-medium text-gray-900 mb-3">Financial Details</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-500">Total Budget:</span>
                              <span className="text-sm font-medium">{formatCurrency(project.budget)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-500">Invoiced Amount:</span>
                              <span className="text-sm font-medium">{formatCurrency(project.invoiced)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-500">Paid Amount:</span>
                              <span className="text-sm font-medium">{formatCurrency(project.paid)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-500">Outstanding:</span>
                              <span className="text-sm font-medium">{formatCurrency(project.budget - project.paid)}</span>
                            </div>
                          </div>
                          <div className="mt-4">
                            <h5 className="text-xs font-medium text-gray-900 mb-2">Related Invoices</h5>
                            <div className="space-y-1">
                              <div className="flex justify-between items-center">
                                <span className="text-xs text-blue-600">INV-1087</span>
                                <span className="text-xs text-gray-500">{formatCurrency(2000)}</span>
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Paid</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-xs text-blue-600">INV-1092</span>
                                <span className="text-xs text-gray-500">{formatCurrency(1000)}</span>
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Pending</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Files and documents */}
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex justify-between items-center mb-3">
                            <h4 className="text-sm font-medium text-gray-900">Files & Documents</h4>
                            <button className="inline-flex items-center px-2 py-1 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50">
                              <FileUp className="h-3 w-3 mr-1" />
                              Upload
                            </button>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between p-2 bg-white rounded border border-gray-200">
                              <div className="flex items-center">
                                <FileText className="h-4 w-4 text-blue-500 mr-2" />
                                <span className="text-sm">Project Agreement.pdf</span>
                              </div>
                              <span className="text-xs text-gray-500">2.4 MB</span>
                            </div>
                            <div className="flex items-center justify-between p-2 bg-white rounded border border-gray-200">
                              <div className="flex items-center">
                                <FileText className="h-4 w-4 text-blue-500 mr-2" />
                                <span className="text-sm">Scope of Work.docx</span>
                              </div>
                              <span className="text-xs text-gray-500">1.8 MB</span>
                            </div>
                            <div className="flex items-center justify-between p-2 bg-white rounded border border-gray-200">
                              <div className="flex items-center">
                                <FileText className="h-4 w-4 text-blue-500 mr-2" />
                                <span className="text-sm">Design Mockups.zip</span>
                              </div>
                              <span className="text-xs text-gray-500">8.7 MB</span>
                            </div>
                          </div>
                          {project.files > 3 && (
                            <div className="mt-2 text-center">
                              <button className="text-xs text-blue-600 hover:text-blue-800">
                                View all {project.files} files
                              </button>
                            </div>
                          )}
                        </div>

                        {/* Notes and updates */}
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex justify-between items-center mb-3">
                            <h4 className="text-sm font-medium text-gray-900">Notes & Updates</h4>
                            <button className="inline-flex items-center px-2 py-1 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50">
                              <MessageSquare className="h-3 w-3 mr-1" />
                              Add Note
                            </button>
                          </div>
                          <div className="space-y-3">
                            <div className="p-2 bg-white rounded border border-gray-200">
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-xs font-medium">Client Meeting</span>
                                <span className="text-xs text-gray-500">2 days ago</span>
                              </div>
                              <p className="text-xs text-gray-700">
                                Discussed project timeline and deliverables. Client requested additional features for the homepage.
                              </p>
                            </div>
                            <div className="p-2 bg-white rounded border border-gray-200">
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-xs font-medium">Design Approval</span>
                                <span className="text-xs text-gray-500">1 week ago</span>
                              </div>
                              <p className="text-xs text-gray-700">
                                Client approved the initial design concepts. Moving forward with development.
                              </p>
                            </div>
                          </div>
                          {project.notes > 2 && (
                            <div className="mt-2 text-center">
                              <button className="text-xs text-blue-600 hover:text-blue-800">
                                View all {project.notes} notes
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </DashboardLayout>
  );
} 