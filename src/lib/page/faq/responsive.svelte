<script>
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import CardFaq from "$lib/components/CardFaq.svelte";

  export let data;
</script>

<Header />
<div class="space-responsive" />
<section id="faq">
  <div class="circle-blue" />
  <div class="circle-yellow-sm" />
  <div class="circle-yellow-m" />
  <div class="container">
    <div class="header">
      <h2>Frequently Asked Question</h2>
      <span>Server Discord buat mahasiswa</span>
      <div class="images">
        <img src="/placeholder/placeholder-faq.png" alt="" />
      </div>
    </div>
    <div>
      {#each data as item, i}
        <CardFaq {item} />
      {/each}
    </div>
  </div>
  <div class="space-responsive" />
</section>
<Footer />

<style lang="scss">
  #faq {
    position: relative;
    background: $secondColor;
    min-height: 100vh;

    .circle-blue {
      width: 600px;
      height: 600px;
      background: $primaryColor;
      border-radius: 50%;
      position: absolute;
      top: -20em;
      left: -20em;
      z-index: 3;
    }

    .circle-yellow-sm {
      width: 118px;
      height: 118px;
      background: #fedd61;
      border-radius: 50%;
      position: absolute;
      top: 14em;
      left: 1.5em;
      z-index: 2;
    }

    .circle-yellow-m {
      width: 150px;
      height: 150px;
      background: #fedd61;
      border-radius: 50%;
      position: absolute;
      top: 20em;
      right: 1.5em;
      z-index: 1;
    }

    .header {
      position: relative;
      z-index: 5;
      text-align: center;
      top: 5em;

      h2 {
        font-size: 45px;
        font-weight: 600;
        color: $textPrimary;
      }

      span {
        font-size: 18px;
        color: $textPrimary;
      }

      .images img {
        width: 335px;
        height: 537px;
        object-fit: cover;
        margin-bottom: 5em;
      }
    }
  }
</style>
