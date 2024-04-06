import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(req: NextRequest) {
  const response = NextResponse.next();
  response.headers.set('x-pathname', req.nextUrl?.pathname);
  response.headers.set('x-query', req.nextUrl?.searchParams.toString());
  return response;
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
