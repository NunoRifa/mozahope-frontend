<script>
  import CardForm from "$lib/components/CardForm.svelte";
</script>

<div class="card-ticket">
  <div class="card slide-in-bottom">
    <div class="images slide-in-right-2">
      <img src="/placeholder/placeholder-ticket.png" alt="Component" />
    </div>
    <CardForm />
  </div>
</div>

<style lang="scss">
  .card-ticket {
    .card {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      margin-top: 1rem;
      padding: 1.25rem;
      border-radius: 12px;
      background: $secondColorLight;
      box-shadow: 0 3px 8px rgba($color: #000000, $alpha: 0.16);

      .images {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          transform: scaleX(-1);
        }
      }
    }
  }
</style>
