"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { 
  ArrowLeft,
  Calendar,
  FileText,
  DollarSign,
  Clock,
  CheckCircle,
  AlertCircle,
  Edit,
  Trash2,
  FileUp,
  MessageSquare,
  Plus,
  ChevronDown,
  ExternalLink,
  MoreHorizontal
} from "lucide-react";
import DashboardLayout from "@/components/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// Sample project data - in a real app, you'd fetch this based on the ID
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
    description: "Complete redesign of the company website with modern UI/UX principles, responsive design, and improved content management system.",
    files: [
      { name: "Project Agreement.pdf", size: "2.4 MB", type: "agreement", date: "2023-05-10" },
      { name: "Scope of Work.docx", size: "1.8 MB", type: "scope", date: "2023-05-12" },
      { name: "Design Mockups.zip", size: "8.7 MB", type: "design", date: "2023-05-20" },
      { name: "Content Guidelines.pdf", size: "1.2 MB", type: "document", date: "2023-05-25" }
    ],
    notes: [
      { title: "Client Meeting", date: "2023-06-10", content: "Discussed project timeline and deliverables. Client requested additional features for the homepage." },
      { title: "Design Approval", date: "2023-05-30", content: "Client approved the initial design concepts. Moving forward with development." }
    ],
    invoices: [
      { id: "INV-1087", amount: 2000, status: "Paid", date: "2023-05-15" },
      { id: "INV-1092", amount: 1000, status: "Pending", date: "2023-06-15" }
    ],
    clientApproval: {
      agreement: "Approved",
      scope: "Approved",
      design: "Approved"
    }
  }
];

