interface MatcherArgs {
    pathname: string
}

const searchRegex = /^\/busca\/([^/]+)/
// custom matcher for search pages in Americanas case.
export function matcher({pathname}: MatcherArgs): string | null {
  const searchMatch = pathname.match(searchRegex)
  if (searchMatch) {
    const searchTerm = searchMatch[1].replaceAll('-', '+')
    return `/s?q=${searchTerm}`
  }
  return null
}
