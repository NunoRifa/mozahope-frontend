import { post } from "$lib/utils/API";

const PATH = "ticket";

const send = async (first_name, last_name, email, phone, option, message) => {
  try {
    const { res, json } = await post(PATH, {
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone: phone,
      option: option,
      message: message,
    });
  } catch (error) {}
};

const Ticket = {
  send,
};

export default Ticket;
