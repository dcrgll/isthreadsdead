import { get } from '@vercel/edge-config';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const dead = (await get('dead')) || ('nope' as any);
  const response = NextResponse.next();
  response.headers.set('X-ITDY', dead);

  return response;
}

export const config = {
  matcher: '/',
};
