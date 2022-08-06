<script>
  export let data;
</script>

{#each data as item, i}
  <div class="bubble-channel">
    <div class="bubble">
      <div class="title">{item?.title}</div>
      <div class="content">
        {@html item?.content}
      </div>
    </div>
  </div>
{/each}

<style lang="scss">
  .bubble-channel {
    display: flex;
    flex-direction: column;
    align-items: var(--float, flex-start);

    .bubble {
      max-width: 65%;
      max-height: 3.25rem;
      overflow: hidden;
      border-radius: 25px;
      padding: 0.75rem 1rem;
      background: $primaryColor;
      margin: 2rem 0;
      transition: 0.5s;
      box-shadow: 0 3px 8px rgba($color: #000000, $alpha: 0.16);

      .title {
        width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 0.5rem;
        color: $textPrimary;
        text-align: center;
      }

      .content {
        color: $textPrimary;
      }
    }

    .bubble:hover {
      max-width: 100%;
      max-height: 12rem;
      
      .title {
        text-align: start;
      }

      .content {
        max-height: 8rem;
        overflow-y: scroll;
        color: $textPrimary;
      }
    }
  }

  .bubble-channel:nth-child(2) {
      margin-right: var(--mar-right, 3rem);
      margin-left: var(--mar-left, 3rem);
  }
</style>
