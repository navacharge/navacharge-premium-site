import './globals.css';

export const metadata = {
  title: 'NavaCharge | EV Charging Reliability, Made Visible',
  description: 'Diagnostics, RMA validation, uptime improvement, cable management, and customer portal visibility for EV charging sites.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
