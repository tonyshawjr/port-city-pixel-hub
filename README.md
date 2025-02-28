# Port City Pixel Hub

A comprehensive freelancer management system built with modern web technologies.

## Technologies Used

- **Next.js**: Frontend framework for React applications
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality UI components built with Radix UI and Tailwind CSS
- **Supabase**: Backend database and authentication
- **Stripe**: Payment processing

## Features

- User authentication (login/register)
- Role-based access control (admin, freelancer, client)
- Client management
- Project tracking
- Invoice generation and payment processing
- Support ticket system
- Dashboard with analytics

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Create a `.env.local` file with the following variables:
     ```
     NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
     NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
     ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `app/`: Next.js app router pages and layouts
- `components/`: Reusable UI components
- `lib/`: Utility functions and API clients
- `public/`: Static assets

## License

MIT