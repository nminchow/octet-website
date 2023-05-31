<script lang="ts">
  import { browser } from '$app/environment';
	import Episode from '../../components/Episode.svelte';
  import type { PageData } from './$types';
  export let data: PageData;

  const episode = data.episode;

</script>

<Episode {episode}></Episode>
