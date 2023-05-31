import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import parse from '../../util/parse';

export const load = (async ({ params }) => {

  const result = await parse('https://rss.octetpod.com');
  const slug = parseInt(params.slug, 10);

  if (!result?.items || result?.items.length < slug) {
    throw error(404, {
      message: 'Not found'
    });
  }

  return {
    episode: result?.items[slug - 1]
    // data: await parse('https://blog.ethereum.org/feed.xml')
    // data: await parse('https://feeds.simplecast.com/6WD3bDj7')
  }
}) satisfies PageServerLoad;
