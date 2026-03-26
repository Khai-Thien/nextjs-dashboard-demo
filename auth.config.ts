import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const pathname = nextUrl.pathname;
      const localeMatch = pathname.match(/^\/(en|vi)(\/|$)/);
      const localePrefix = localeMatch ? `/${localeMatch[1]}` : '/en';
      const pathnameWithoutLocale = localeMatch
        ? pathname.replace(/^\/(en|vi)/, '') || '/'
        : pathname;

      const isOnDashboard = pathnameWithoutLocale.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return Response.redirect(new URL(`${localePrefix}/login`, nextUrl));
      } else if (isLoggedIn) {
        return Response.redirect(new URL(`${localePrefix}/dashboard`, nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;