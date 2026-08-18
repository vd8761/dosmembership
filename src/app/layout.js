import "./globals.css";
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: "DOS CLUB | Edition 3 - 2026",
  description: "Master Applied GenAI in our 27 weeks, hands-on Fellowship. Build production-grade agents, automate workflows, and join a premier community of AI developers.",
  keywords: ["AI Masterclass", "Generative AI", "Descience Open Source Club", "DOS Club", "Tech Fellowship", "AI Developers", "Next.js"],
  authors: [{ name: "Descience Open Source Club" }],
  openGraph: {
    title: "DOS CLUB | Edition 3 - 2026",
    description: "Master Applied GenAI in our 27 weeks, hands-on Fellowship. Build production-grade AI agents.",
    url: "https://dosopensourcefriday.vercel.app",
    siteName: "DOS Club",
    images: [
      {
        url: "/favicon.png",
        width: 800,
        height: 600,
        alt: "DOS Club Edition 3",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DOS CLUB | Edition 3 - 2026",
    description: "Join the premier 27 weeks AI Fellowship. Master Generative AI and build real-world applications.",
    images: ["/favicon.png"],
  },
  robots: {
    index: true,
    follow: true,
  }
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
