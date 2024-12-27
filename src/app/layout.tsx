// app/layout.tsx

import Link from 'next/link';
import './globals.css'; // Import the global styles here

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Portfolio</title>
      </head>
      <body>
        <header>
          <nav>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          {children}
        </main>
        <footer>
          <p>&copy; 2024 My Portfolio</p>
        </footer>
      </body>
    </html>
  );
}

