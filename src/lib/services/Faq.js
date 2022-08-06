import { get } from '$lib/utils/API';

const PATH = "faq";

const list = async () => {
  try {
    let { res, json } = await get(PATH);
    return json;
  } catch (error) {}
};

const Faq = {
  list,
};

export default Faq;
