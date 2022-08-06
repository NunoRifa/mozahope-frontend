<script>
  import { Circle2 } from "svelte-loading-spinners";

  export let loading;
</script>

<svelte:head>
  {#if !loading}
    <style>
      body {
        height: 100vh;
        overflow: hidden;
      }
    </style>
  {/if}
</svelte:head>

<section id="loading-page">
  <div>
    <Circle2 size="60" color="#FF3E00" unit="px" duration="1s" />
  </div>
</section>

<style lang="scss">
  #loading-page > div {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #loading-page {
    background: white;
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    z-index: 11;
  }
</style>
