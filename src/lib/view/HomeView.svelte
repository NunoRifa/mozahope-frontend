<div class="home-view">
  <div class="circle-blue">
    <img src="/new/component/circle-blue-big.svg" alt="Component" />
  </div>
  <div class="computer-man">
    <img src="/new/computer-man.svg" alt="Component" />
  </div>
  <div class="double-yellow">
    <img src="/new/component/circle-double-yellow.svg" alt="Component" />
  </div>
</div>

<style lang="scss">
  .home-view {
    .circle-blue {
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      position: absolute;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      z-index: 1;
    }

    .circle-blue > img {
      margin-left: -50%;
      margin-top: -5rem;
      height: 150vh;
      width: 100vw;
      object-fit: contain;
    }

    .computer-man {
      position: absolute;
      top: 25%;
      left: 8%;
      min-width: 450px;
      z-index: 2;

      @media screen and (min-width: 2560px) {
        left: 13%;
        min-width: 650px;
      }
    }

    .double-yellow {
      position: absolute;
      top: 20%;
      left: 27%;
      min-width: 300px;
      z-index: 0;

      @media screen and (max-width: 1366px) {
        left: 30%;
      }

      @media screen and (min-width: 2560px) {
        min-width: 600px;
        left: 28%;
      }
    }
  }
</style>
