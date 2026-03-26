import Form from "@/app/ui/invoices/create-form";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { fetchCustomers } from "@/app/lib/data";
import { Metadata } from "next";
import { getMessages, type Locale } from "@/app/lib/i18n-lite";

export const metadata: Metadata = {
  title: "Create Invoice",
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = getMessages(locale);
  const customers = await fetchCustomers();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: t.invoices.title, href: `/${locale}/dashboard/invoices` },
          {
            label: t.invoices.create,
            href: `/${locale}/dashboard/invoices/create`,
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}
