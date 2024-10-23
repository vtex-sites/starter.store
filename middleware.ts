import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


const database: Record<string, string> = {
  '/produto/7428352752/test-1': '/produto-handmade-plastic-chips-9009169/p',
  '/produto/7428352752/test-2': '/ergonomic-granite-mouse-57815628/p',
}

const delay = (ms: number) => new Promise( resolve => setTimeout( resolve, ms ) )

export async function middleware(req: NextRequest) {
  // Get the pathname of the request (e.g., "/produto/7428352752/test-1")
  await delay(2000)
  const { pathname } = req.nextUrl
  console.log(pathname)
  // Check if the requested path exists in our redirect map 
  if (database[pathname]) {
    const pathnameToRedirect = database[pathname]
    const redirectUrl = 'https://www.vtexfaststore.com' + pathnameToRedirect

    const redirectStatusCode = 301
    const response = NextResponse.redirect(redirectUrl, redirectStatusCode)

    response.headers.set(
      'Cache-Control',
      'public, max-age=300, stale-while-revalidate=31536000'
    )

    return response
  }

  // If no redirect is required, continue to the requested page
  return NextResponse.next()
}

// Define the paths where the middleware should run
export const config = {
  // You can customize this to match specific paths (e.g., only run middleware on certain routes)
  matcher: '/produto/:path*',
}