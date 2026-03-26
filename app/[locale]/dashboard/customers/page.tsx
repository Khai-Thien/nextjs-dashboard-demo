import { Metadata } from "next";
import { getMessages, type Locale } from "@/app/lib/i18n-lite";

export const metadata: Metadata = {
  title: "Customers",
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = getMessages(locale);
  return <p>{t.customers.page}</p>;
}
