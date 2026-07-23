import './globals.css';

export const metadata = {
  title: 'New Project',
  description: 'Built on the standard Next.js + Airtable + Vercel framework.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
