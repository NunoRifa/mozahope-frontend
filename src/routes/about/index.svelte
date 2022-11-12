<script context="module">
  import About from "$lib/services/About";

  export async function load({ session }) {
    const about = await About.list();

    let data = {
      about: about?.data,
    };

    return {
      props: {
        data,
      },
    };
  }
</script>

<script>
  import MediaQuery from "$lib/utils/MediaQuery.svelte";
  import ResponsiveView from "$lib/page/about/responsive.svelte";
  import PageError from "$lib/page/PageError.svelte";
  import WebView from "$lib/page/about/web.svelte";

  export let data;
</script>

<MediaQuery query="(max-width: 768px)" let:matches>
  {#if matches}
    <!-- <PageError /> -->
    <ResponsiveView data={data?.about} />
  {:else}
    <WebView data={data?.about} />
  {/if}
</MediaQuery>
