<script>
  import CardTicket from "$lib/components/CardTicket.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
</script>

<Header />
<div class="ticket">
  <div class="space" />
  <div class="container">
    <div class="content">
      <h2 class="slide-in-top">Contact Us</h2>
      <span class="slide-in-top"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quia.</span
      >
    </div>
    <CardTicket />
  </div>
  <div class="space-bot" />
</div>
<Footer />

<style lang="scss">
  .ticket {
    background: $secondColor;
    min-height: 100vh;

    .content {
      color: $textPrimary;
      text-align: center;

      h2 {
        font-size: 65px;
        font-weight: 800;
      }
    }
  }
</style>
