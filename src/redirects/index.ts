type MatcherArgs = {
  pathname: string;
};

interface MatcherReturn {
  destination: string;
  permanent?: boolean;
}

const searchRegex = /^\/busca\/([^/]+)/;

export function matcher({ pathname }: MatcherArgs): MatcherReturn | null {
  const searchMatch = pathname.match(searchRegex);
  if (searchMatch) {
    const searchTerm = searchMatch[1].replaceAll("-", "+");
    return {
      destination: `/s?q=${searchTerm}`,
    };
  }
  return null;
}
