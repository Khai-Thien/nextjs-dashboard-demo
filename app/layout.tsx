import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import { Metadata } from "next";
import LanguageSwitcher from "@/app/ui/language-switcher";

export const metadata: Metadata = {
  title: {
    template: "%s | Acme Dashboard",
    default: "Acme Dashboard",
  },
  description: "The official Next.js Learn Dashboard built with App Router.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="fixed right-3 top-3 z-50 md:right-4 md:top-4">
          <LanguageSwitcher />
        </div>
        {children}
      </body>
    </html>
  );
}
