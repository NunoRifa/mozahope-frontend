<script>
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";

  export let data;
</script>

<Header />
<section id="about">
  <div class="container">
    <div class="header">
      <div class="left">
        <div class="photo">
          <img src="/logo/fav-logo.gif" alt="logo" />
          <div class="circle-white" />
          <div class="circle-yellow" />
        </div>
      </div>
      <div class="right">
        <div>
          <h2>Tentang Kami</h2>
          <span>
            Mozahope adalah sebuah server Discord komunitas dimana kamu bisa
            bebas berekspresi, berinteraksi, dan saling bertukar pikiran dengan
            teman-teman se-Indonesia. Mozahope juga menyediakan channel untuk
            mendukung hobi dan kesukaanmu.
          </span>
        </div>
      </div>
    </div>
  </div>
  <div class="content">
    <div class="container">
      {#each data as item}
        {#if item?.option === 'left'}
          <div class="channels">
            <div class="card">
              <div class="title">{item?.title}</div>
              <span>
                {@html item?.content}
              </span>
            </div>
            <div class="icon">
              <img src="/new/guitar.svg" alt="Component" />
              <div class="circle-yellow" />
            </div>
          </div>
        {:else}
          <div class="channels">
            <div class="icon">
              <img src="/new/guitar.svg" alt="Component" />
              <div class="circle-yellow" />
            </div>
            <div class="card">
              <div class="title">{item?.title}</div>
              <span>
                {@html item?.content}
              </span>
            </div>
          </div>
        {/if}
      {/each}
    </div>
  </div>
</section>
<Footer />

<style lang="scss">
  #about {
    background: $primaryColor;

    .header {
      min-height: 100vh;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

      .left {
        display: flex;
        justify-content: center;
        align-items: center;
        .photo {
          position: relative;

          img {
            position: relative;
            border-radius: 50%;
            width: 350px;
            height: 350px;
            z-index: 9;
          }

          .circle-white {
            position: absolute;
            bottom: -10%;
            left: -25%;
          }

          .circle-yellow {
            position: absolute;
            bottom: -10%;
            right: -10%;
          }
        }
      }

      .right {
        display: flex;
        justify-content: center;
        align-items: center;

        h2 {
          color: $textPrimary;
          font-size: 5rem;
          font-weight: 700;
        }

        span {
          color: $textPrimary;
          font-size: 18px;
          text-align: justify;
        }
      }
    }

    .content {
      min-height: 100vh;
      background: $secondColor;
      position: relative;
      padding: 1.5rem 0;

      .card {
        padding: 1rem;
        border-radius: 16px;
        margin: 1rem 0;

        .title {
          font-size: 26px;
          font-weight: 600;
        }
      }

      .channels:first-child {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        margin-bottom: 20rem;

        .icon {
          position: relative;

          img {
            width: 500px;
            position: absolute;
            top: -55%;
            right: 3%;
            z-index: 9;
          }

          .circle-yellow {
            width: 350px;
            height: 350px;
            position: absolute;
            top: -33%;
            right: 10%;
          }
        }
      }

      .channels {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        margin-bottom: 25rem;

        .icon {
          position: relative;

          img {
            width: 500px;
            position: absolute;
            top: 0;
            right: 3%;
            z-index: 9;
          }

          .circle-yellow {
            width: 350px;
            height: 350px;
            position: absolute;
            top: 2.5rem;
            right: 10%;
          }
        }
      }
    }
  }
</style>
