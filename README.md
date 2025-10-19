# Modern Portfolio

A sleek, modern personal portfolio website built with React, TypeScript, and Tailwind CSS. This project is a fully functional, easily customizable template for developers to showcase their work and provide a point of contact.

## Features

- **Static & Fast**: No backend dependency. The site is fully static, making it incredibly fast and easy to deploy.
- **Functional Contact Form**: Uses the free [Formspree](https://formspree.io/) service to handle email submissions without any server-side code.
- **Fully Responsive Design**: Looks great on all devices, from mobile phones to desktop monitors.
- **Animated Background**: Features a beautiful, dynamic WebGL background for a modern aesthetic.
- **Glassmorphism UI**: A consistent "frosted glass" effect on cards, inputs, and the header.
- **Component-Based Architecture**: Built with reusable React components for clean and maintainable code.
- **SEO Optimized**: Includes essential meta tags, semantic HTML, and `robots.txt`/`sitemap.xml` for better search engine visibility.

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **Formspree**: A free service for handling form submissions on static websites.
- **ogl**: A lightweight WebGL library for the animated background.

## Making the Contact Form Work

This portfolio uses **Formspree** to handle contact form submissions via email. You must create a free Formspree endpoint to receive messages.

1.  **Sign Up**: Go to [formspree.io](https://formspree.io/) and create a new account (you can use your GitHub or Google account).
2.  **Create a New Form**:
    *   Click the "+ New form" button on your dashboard.
    *   Give it a name (e.g., "My Portfolio") and ensure the recipient email is correct.
    *   Click "Create Form".
3.  **Get Your Endpoint URL**:
    *   You will be redirected to the form's "Integration" page.
    *   Copy the unique URL provided. It will look something like `https://formspree.io/f/YOUR_UNIQUE_ID`.
4.  **Update the Code**:
    *   Open `src/components/Contact.tsx` in your code editor.
    *   Find the `<form>` tag and replace the placeholder `action` URL with your unique Formspree URL.
    *   **From:** `<form action="https://formspree.io/f/YOUR_FORM_ID" ...>`
    *   **To:** `<form action="https://formspree.io/f/YOUR_UNIQUE_ID" ...>`

That's it! Your contact form will now securely send messages to your email address.

## Customization Guide

1.  **Personal Information**:
    *   Update your name, job titles, and bio in `components/Header.tsx`, `components/Hero.tsx`, `components/About.tsx`, and `components/Contact.tsx`.
    *   Replace the placeholder profile picture URL (`https://i.ibb.co/6yvDLG4/user-image.png`) in `components/Hero.tsx` and `components/Contact.tsx` with a link to your own image.

2.  **Portfolio Projects**:
    *   Open `constants.ts`.
    *   Edit the `PROJECTS` array to include your own work. Update the `title`, `description`, `imageUrl`, and `liveUrl` for each project.

3.  **Services**:
    *   Open `components/Services.tsx`.
    *   Update the `wordpressServices` and `shopifyServices` arrays to reflect the services you offer.

4.  **Social Links**:
    *   In `components/Footer.tsx`, replace the `href="#"` placeholders in the anchor tags with your actual social media profile URLs.

5. **SEO and Site URL**:
    *   In `index.html`, `public/robots.txt`, and `public/sitemap.xml`, replace all instances of `https://your-domain.com/` with your actual website URL when you deploy it.
    *   Update the `og:image` and `twitter:image` meta tags in `index.html` with a direct link to your own preview image.