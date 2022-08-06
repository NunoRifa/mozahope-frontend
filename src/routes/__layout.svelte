<script>
  import LoadingPage from "$lib/utils/LoadingPage.svelte";
  import { onMount } from "svelte";

  let loading = false;

  onMount(() => {
    loading = true;
  });
</script>

<main>
  {#if !loading}
    <LoadingPage {loading} />
  {:else}
    <slot />
  {/if}
</main>

<style lang="scss" global>
  main {
    font-family: "Poppins", sans-serif;
    background: transparent;
  }
</style>
