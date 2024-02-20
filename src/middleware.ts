/**
 * Middleware executes before routes are rendered. It's particularly useful for implementing custom server-side logic like authentication, logging, or handling redirects.
 */

import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Your Middleware logic here
  // Check if the user is authenticated
  if (!request.cookies?.has('authenticated')) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  return NextResponse.next(); // Pass control to the next Middleware or route handler
}

// matcher allows you to filter Middleware to run on specific paths
export const config = {
  matcher: ['/user/:path*', '/dashboard/:path*'],
};
