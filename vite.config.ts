import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig(({ command }: { command: string }) => {
	const shared = {
		plugins: [sveltekit()]
	};
  if (command === 'serve') {
    return shared
  } else {
    return {
			...shared,
			ssr: {
				noExternal: ['rss-to-json']
			},
    }
  }
})
