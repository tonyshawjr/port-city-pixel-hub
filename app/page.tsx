import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  FileText, 
  CreditCard, 
  TicketCheck, 
  BarChart3, 
  Shield 
} from "lucide-react";
import TestTailwind from '@/components/test-tailwind';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Port City Pixel Hub</h1>
            <div className="space-x-2">
              <Link href="/login">
                <Button variant="secondary">Login</Button>
              </Link>
              <Link href="/register">
                <Button variant="outline" className="bg-white text-primary">Register</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <TestTailwind />
        <section className="py-20 bg-gradient-to-b from-muted/50 to-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Freelancer Management System</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
              A comprehensive platform for managing clients, projects, invoices, and support tickets.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/register">
                <Button size="lg" className="w-full sm:w-auto">Get Started</Button>
              </Link>
              <Link href="#features">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">Learn More</Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="features" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Users className="h-8 w-8 mb-4 text-primary" />}
                title="Client Management"
                description="Organize client information, projects, and communication in one place."
              />
              <FeatureCard
                icon={<FileText className="h-8 w-8 mb-4 text-primary" />}
                title="Project Tracking"
                description="Monitor project progress, deadlines, and deliverables efficiently."
              />
              <FeatureCard
                icon={<CreditCard className="h-8 w-8 mb-4 text-primary" />}
                title="Invoicing System"
                description="Create, send, and track invoices with online payment options."
              />
              <FeatureCard
                icon={<TicketCheck className="h-8 w-8 mb-4 text-primary" />}
                title="Support Tickets"
                description="Manage client requests and track issue resolution efficiently."
              />
              <FeatureCard
                icon={<BarChart3 className="h-8 w-8 mb-4 text-primary" />}
                title="Reporting"
                description="Gain insights with financial and project status reports."
              />
              <FeatureCard
                icon={<Shield className="h-8 w-8 mb-4 text-primary" />}
                title="Secure Access"
                description="Role-based permissions ensure data security and privacy."
              />
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to streamline your freelance business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
              Join thousands of freelancers and clients who trust Port City Pixel Hub.
            </p>
            <Link href="/register">
              <Button size="lg">Create Your Account</Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Port City Pixel Hub</h3>
              <p className="text-primary-foreground/80">
                The complete solution for freelancers and agencies.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-primary-foreground/80 hover:text-primary-foreground">Home</Link></li>
                <li><Link href="/features" className="text-primary-foreground/80 hover:text-primary-foreground">Features</Link></li>
                <li><Link href="/pricing" className="text-primary-foreground/80 hover:text-primary-foreground">Pricing</Link></li>
                <li><Link href="/contact" className="text-primary-foreground/80 hover:text-primary-foreground">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/terms" className="text-primary-foreground/80 hover:text-primary-foreground">Terms of Service</Link></li>
                <li><Link href="/privacy" className="text-primary-foreground/80 hover:text-primary-foreground">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary-foreground/10">
            <p className="text-sm text-primary-foreground/60 text-center">
              © {new Date().getFullYear()} Port City Pixel Hub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-card p-6 rounded-lg shadow-sm border flex flex-col items-center text-center">
      {icon}
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
} 