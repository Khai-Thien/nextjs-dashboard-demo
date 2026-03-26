import { CheckIcon, ClockIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { getMessages, type Locale } from "@/app/lib/i18n-lite";

export default function InvoiceStatus({
  status,
  locale = "en",
}: {
  status: string;
  locale?: Locale;
}) {
  const t = getMessages(locale);
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-2 py-1 text-xs",
        {
          "bg-gray-100 text-gray-500": status === "pending",
          "bg-green-500 text-white": status === "paid",
        },
      )}
    >
      {status === "pending" ? (
        <>
          {t.invoices.pending}
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {status === "paid" ? (
        <>
          {t.invoices.paid}
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
