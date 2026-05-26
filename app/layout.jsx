import "./globals.css";

export const metadata = {
  title: "GLG Capital Management",
  description:
    "Private asset management firm focused on strategic capital management, systematic investment strategies and long-term institutional development.",
  
  keywords: [
    "GLG Capital Management",
    "Asset Management",
    "Private Investment Firm",
    "Investment Management",
    "Capital Management",
    "Family Office",
    "Alternative Investments",
    "Quantitative Strategies",
    "Systematic Trading",
    "Global Markets",
  ],

  authors: [{ name: "GLG Capital Management" }],

  creator: "GLG Capital Management",

  openGraph: {
    title: "GLG Capital Management",
    description:
      "Private asset management firm focused on strategic capital management and long-term institutional development.",
    url: "https://glgcapitalmanagement.com",
    siteName: "GLG Capital Management",
    locale: "es_DO",
    type: "website",
  },

  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
