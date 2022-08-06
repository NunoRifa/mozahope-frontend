import node from '@sveltejs/adapter-node';
import sveltePreprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// options passed to svelte.compile (https://svelte.dev/docs#svelte_compile)
	// compilerOptions: null,

	// an array of file extensions that should be treated as Svelte components
	extensions: ['.svelte'],

	kit: {
		adapter: node(),
		amp: false,
		appDir: '_app',
		files: {
			assets: 'static',
			hooks: 'src/hooks',
			lib: 'src/lib',
			routes: 'src/routes',
			serviceWorker: 'src/service-worker',
			template: 'src/app.html'
		},
		floc: false,
		hydrate: true,
		paths: {
			assets: '',
			base: ''
		},
		prerender: {
			crawl: true,
			enabled: true,
			force: false,
			pages: ['*']
		},
		router: true,
		ssr: true,
		vite: () => ({})
	},
	preprocess: sveltePreprocess({
		sourceMap: true,
		scss: { prependData: `@import 'src/styles/index.scss';` },
		postcss: {
			plugins: [autoprefixer()]
		},
		defaults: { style: 'postcss' }
	})
};

export default config;