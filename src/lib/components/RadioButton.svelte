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
    dispatch("selected", item);
  };
</script>

<div class="radio-button">
  {#each data as item, i}
    <div
      class="form-check mt-2"
      on:change={() => {
        selectedOption(item.name);
      }}
    >
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
  .form-check-input:checked[type="radio"] {
    background-image: unset;
  }

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

    input[type="radio"] {
      appearance: none;
      background-color: #fff;
      width: 15px;
      height: 15px;
      border: 2px solid #ccc;
      display: inline-grid;
      place-content: center;
      border-radius: 50%;
    }

    input[type="radio"]::before {
      content: "";
      width: 10px;
      height: 10px;
      transform: scale(0);
      transform-origin: bottom left;
      background-color: #fff;
      clip-path: polygon(13% 50%, 34% 66%, 81% 2%, 100% 18%, 39% 100%, 0 71%);
    }

    input[type="radio"]:checked::before {
      transform: scale(1);
    }
    input[type="radio"]:checked {
      background-color: #0075ff;
      border: 2px solid #0075ff;
    }
  }
</style>
