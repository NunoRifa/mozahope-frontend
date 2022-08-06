<script>
  import LoadingPage from "$lib/utils/LoadingPage.svelte";
  import FormToast from "$lib/dialog/FormToast.svelte";
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
  <FormToast />
</main>

<style lang="scss" global>
  main {
    font-family: "Poppins", sans-serif;
    background: transparent;
  }
</style>
