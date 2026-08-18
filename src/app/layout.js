import "./globals.css";
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: "Descience Open Source Club | AI Masterclass",
  description: "Master Applied GenAI in our 6-month, hands-on cohort.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
