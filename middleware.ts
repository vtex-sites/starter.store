import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


const database: Record<string, string> = {
  '/produto/7428352752/test-1': '/produto-handmade-plastic-chips-9009169/p',
  '/produto/7428352752/test-2': '/ergonomic-granite-mouse-57815628/p',
}

export function middleware(req: NextRequest) {
  // Get the pathname of the request (e.g., "/produto/7428352752/test-1")
  const { pathname } = req.nextUrl

  // Check if the requested path exists in our redirect map 
  if (database[pathname]) {
    // Perform the redirect
    const url = req.nextUrl.clone()
    url.pathname = database[pathname]

    // Return a redirect response (302 by default)
    return NextResponse.redirect(url)
  }

  // If no redirect is required, continue to the requested page
  return NextResponse.next()
}

// Define the paths where the middleware should run
export const config = {
  // You can customize this to match specific paths (e.g., only run middleware on certain routes)
  matcher: '/produto/:path*',
}