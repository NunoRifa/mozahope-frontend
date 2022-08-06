<script>
    import MediaQuery from '$lib/utils/MediaQuery.svelte';
    import PageError from '$lib/page/PageError.svelte';
    import WebView from '$lib/page/ticket/web.svelte';
</script>

<section id="ticket">
    <MediaQuery query="(max-width: 768px)" let:matches>
        {#if matches}
            <PageError />
        {:else}
            <WebView />
        {/if}
    </MediaQuery>
</section>

<style lang="scss">
    #ticket {

    }
</style>