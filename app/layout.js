import './globals.css';

export const metadata = {
  title: 'Outpost Kingdom',
  description: 'Tools for freedom — on the course and off.',
};

export const viewport = { width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
