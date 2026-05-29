import "./globals.css";

export const metadata = {
  title: "Couple App",
  description: "Unsere persönliche App",
  // HIER DIE NEUEN PFADE EINTRAGEN:
  icons: {
    icon: "/icons/favicon.ico",         // Für den Browser-Tab
    apple: "/icons/apple-icon.png",     // Für iPhones/iOS
  },
  manifest: "/icons/manifest.json",     // Verbindung zu deiner PWA-Konfiguration
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}