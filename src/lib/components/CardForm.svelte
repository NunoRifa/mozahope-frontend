<script>
  import RadioButton from "$lib/components/RadioButton.svelte";
  import Ticket from "$lib/services/Ticket";

  let first_name = "";
  let last_name = "";
  let email = "";
  let phone = "";
  let option = "";
  let message = "";
  let alert = false;
  let submit = false;

  const test = (e) => {
    option = e.detail;
    console.log(option);
  }

  async function formSubmit() {
    submit = true;
    const sendReq = await Ticket.send(
      first_name,
      last_name,
      email,
      phone,
      option,
      message
    );
    alert = true;
    submit = false;

    setTimeout(() => {
      location.reload();
    }, 3000);
  }
</script>

<div class="card-form">
  <div class="card">
    {#if alert !== false}
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> You should check in on some of those
        fields below.
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        />
      </div>
    {/if}
    <form action="" method="post" on:submit|preventDefault={formSubmit}>
      <div class="full-name">
        <div>
          <input
            type="text"
            autocomplete="off"
            bind:value={first_name}
            required
          />
          <label for="text" class="label-name">
            <span class="content-name"> First Name </span>
          </label>
        </div>
        <div>
          <input
            type="text"
            autocomplete="off"
            bind:value={last_name}
            required
          />
          <label for="text" class="label-name">
            <span class="content-name"> Last Name </span>
          </label>
        </div>
      </div>
      <div class="email-phone">
        <div>
          <input type="email" autocomplete="off" bind:value={email} required />
          <label for="text" class="label-name">
            <span class="content-name"> Email </span>
          </label>
        </div>
        <div>
          <input type="text" autocomplete="off" bind:value={phone} required />
          <label for="text" class="label-name">
            <span class="content-name"> Phone </span>
          </label>
        </div>
      </div>
      <div class="radio">
        <span>What do you know about Mozahope Server?</span>
        <RadioButton on:selected={test} />
      </div>
      <div class="message">
        <div>
          <span class="label"> Write your message... </span>
          <textarea cols="30" bind:value={message} required />
          <label for="text" class="label-name" />
        </div>
      </div>

      <div class="send-btn">
        {#if submit}
          Proses...
        {:else}
          <button type="submit" class="btn btn-contact"> Send Message </button>
        {/if}
      </div>
    </form>
  </div>
</div>

<style lang="scss">
  .card-form {
    .card {
      height: 100%;
      background: $secondColor;
      padding: 1rem 2rem;
      border-radius: 12px;
      margin-top: unset;

      form > div > div {
        position: relative;
        overflow: hidden;
        color: $textPrimary;
        width: 45%;
      }

      form > .message > div {
        position: relative;
        overflow: hidden;
        color: $textPrimary;
        width: 100%;
      }

      form {
        width: 100%;

        .full-name {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin: 0.5rem 0;
        }

        .email-phone {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin: 1.5rem 0;
        }

        .radio {
          span {
            color: $textPrimary;
          }
        }

        .message {
          width: 100%;
          margin: 1.5rem 0;
        }

        input {
          width: 100%;
          color: $textPrimary;
          padding-top: 20px;
          border: none;
          background: transparent;
        }

        textarea {
          width: 100%;
          color: $textPrimary;
          padding-top: 20px;
          border: none;
          background: transparent;
        }

        textarea:focus {
          outline: none;
        }

        input:focus {
          outline: none;
        }

        .send-btn {
          display: flex;
          justify-content: end;

          .btn-contact {
            border: none;
            border-radius: 8px;
            font-weight: 500;
            width: 180px;
            height: 40px;
            display: block;

            background: linear-gradient(
              to right,
              $secondColor 50%,
              $textPrimary 50%
            );
            background-size: 200% 100%;
            background-position: right bottom;
            transition: all 0.3s ease;
          }

          .btn-contact:hover {
            color: #fce38a;
            background-position: left bottom;
            border: 2px solid #fce38a;
            text-decoration: underline;
          }
        }

        label {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          pointer-events: none;
          border-bottom: 1px solid white;

          .content-name {
            position: absolute;
            bottom: 0;
            left: 0;
            padding-bottom: 5px;
            transition: all 0.3s ease;
          }
        }

        label::after {
          content: "";
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          border-bottom: 3px solid #fce38a;
          transform: translateX(-100%);
          transition: all 0.3s ease;
        }

        input:focus + .label-name .content-name,
        input:valid + .label-name .content-name {
          transform: translateY(-80%);
          font-size: 14px;
          left: 0px;
          color: #fce38a;
        }

        input:focus + .label-name::after,
        input:valid + .label-name::after {
          transform: translateX(0%);
        }

        textarea:focus + .label-name::after,
        textarea:valid + .label-name::after {
          transform: translateX(0%);
        }
      }
    }
  }
</style>
