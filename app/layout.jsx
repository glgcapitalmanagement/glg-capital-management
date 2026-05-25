import "./globals.css";

export const metadata = {
  title: "GLG Capital Management",
  description: "Private asset management firm based in Santo Domingo, Dominican Republic.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
