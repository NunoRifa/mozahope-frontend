<script>
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import { goto } from "$app/navigation";
  import HomeView from "$lib/view/HomeView.svelte";

  export let data;
  console.log(data, 'data');
  export let background;

  const gotoAbout = () => {
    goto("/about");
  };
</script>

<Header />
<section id="home">
  <HomeView />
  <div class="container">
    <div class="title">
      <h1>{data?.title}</h1>
    </div>
    <div class="subs">
      <div>{@html data?.description}</div>
      <div class="scroller">
        <span>
          Mahasiswa <br>
          Nugas <br>
          Healing <br>
          Mabar <br>
          Yang Kesepian <br>
          Yang Butuh Circle
        </span>
      </div>
    </div>
    <button class="btn btn-start" on:click={gotoAbout}>Mulai Disini</button>
  </div>
</section>
<Footer />

<style lang="scss">
  @keyframes slide {
    0% {
      top: 0;
    }
    15% {
      top: -2rem;
    }
    30% {
      top: -3.2em;
    }
    45% {
      top: -4.7em;
    }
    60% {
      top: -6.4em;
    }
    75% {
      top: -10rem;
    }
  }

  .space {
    border: 2px solid red;
  }

  #home {
    background: $secondColor;
    min-height: 90vh;
    position: relative;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

    .container {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 99;

      .title {
        text-align: center;
        width: 25rem;

        h1 {
          font-family: "Roboto", sans-serif;
          color: $textPrimary;
          font-size: 8rem;
          font-weight: 800;
          word-wrap: break-word;
          margin-bottom: unset;
        }
      }

      .subs {
        color: $textPrimary;
        font-size: 20px;
        margin-bottom: 0.75rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-left: 6rem;

        .scroller {
          height: 2rem;
          line-height: 2rem;
          position: relative;
          overflow: hidden;
          width: 15rem;
          margin-bottom: 1rem;
        }

        .scroller > span {
          position: absolute;
          top: 0;
          animation: slide 6s infinite;
        }
      }

      .subs > div {
        margin-right: .5rem;
      }

      .btn-start {
        border: none;
        border-radius: 8px;
        color: $textPrimary;
        font-weight: 500;
        width: 160px;
        height: 40px;
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
    }
  }
</style>
