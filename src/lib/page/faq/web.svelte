<script>
  import CardFaq from "$lib/components/CardFaq.svelte";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";

  export let data;
</script>

<Header />
<section id="faq">
  <div class="space" />
  <div class="container">
    <div
      class="images slide-in-top"
    >
      <img src="/placeholder/placeholder-faq.png" alt="" />
    </div>
    <div class="side">
      <div class="slide-in-right-1">
        <h2>Frequently Asked Question</h2>
      </div>
      <div class="slide-in-right-2">
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
      </div>
      {#each data as item, i}
        <CardFaq {item} />
      {/each}
    </div>
  </div>
  <div class="space" />
</section>
<Footer />

<style lang="scss">
  #faq {
    background: $primaryColor;
    min-height: 100vh;

    .container {
      display: grid;
      grid-template-columns: 40% 60%;

      .images {
        width: 100%;
        height: 600px;
        position: -webkit-sticky;
        position: sticky;
        top: 6rem;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 50% 50%;
        }
      }

      .side {
        display: flex;
        flex-direction: column;
        align-items: center;

        h2 {
          font-size: 65px;
          font-weight: 800;
          color: $textPrimary;
        }

        span {
          color: $textPrimary;
        }
      }
    }
  }
</style>
