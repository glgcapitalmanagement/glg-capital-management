import "./globals.css";

export const metadata = {
  title: "GLG Capital Management",
  description: "Firma privada de administración de activos enfocada en la gestión estratégica de capital.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
