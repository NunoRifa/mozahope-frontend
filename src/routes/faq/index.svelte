<script context="module">
	import Faq from '$lib/services/Faq';

	export async function load({ session }) {
		const faq = await Faq.list();

    let data = {
      faqs: faq?.data
    }

		return {
			props: {
        data
			}
		};
	}
</script>

<script>
  import MediaQuery from "$lib/utils/MediaQuery.svelte";
  import PageError from "$lib/page/PageError.svelte";
  import WebView from "$lib/page/faq/web.svelte";

  export let data;
</script>

<MediaQuery query="(max-width: 768px)" let:matches>
  {#if matches}
    <PageError />
  {:else}
    <WebView data={data?.faqs} />
  {/if}
</MediaQuery>
