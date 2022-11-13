<script>
  export let item;
</script>

<div class="card w-100">
  <div class="sub">
    <div class="icon">+</div>
    <div class="content">
      <div class="title">{item?.question}</div>
      <div class="answer">
        {@html item?.answer}
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .card {
    position: relative;
    margin-bottom: 0.75em;
    padding: 0.75em 0.5em;
    border-radius: 16px;
    max-height: 3em;
    overflow: hidden;
    transition: 0.5s;
    z-index: 9;

    .sub {
      display: flex;
      gap: 0.5em;

      .icon {
        font-size: 18px;
        font-weight: 600;
        transition: 0.75s;
      }

      .content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .title {
          font-size: 16px;
          font-weight: 500;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .answer {
          margin-top: 0.5rem;
          font-size: 14px;
        }
      }
    }
  }

  .card:hover {
    max-height: 12rem;

    .sub .content .title {
      display: -webkit-box;
      -webkit-line-clamp: initial;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
</style>
