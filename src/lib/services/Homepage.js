import { get } from '$lib/utils/API';

const PATH = "homepage";

const list = async () => {
  try {
    let { res, json } = await get(PATH);
    return json;
  } catch (error) {}
};

const Homepage = {
  list,
};

export default Homepage;
