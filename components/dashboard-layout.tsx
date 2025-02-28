"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  FileText, 
  TicketCheck, 
  Settings, 
  LogOut,
  Briefcase,
  User,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="w-64 border-r bg-card">
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center p-4 border-b">
            <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">PH</span>
            </div>
            <span className="ml-2 font-bold text-xl">Pixel Hub</span>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-auto py-4">
            <nav className="space-y-1 px-2">
              <Link
                href="/dashboard"
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  isActive("/dashboard")
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <LayoutDashboard className="h-5 w-5 mr-3" />
                Dashboard
              </Link>
              <Link
                href="/dashboard/projects"
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  isActive("/dashboard/projects") || pathname.startsWith("/dashboard/projects/")
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <Briefcase className="h-5 w-5 mr-3" />
                Projects
              </Link>
              <Link
                href="/dashboard/invoices"
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  isActive("/dashboard/invoices") || pathname.startsWith("/dashboard/invoices/")
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <FileText className="h-5 w-5 mr-3" />
                Invoices
              </Link>
              <Link
                href="/dashboard/tickets"
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  isActive("/dashboard/tickets") || pathname.startsWith("/dashboard/tickets/")
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <TicketCheck className="h-5 w-5 mr-3" />
                Support Tickets
              </Link>
              <Link
                href="/dashboard/settings"
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  isActive("/dashboard/settings")
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <Settings className="h-5 w-5 mr-3" />
                Settings
              </Link>
            </nav>
          </div>

          {/* User profile */}
          <div className="p-4 border-t">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="w-full flex items-center justify-between px-2">
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarImage src="/avatar.png" alt="Tony Shaw" />
                      <AvatarFallback>TS</AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <p className="text-sm font-medium">Tony Shaw</p>
                      <p className="text-xs text-muted-foreground">Admin</p>
                    </div>
                  </div>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {children}
      </div>
    </div>
  );
} 