import Form from "@/app/ui/invoices/edit-form";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { fetchCustomers, fetchInvoiceById } from "@/app/lib/data";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getMessages, type Locale } from "@/app/lib/i18n-lite";

export const metadata: Metadata = {
  title: "Edit Invoice",
};

export default async function Page(props: {
  params: Promise<{ locale: Locale; id: string }>;
}) {
  const { locale, id } = await props.params;
  const t = getMessages(locale);

  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  if (!invoice) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: t.invoices.title, href: `/${locale}/dashboard/invoices` },
          {
            label: t.invoices.edit,
            href: `/${locale}/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}
