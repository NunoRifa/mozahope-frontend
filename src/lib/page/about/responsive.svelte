<script>
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";

  export let data;
</script>

<Header />
<div class="space-responsive" />
<section id="about">
  <div class="container">
    <div class="header">
      <h2>Tentang Kami</h2>
      <span>
        Mozahope adalah sebuah server Discord komunitas dimana kamu bisa bebas
        berekspresi, berinteraksi, dan saling bertukar pikiran dengan
        teman-teman se-Indonesia. Mozahope juga menyediakan channel untuk
        mendukung hobi dan kesukaanmu.
      </span>
      <div class="content-images">
        <div class="images">
          <img src="/logo/fav-logo.gif" alt="logo" />
        </div>
        <div class="circle-white" />
        <div class="circle-yellow-m" />
      </div>
    </div>
  </div>
  <div class="content">
    <img src="/new/gelombang.svg" alt="gelombang" />
  </div>
</section>
<section id="about-dark">
  <div class="container">
    <div>
      {#each data as item, i}
        <div class="card">
          <div class="title">{item?.title}</div>
          <div class="content">{@html item?.content}</div>
        </div>
      {/each}
    </div>
  </div>
  <div class="space-responsive" />
</section>
<Footer />

<style lang="scss">
  #about {
    background: $primaryColor;

    .header {
      position: relative;
      top: 4em;
      text-align: center;

      h2 {
        color: $textPrimary;
        font-size: 45px;
        font-weight: 700;
      }

      span {
        color: $textPrimary;
        font-size: 15px;
      }

      .content-images {
        position: relative;
        display: flex;
        justify-content: center;
        margin-top: 1em;

        .images img {
          position: relative;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          z-index: 99;
        }

        .circle-white {
          width: 150px;
          height: 150px;
          background: white;
          border-radius: 50%;
          position: absolute;
          bottom: -3em;
          left: 2em;
        }

        .circle-yellow-m {
          position: absolute;
          bottom: -2em;
          right: 4em;
        }
      }
    }

    .content > img {
      max-width: 100%;
      margin-top: 5em;
    }

    .content .container {
      margin-top: -0.5em;
      background: $secondColor;
    }
  }

  #about-dark {
    background: $secondColor;
    margin-top: -0.5em;

    .container > div {
      display: flex;
      flex-direction: column;
      gap: 1em;
    }

    .card {
      padding: 1em 0.75em;
      border-radius: 16px;
      display: flex;
      flex-direction: column;

      .title {
        font-size: 24px;
        font-weight: 600;
        text-align: center;
      }

      .content {
        font-size: 16px;
        text-align: justify;
      }
    }
  }
</style>
