# Green Generation Landscaping

A modern web application for Green Generation Landscaping, built with Next.js, Payload CMS, and Tailwind CSS.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **CMS:** [Payload CMS](https://payloadcms.com/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Database:** PostgreSQL (via [Neon](https://neon.tech/))
- **Deployment:** Vercel

## Getting Started

1.  **Install dependencies:**

    ```bash
    npm install
    # or
    pnpm install
    ```

2.  **Run the development server:**

    ```bash
    npm run dev
    # or
    pnpm dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Folder Structure

- `app/(gg-site)`: Main website pages and components.
- `app/(payload)`: Payload CMS admin UI and API.
- `app/(gg-site)/ui`: Reusable UI components.
- `app/(gg-site)/lib`: Utility functions and shared logic (e.g., email templates).
- `collections`: Payload CMS collection definitions.
- `migrations`: Database migrations.

## Key Features

- **Responsive Design:** Optimized for all devices using Tailwind CSS.
- **Dynamic Content:** Managed via Payload CMS.
- **Contact Form:** Integrated with Resend for email notifications.
- **Modern UI:** Uses Radix UI and custom components for a premium feel.
