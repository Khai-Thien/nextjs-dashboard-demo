"use client";

import { usePathname, useRouter } from "next/navigation";

const SUPPORTED_LOCALES = ["en", "vi"] as const;
const LOCALE_COOKIE_NAME = "NEXT_LOCALE";

type Locale = (typeof SUPPORTED_LOCALES)[number];

function isLocale(value: string): value is Locale {
  return SUPPORTED_LOCALES.includes(value as Locale);
}

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);
  const currentLocale = isLocale(segments[0] ?? "") ? segments[0] : "en";

  const changeLanguage = (newLocale: Locale) => {
    const pathSegments = pathname.split("/").filter(Boolean);

    if (isLocale(pathSegments[0] ?? "")) {
      pathSegments[0] = newLocale;
    } else {
      pathSegments.unshift(newLocale);
    }

    const nextPath = `/${pathSegments.join("/")}`;
    const query = typeof window !== "undefined" ? window.location.search : "";

    document.cookie = `${LOCALE_COOKIE_NAME}=${newLocale}; path=/; max-age=31536000`;
    router.push(query ? `${nextPath}${query}` : nextPath);
  };

  return (
    <div className="flex items-center gap-2 rounded-md bg-white/90 px-2 py-1 shadow-sm ring-1 ring-gray-200">
      <button
        type="button"
        onClick={() => changeLanguage("en")}
        className={`rounded px-2 py-1 text-sm font-medium ${
          currentLocale === "en"
            ? "bg-blue-600 text-white"
            : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => changeLanguage("vi")}
        className={`rounded px-2 py-1 text-sm font-medium ${
          currentLocale === "vi"
            ? "bg-blue-600 text-white"
            : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        VI
      </button>
    </div>
  );
}
