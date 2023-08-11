import type { FC } from 'react';

import getWikiResults from '../getWikiResults';
import Item from './components/Item';

interface SearchResultsProps {
  params: {
    searchTerm: string;
  };
}

export const generateMetadata = async ({
  params: { searchTerm },
}: SearchResultsProps) => {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  const displayTerm = searchTerm.replaceAll('%20', ' ');

  if (!data?.query?.pages) {
    return {
      title: `${displayTerm} Not Found`,
    };
  }

  return {
    title: displayTerm,
    description: `Search results for ${displayTerm}`,
  };
};

const SearchResults: FC<SearchResultsProps> = async ({
  params: { searchTerm },
}) => {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  const results: Result[] | undefined = data?.query?.pages;

  return (
    <main className="mx-auto min-h-screen max-w-lg bg-slate-200 py-1">
      {results ? (
        Object.values(results).map((result) => {
          return <Item key={result.pageid} result={result} />;
        })
      ) : (
        <h2 className="p-2 text-xl">{`${searchTerm} Not Found`}</h2>
      )}
    </main>
  );
};

export default SearchResults;
