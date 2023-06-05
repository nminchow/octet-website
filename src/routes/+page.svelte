<script lang="ts">
  import { browser } from '$app/environment';
  import type { PageData } from './$types';
  import { stripAcastBlurb } from '../util/stripAcastBlurb';
	import Episode from '../components/Episode.svelte';

  export let data: PageData;

</script>

<script context="module" lang="ts">
  export type episode = NonNullable<PageData['rss']>['items'][0];
</script>

<p>{@html stripAcastBlurb(data.rss.description, browser, 2)}</p>
<h3>
  <a href="https://open.spotify.com/show/3Qz1V5AzM4FYfz75SdEXfq">Spotify</a>,
  <a href="https://podcasts.apple.com/us/podcast/octet/id1689155893">iTunes</a>,
  <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9yc3Mub2N0ZXRwb2QuY29tLw"> Google Podcasts</a>
</h3>
<hr/>
<div class="episode-list">
  {#each data.rss.items as episode, index}
  <Episode {episode} index={data.rss.items.length - index}></Episode>
  {/each}
</div>

