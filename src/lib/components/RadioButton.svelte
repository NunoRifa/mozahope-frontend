<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let data = [
    {
      id: 0,
      name: "Lorem 1",
      slug: "lorem1",
    },
    {
      id: 1,
      name: "Lorem 2",
      slug: "lorem2",
    },
    {
      id: 2,
      name: "Lorem 3",
      slug: "lorem3",
    },

    {
      id: 3,
      name: "Lorem 4",
      slug: "lorem4",
    },
  ];

  const selectedOption = (item) => {
		dispatch('selected', item);
	}
</script>

<div class="radio-button">
  {#each data as item, i}
    <div class="form-check mt-2" on:change={() => {selectedOption(item.name)}}>
      <input
        class="form-check-input"
        type="radio"
        name="option"
        bind:value={item.name}
        id={item?.slug}
        for={item?.slug}
      />
      <label class="form-check-label" for={item?.slug}>
        {item?.name}
      </label>
    </div>
  {/each}
</div>

<style lang="scss">
  .nav {
    display: flex;
    flex-direction: column;

    .top {
      display: flex;
      flex-direction: row;
    }
  }

  .radio-button {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: $textPrimary;

    .form-check-input[type="checkbox"] {
      border-radius: 50%;
    }
  }
</style>
