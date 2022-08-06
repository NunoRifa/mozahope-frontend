<script>
    export let item;
</script>

<div class="card-faq w-100">
  <div class="card slide-in-bottom">
    <div class="head">
      <div class="icon me-2">+</div>
      <div class="title">{item?.question}</div>
    </div>
    <div class="body">
      {@html item?.answer}
    </div>
  </div>
</div>

<style lang="scss">
  .card-faq {
    .card {
      margin-top: 1.25rem;
      border-radius: 12px;
      border: unset;
      padding: 0.75rem 1rem;
      max-height: 3.5rem;
      overflow: hidden;
      transition: 0.5s;

      .head {
        display: flex;
        flex-direction: row;
        align-items: center;

        .icon {
          font-size: 22px;
          font-weight: 600;
          transition: 0.75s;
        }

        .title {
          font-size: 16px;
          font-weight: 500;
        }
      }

      .body {
        margin-top: 0.5rem;
        margin-left: 1.5rem;
        font-size: 14px;
      }
    }

    .card:hover {
      max-height: 12rem;

      .icon {
        transform: rotate(225deg);
      }

      .body {
        max-height: 12rem;
        overflow-y: scroll;
      }
    }
  }
</style>
