import { NextRequest, NextResponse } from 'next/server';

export const middleware = async (request: NextRequest) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/user/me`, {
      headers: { Cookie: request.headers.get('cookie') ?? '' },
      cache: 'no-store',
    });

    if (res.ok) {
      const json = await res.json();
      const role = json?.data?.role as string | undefined;
      if (role === 'ADMIN' || role === 'ROOT') {
        return NextResponse.next();
      }
    }
  } catch {}

  return NextResponse.rewrite(new URL('/not-found', request.url));
};

export const config = {
  matcher: ['/admin', '/admin/:path*'],
};
