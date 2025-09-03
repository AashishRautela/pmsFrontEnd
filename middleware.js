import { NextResponse } from 'next/server';

const protectedRoutes = ['/home'];

export default function middleware(request) {
  const token = request.cookies.get('accessToken')?.value;
  const { pathname } = request.nextUrl;

  console.log('Middleware running for:', pathname);
  console.log('Token:', token ? 'Present' : 'Not Found');

  // Redirect logged-in user from `/` to `/home`
  if (token && pathname === '/') {
    return NextResponse.redirect(new URL('/home', request.url));
  }

  // Redirect unauthenticated user from protected routes to `/`
  if (!token && protectedRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/home']
};
