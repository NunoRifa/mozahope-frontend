<script context="module">
  export function load({ error, status }) {
    return {
      props: {
        message: error.message,
        status, // same as status: status
      },
    };
  }
</script>

<script>
  export let message;
  export let status;
</script>

<section id="error">
  <div class="container">
    <div class="card w-100 p-4">
      <h2>Halaman Error!</h2>
      <div class="title">
          {message}
      </div>
      <div class="status">
          Status Error: <span>{status}</span>
      </div>
      <div class="text-center">
          <a href="/">Kembali Kehalaman Utama</a>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  #error {
    position: relative;

    .container {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;

      .status {
          span {
              font-size: 20px;
              font-weight: 500;
          }
      }
    }
  }
</style>
