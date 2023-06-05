import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import parse from '../../util/parse';

export const load = (async ({ params }) => {

  // const result = await parse('https://rss.octetpod.com');
  // something weird is happening in cloudflares env when we try to fetch this directly
  const result = await parse('https://feeds.acast.com/public/shows/6452ab451ec047001147ca2f');
  const slug = parseInt(params.slug, 10);

  if (!result?.items || result?.items.length < slug) {
    throw error(404, {
      message: 'Not found'
    });
  }

  const index = result.items.length - slug;

  return {
    episode: result?.items[index]
    // data: await parse('https://blog.ethereum.org/feed.xml')
    // data: await parse('https://feeds.simplecast.com/6WD3bDj7')
  }
}) satisfies PageServerLoad;
