<script context="module">
  import Background from '$lib/services/Background';
	import Homepage from '$lib/services/Homepage';

	export async function load({ session }) {
		const home = await Homepage.list();
    const background = await Background.list();

    let data = {
      homes: home?.data[0],
      bg: background?.data[0]
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
  import WebView from "$lib/page/home/web.svelte";

  export let data;
</script>

<MediaQuery query="(max-width: 768px)" let:matches>
  {#if matches}
    <PageError />
  {:else}
    <WebView data={data?.homes} background={data?.bg} />
    <!-- <PageError /> -->
  {/if}
</MediaQuery>
