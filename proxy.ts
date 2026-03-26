import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import { NextResponse } from 'next/server';

const { auth } = NextAuth(authConfig);

const SUPPORTED_LOCALES = ['en', 'vi'] as const;
const DEFAULT_LOCALE = 'en';
const LOCALE_COOKIE_NAME = 'NEXT_LOCALE';

export default auth((req) => {
  const { pathname } = req.nextUrl;

  const isPublicFile = /\.(.*)$/.test(pathname);
  if (isPublicFile) return;

  const pathnameHasLocale = SUPPORTED_LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (!pathnameHasLocale) {
    const cookieLocale = req.cookies.get(LOCALE_COOKIE_NAME)?.value;
    const preferredLocale: (typeof SUPPORTED_LOCALES)[number] = SUPPORTED_LOCALES.includes(
      cookieLocale as (typeof SUPPORTED_LOCALES)[number],
    )
      ? (cookieLocale as (typeof SUPPORTED_LOCALES)[number])
      : DEFAULT_LOCALE;

    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = `/${preferredLocale}${pathname}`;

    const response = NextResponse.redirect(redirectUrl);
    response.cookies.set(LOCALE_COOKIE_NAME, preferredLocale, { path: '/' });
    return response;
  }
  // Let NextAuth keep protecting routes when locale already exists in URL.
  return;
});
 
export const config = {
  // https://nextjs.org/docs/app/api-reference/file-conventions/proxy#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};