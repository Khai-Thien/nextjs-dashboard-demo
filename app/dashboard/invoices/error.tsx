"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getLocaleFromPath, getMessages } from "@/app/lib/i18n-lite";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const t = getMessages(locale);

  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">{t.errors.somethingWentWrong}</h2>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={
          // Attempt to recover by trying to re-render the invoices route
          () => reset()
        }
      >
        {t.errors.tryAgain}
      </button>
    </main>
  );
}
