<script>
  import { goto } from "$app/navigation";
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";

  export let data;
  export let background;

  const gotoAbout = () => {
    goto("/about");
  };
</script>

<Header />
<div class="space-responsive" />
<section id="home">
  <div class="container">
    <div class="content">
      <h1>{data?.title}</h1>
      <div class="subs">
        <div>{@html data?.description}</div>
        <div class="scroller">
          <span>
            {@html data?.image_description}
          </span>
        </div>
      </div>
      <button class="btn btn-start" on:click={gotoAbout}>Mulai Disini</button>
      <div class="circle-yellow-m" />
    </div>
  </div>
  <div class="content-image">
    <div class="circle-yellow-m-lg" />
    <div class="circle-blue-m" />
    <div class="computer-man">
      <img src="/new/computer-man.svg" alt="Component" />
    </div>
  </div>
</section>
<Footer />

<style lang="scss">
  @keyframes slide {
    0% {
      top: -0.9;
    }
    15% {
      top: -1.9rem;
    }
    30% {
      top: -3.9em;
    }
    45% {
      top: -5.9em;
    }
    60% {
      top: -7.9em;
    }
    75% {
      top: -9.9rem;
    }
  }

  @keyframes xwidth {
    0% {
      width: 5.8rem;
    }
    15% {
      width: 3.4rem;
    }
    30% {
      width: 4rem;
    }
    45% {
      width: 3.4rem;
    }
    60% {
      width: 7.5rem;
    }
    75% {
      width: 9rem;
    }
    100% {
      width: 5.8rem;
    }
  }

  #home {
    background: $secondColor;
    min-height: 100vh;

    .content {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 99;

      h1 {
        font-family: "Roboto", sans-serif;
        font-size: 80px;
        color: $textPrimary;
        font-weight: 800;
        word-wrap: break-word;
        width: 17rem;
        margin-top: 2rem;
        text-align: center;
      }

      .subs > div:first-child {
        margin-right: 0.3rem;
      }
      .subs > div {
        height: 1.8rem;
      }

      .subs {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        color: $textPrimary;

        .scroller {
          height: 1.8rem;
          line-height: 2rem;
          position: relative;
          overflow: hidden;
          // width: 9rem;
          margin-bottom: 0.5rem;
          animation: xwidth 6s infinite;
          border-bottom: 2px solid $textPrimary;
        }

        .scroller > span {
          position: absolute;
          top: 0;
          animation: slide 6s infinite;
        }
      }

      .btn-start {
        border: none;
        border-radius: 50px;
        color: $textPrimary;
        font-weight: 500;
        width: 150px;
        height: 50px;
        display: block;
        box-shadow: 0 3px 8px rgba($color: #000000, $alpha: 0.16);

        background: linear-gradient(
          to right,
          $secondColor 50%,
          $primaryColor 50%
        );
        background-size: 200% 100%;
        background-position: right bottom;
        transition: all 0.2s ease;
      }

      .btn-start:hover {
        color: $textPrimary;
        background-position: left bottom;
        border: 2px solid $textPrimary;
      }

      .circle-yellow-m {
        position: absolute;
        right: 10px;
        bottom: 1rem;
      }
    }

    .content-image {
      height: 80vh;
      overflow: hidden;

      .circle-blue-m {
        position: relative;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -30%);
      }

      .circle-yellow-m-lg {
        position: absolute;
        left: 13px;
        bottom: 1rem;
      }

      .computer-man {
        position: absolute;
        top: 50%;
        left: 45%;
        transform: translate(-50%, 40%);
        min-width: 400px;
        z-index: 2;
      }
    }
  }
</style>
