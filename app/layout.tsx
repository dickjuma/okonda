import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BI-LOR CONSTRUCTION & ENGINEERING LTD. | Building Africa's Future",
  description: "Professional construction company in Kenya delivering residential, commercial, and infrastructure projects across Africa. NCA Registered, ISO Certified.",
  keywords: ["construction Kenya", "building contractors Africa", "civil engineering", "road construction", "NCA registered", "infrastructure development"],
  authors: [{ name: "BI-LOR Construction" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://bilorconstruction.com",
    title: "BI-LOR CONSTRUCTION & ENGINEERING LTD.",
    description: "Building Africa's Future, One Project at a Time",
    siteName: "BI-LOR Construction",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BI-LOR Construction Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@bilorconstruction",
    creator: "@bilorconstruction",
    title: "BI-LOR CONSTRUCTION & ENGINEERING LTD.",
    description: "Professional construction services in Kenya and Africa",
    images: ["/twitter-image.jpg"],
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#F97316", // Orange-500 color
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://bilorconstruction.com" />
        
        {/* Additional meta tags for construction industry */}
        <meta name="geo.region" content="KE" />
        <meta name="geo.placename" content="Eldoret, Uasin Gishu County" />
        <meta name="geo.position" content="0.5143;35.2698" />
        <meta name="ICBM" content="0.5143, 35.2698" />
        
        {/* Structured Data for Construction Company */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ConstructionBusiness",
              "name": "BI-LOR CONSTRUCTION & ENGINEERING LTD.",
              "image": "https://bilorconstruction.com/logo.png",
              "@id": "https://bilorconstruction.com",
              "url": "https://bilorconstruction.com",
              "telephone": "+254799236234",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Hill Side Estate",
                "addressLocality": "Kapsoya Eldoret",
                "addressRegion": "Uasin Gishu County",
                "addressCountry": "KE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 0.5143,
                "longitude": 35.2698
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "08:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.facebook.com/bilorconstruction",
                "https://www.linkedin.com/company/bilorconstruction",
                "https://twitter.com/bilorconstruction",
                "https://www.instagram.com/bilorconstruction"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-800 overflow-x-hidden`} suppressHydrationWarning>
        {/* Toast Notifications */}
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1F2937',
              color: '#FFF',
              fontSize: '14px',
              borderRadius: '8px',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
              padding: '16px 20px',
              fontWeight: '500',
            },
            success: {
              style: {
                background: '#10B981',
              },
              iconTheme: {
                primary: '#FFF',
                secondary: '#10B981',
              },
            },
            error: {
              style: {
                background: '#EF4444',
              },
              iconTheme: {
                primary: '#FFF',
                secondary: '#EF4444',
              },
            },
            loading: {
              style: {
                background: '#F97316',
              },
            },
          }}
        />
        
        {/* Smooth scroll progress indicator */}
        <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent">
          <div 
               className="h-full bg-orange-500 transition-all duration-300 ease-out" 
               style={{ width: '0%' }}
               id="progress-bar"
               suppressHydrationWarning={true}></div>
        </div>
        
        {children}
        
        {/* Progress bar script */}
        <script dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              const progressBar = document.getElementById('progress-bar');
              if (progressBar) {
                window.addEventListener('scroll', function() {
                  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                  const scrolled = (window.scrollY / windowHeight) * 100;
                  progressBar.style.width = scrolled + '%';
                });
              }
            });
          `
        }} />
      </body>
    </html>
  );
}