<script>
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  let changeBg = true;
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

<style lang="scss">
  .header.change {
    background: $primaryColor;
    padding: 0.75rem 0;
    box-shadow: 0 3px 16px rgba($color: #000000, $alpha: .16);
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
