import type { PageServerLoad } from './$types';
import parse from '../util/parse';

export const load = (async () => {
  return {
    rss: await parse('https://rss.octetpod.com')
    // data: await parse('https://blog.ethereum.org/feed.xml')
    // data: await parse('https://feeds.simplecast.com/6WD3bDj7')
  }
}) satisfies PageServerLoad;
