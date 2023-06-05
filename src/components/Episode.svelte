<script lang="ts">
  import type { episode } from '../routes/+page.svelte';
  export let episode: episode;
  export let index: number | null = null;
  import { browser } from '$app/environment';
  import { stripAcastBlurb } from '../util/stripAcastBlurb';
</script>

<div class="episode">
  {#if episode}
  <h2>{episode.title}</h2>
  <p class="play"><a href="{episode.enclosures[0].url}">▶</a></p>
  <div class="description">
    {@html stripAcastBlurb(episode.description, browser, 3)}
    {#if index !== null}
    <p>
      <a href={`/${index}`}>
        Direct Link
      </a>
    </p>
    {/if}
  </div>
  <hr/>
  {/if}
</div>