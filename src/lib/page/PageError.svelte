<script>
</script>

<div class="page-error">
  <div class="container">
    <div class="images">
      <img src="/placeholder/placeholder-error-new.png" alt="component" />
      <div class="title">Halaman yang kamu cari lagi dalam proses pengajuan.</div>
    </div>
  </div>
</div>

<style lang="scss">
  .page-error {
    height: 100%;
    position: relative;

    .container {
      position: absolute;
      top: 25%;
      left: 25%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 50%;

      .images {
        position: relative;

        img {
          width: 480px;
          margin-bottom: 1rem;
        }
  
        .title {
          color: $secondColor;
          font-weight: 500;
          font-size: 15px;
          position: absolute;
          top: 14%;
          left: 31%;
          width: 67%;
        }
      }

    }
  }
</style>
