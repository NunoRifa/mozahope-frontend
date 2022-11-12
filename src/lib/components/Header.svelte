<script>
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import MediaQuery from "$lib/utils/MediaQuery.svelte";
  import { each } from "svelte/internal";

  let changeBg = true;
  let show = false;
  let PosY = 0;

  let menu = [
    {
      id: 0,
      name: "Home",
      path: "/",
    },
    {
      id: 1,
      name: "About",
      path: "/about",
    },
    {
      id: 2,
      name: "FAQ",
      path: "/faq",
    },
    {
      id: 3,
      name: "Ticket",
      path: "/ticket",
    },
  ];

  const gotoIndex = () => {
    goto("/");
  };

  const gotoLogin = () => {
    goto("http://mozahope.test/login");
  };
</script>

<svelte:window bind:scrollY={PosY} />
<MediaQuery query="(max-width: 768px)" let:matches>
  {#if matches}
    <div class="header mini">
      <div class="container">
        <div class="logo" on:click={gotoIndex}>
          <img src="/icon/discord.png" alt="logo" />
          <h2>Mozahope</h2>
        </div>
        <button
          type="button"
          class="hamburger {show ? 'active' : ''}"
          on:click={() => {
            show = !show;
          }}
        >
          <span class="line" />
          <span class="line" />
          <span class="line" />
        </button>
      </div>
      <div
        class="menu {show !== false ? 'active' : ''}"
        on:click={() => {
          show = !show;
        }}
      />
      <div class="slide-menu {show !== false ? 'active' : ''}">
        <ul>
          {#each menu as item, i}
            <li class:active={$page.path === item?.path}>
              <a href={item?.path}>{item?.name}</a>
            </li>
          {/each}
          <li on:click={gotoLogin}>
            <a href=""> Login </a>
          </li>
        </ul>
      </div>
    </div>
  {:else}
    <div class="header {changeBg && PosY > 0 ? 'change' : ''}">
      <div class="container">
        <div class="logo" on:click={gotoIndex}>
          <img src="/icon/discord.png" alt="logo" />
          <h2>Mozahope</h2>
        </div>
        <div class="menu">
          <ul class="navbar">
            {#each menu as item, i}
              <li class="item">
                <a href={item?.path} class:active={$page.path === item?.path}
                  >{item?.name}</a
                >
              </li>
            {/each}
            <li class="item" on:click={gotoLogin}>
              <a href=""> Login </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  {/if}
</MediaQuery>

<style lang="scss">
  .header.mini {
    background: $primaryColor;
    padding: 0.25rem;
    box-shadow: 0 3px 16px rgba($color: #000000, $alpha: 0.16);

    .container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .logo {
        img {
          width: 50px;
          height: 50px;
        }
      }

      .hamburger {
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;

        .line {
          display: block;
          width: 40px;
          height: 4px;
          background: $textPrimary;
          margin-block: 6px;
          border-radius: 5px;
          transition: transform 0.5s;
          opacity: 0.25s;
        }
      }

      .hamburger.active {
        .line:nth-child(1) {
          transform: translateY(10px) rotate(45deg);
        }

        .line:nth-child(2) {
          opacity: 0;
        }

        .line:nth-child(3) {
          transform: translateY(-11px) rotate(-45deg);
        }
      }
    }

    .menu {
      position: absolute;
      background: #000000;
      height: 0;
      left: 0;
      right: 0;
      top: 3.65rem;
      opacity: 80%;
      transition: height 0.5s;
    }

    .menu.active {
      height: 100vh;
    }

    .slide-menu {
      position: absolute;
      background: $secondColorLight;
      height: 0;
      top: 3.6rem;
      left: 12rem;
      right: 0;
      transition: height 0.5s;
      overflow: hidden;
      border-radius: 0 0 25px 25px;

      ul {
        list-style-type: none;
        margin-bottom: unset;
        padding-left: unset;
        margin: 0.75rem;

        li {
          padding: 0.25rem 0.5rem;
        }

        li.active {
          background: $primaryColor;
          padding: 0.25rem 0.5rem;
          border-radius: 5px;
        }

        a {
          display: block;
          font-size: 20px;
          font-weight: 600;
          color: $textPrimary;
          text-decoration: none;
        }
      }
    }

    .slide-menu.active {
      height: 38vh;
    }
  }

  .header.change {
    background: $primaryColor;
    padding: 0.75rem 0;
    box-shadow: 0 3px 16px rgba($color: #000000, $alpha: 0.16);
    z-index: 999;
  }

  .header {
    padding: 2rem 0;
    font-family: "Big Shoulders Display", cursive;
    position: fixed;
    width: 100%;
    transition: 0.3s ease-in-out;
    z-index: 999999;

    .container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .logo {
        display: flex;
        flex-direction: row;
        align-items: center;
        color: $textPrimary;
        cursor: pointer;

        h2 {
          font-weight: 700;
          margin-bottom: unset;
        }

        img {
          width: 70px;
          height: 70px;
          margin-right: 0.5rem;
        }
      }

      .menu {
        ul {
          list-style-type: none;
          margin-bottom: unset;
          padding-left: unset;

          a {
            padding: 0.75rem 1.25rem;
            color: $textPrimary;
            font-size: 18px;
            text-decoration: none;
            font-weight: 700;
            margin: 0 0.25rem;
          }

          a.active {
            color: $secondColor;
            background: white;
            border-radius: 8px;
          }
        }

        a:hover {
          color: $secondColor;
          background: white;
          border-radius: 8px;
          transition: 0.2s;
        }
      }
    }
  }
</style>