export default function ProjectDetails() {
  const params = useParams();
  const projectId = params.id as string;
  
  // Find the project by ID
  const project = projects.find(p => p.id === projectId) || projects[0];
  
  const [activeTab, setActiveTab] = useState("overview");
  const [showNewNoteForm, setShowNewNoteForm] = useState(false);
  const [newNote, setNewNote] = useState({ title: "", content: "" });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Completed":
        return "success";
      case "In Progress":
        return "default";
      case "Not Started":
        return "secondary";
      case "On Hold":
        return "warning";
      case "Approved":
        return "success";
      case "Pending":
        return "warning";
      case "Paid":
        return "success";
      case "Not Sent":
        return "secondary";
      default:
        return "default";
    }
  };

  const handleStatusChange = (newStatus: string) => {
    // In a real app, you'd update the project status here
    console.log(`Changing status to: ${newStatus}`);
  };

  const handleAddNote = () => {
    // In a real app, you'd add the note to the project
    console.log("Adding note:", newNote);
    setNewNote({ title: "", content: "" });
    setShowNewNoteForm(false);
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <header className="bg-background border-b p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/dashboard/projects">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <div>
              <h1 className="text-xl font-semibold">{project.name}</h1>
              <p className="text-sm text-muted-foreground">Client: {project.client}</p>
            </div>
            <Badge variant={getStatusVariant(project.status) as any}>{project.status}</Badge>
          </div>
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  Status <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => handleStatusChange("Not Started")}>
                  Not Started
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleStatusChange("In Progress")}>
                  In Progress
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleStatusChange("On Hold")}>
                  On Hold
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleStatusChange("Completed")}>
                  Completed
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="outline">Edit Project</Button>
          </div>
        </div>
      </header>

      {/* Main content area */}
      <main className="flex-1 overflow-auto p-6">
        <div className="container mx-auto">
          <Tabs defaultValue="overview" onValueChange={setActiveTab} value={activeTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="files">Files & Documents</TabsTrigger>
              <TabsTrigger value="notes">Notes & Updates</TabsTrigger>
              <TabsTrigger value="invoices">Invoices</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview">
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Project Details</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-2">Client</h3>
                        <p>{project.client}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-2">Status</h3>
                        <Badge variant={getStatusVariant(project.status) as any}>{project.status}</Badge>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-2">Start Date</h3>
                        <p>{formatDate(project.startDate)}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-2">End Date</h3>
                        <p>{formatDate(project.endDate)}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-2">Budget</h3>
                        <p>{formatCurrency(project.budget)}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-2">Invoiced</h3>
                        <p>{formatCurrency(project.invoiced)}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-2">Paid</h3>
                        <p>{formatCurrency(project.paid)}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-2">Outstanding</h3>
                        <p>{formatCurrency(project.budget - project.paid)}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Notes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {project.notes.slice(0, 2).map((note, index) => (
                          <div key={index} className="border rounded-lg p-3">
                            <h4 className="font-medium">{note.title}</h4>
                            <p className="text-xs text-muted-foreground mt-1">{note.date}</p>
                            <p className="text-sm mt-2">{note.content}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    {project.notes.length > 2 && (
                      <CardFooter>
                        <Button variant="ghost" size="sm" onClick={() => setActiveTab("notes")}>
                          View all {project.notes.length} notes
                        </Button>
                      </CardFooter>
                    )}
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Related Invoices</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {project.invoices.slice(0, 2).map((invoice, index) => (
                          <div key={index} className="border rounded-lg p-3">
                            <div className="flex justify-between items-center">
                              <div>
                                <h4 className="font-medium text-primary">{invoice.id}</h4>
                                <p className="text-xs text-muted-foreground mt-1">{invoice.date}</p>
                              </div>
                              <div className="flex items-center gap-3">
                                <span className="font-medium">{formatCurrency(invoice.amount)}</span>
                                <Badge variant={getStatusVariant(invoice.status) as any}>{invoice.status}</Badge>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    {project.invoices.length > 2 && (
                      <CardFooter>
                        <Button variant="ghost" size="sm" onClick={() => setActiveTab("invoices")}>
                          View all {project.invoices.length} invoices
                        </Button>
                      </CardFooter>
                    )}
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Files Tab */}
            <TabsContent value="files">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Project Files & Documents</h2>
                <Button>
                  <FileUp className="h-4 w-4 mr-2" />
                  Upload File
                </Button>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>All Files</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {project.files.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50">
                        <div className="flex items-center">
                          <FileText className="h-5 w-5 text-primary mr-3" />
                          <div>
                            <p className="font-medium">{file.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {file.size} • {formatDate(file.date)}
                            </p>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Notes Tab */}
            <TabsContent value="notes">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Project Notes & Updates</h2>
                <Button onClick={() => setShowNewNoteForm(!showNewNoteForm)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Note
                </Button>
              </div>

              {showNewNoteForm && (
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>Add New Note</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="note-title">Title</Label>
                        <Input
                          id="note-title"
                          value={newNote.title}
                          onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="note-content">Content</Label>
                        <Textarea
                          id="note-content"
                          rows={4}
                          value={newNote.content}
                          onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
                        />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2">
                    <Button variant="outline" onClick={() => setShowNewNoteForm(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleAddNote}>
                      Save Note
                    </Button>
                  </CardFooter>
                </Card>
              )}

              <Card>
                <CardContent className="p-0">
                  <div className="divide-y">
                    {project.notes.map((note, index) => (
                      <div key={index} className="p-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">{note.title}</h4>
                            <p className="text-sm text-muted-foreground mt-1">{note.date}</p>
                            <p className="mt-3">{note.content}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="icon">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Invoices Tab */}
            <TabsContent value="invoices">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Project Invoices</h2>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Invoice
                </Button>
              </div>

              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Invoice</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {project.invoices.map((invoice) => (
                        <TableRow key={invoice.id}>
                          <TableCell className="font-medium text-primary">
                            <Link href={`/dashboard/invoices/${invoice.id}`}>
                              {invoice.id}
                            </Link>
                          </TableCell>
                          <TableCell>{invoice.date}</TableCell>
                          <TableCell>{formatCurrency(invoice.amount)}</TableCell>
                          <TableCell>
                            <Badge variant={getStatusVariant(invoice.status) as any}>{invoice.status}</Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </DashboardLayout>
  );
} 