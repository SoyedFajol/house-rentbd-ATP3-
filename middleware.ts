// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const isAuthPage = request.nextUrl.pathname.startsWith('/auth');
  const isDashboardPage = request.nextUrl.pathname.startsWith('/pages/Merchant/dashboard');

  if (!token && isDashboardPage) {
    return NextResponse.redirect(new URL('/auth/signin', request.url));
  }

  if (token && isAuthPage) {
    return NextResponse.redirect(new URL('/Merchant/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/auth/:path*', '/Merchant/:path*']
};