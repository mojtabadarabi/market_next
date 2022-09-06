// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getCookie } from 'cookies-next';

const PUBLIC_FILE = /\.(.*)$/

export function middleware(request: NextRequest) {
    if (
        request.nextUrl.pathname.startsWith('/_next') ||
        request.nextUrl.pathname.includes('/api/') ||
        PUBLIC_FILE.test(request.nextUrl.pathname)
    ) {
        return
    }
    if (request.nextUrl.locale === 'default') {
        return NextResponse.redirect(new URL(`/${process.env.DEFAULT_LOCALE}${request.nextUrl.pathname}`, request.url))
    }
}