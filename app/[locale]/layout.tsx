import { ReactNode } from "react";
import { notFound } from "next/navigation";

const SUPPORTED_LOCALES = ["en", "vi"] as const;

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (
    !SUPPORTED_LOCALES.includes(locale as (typeof SUPPORTED_LOCALES)[number])
  ) {
    notFound();
  }

  return children;
}
