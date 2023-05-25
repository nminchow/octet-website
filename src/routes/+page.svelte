<script lang="ts">
  import { browser } from '$app/environment';
  import type { PageData } from './$types';

  export let data: PageData;

  const stripAcastBlurb = (htmlString: string, times: number = 1) => {
    if (!browser) return htmlString;
    // create a new dov container
    const div = document.createElement('div');

    // assing your HTML to div's innerHTML
    div.innerHTML = htmlString;
    [...Array(times)].map(_ => {
      const element = div.lastChild;
      if (!element) return;
      div.removeChild(element);
    })

    return div.innerHTML;
  };

</script>

<h1>Octet</h1>
<p>{@html stripAcastBlurb(data.rss.description, 2)}</p>
<h3>
  <a href="https://open.spotify.com/show/3Qz1V5AzM4FYfz75SdEXfq">Spotify</a>,
  <a href="https://podcasts.apple.com/us/podcast/octet/id1689155893">iTunes</a>,
  <a>Google Podcasts</a>
</h3>
<hr/>
{#each data.rss.items as episode}
<div class="episode">
  <h2>{episode.title}</h2>
  <p><a href="{episode.enclosures[0].url}">Listen!</a></p>
  <p class="description">{@html stripAcastBlurb(episode.description)}</p>
</div>
{/each}
