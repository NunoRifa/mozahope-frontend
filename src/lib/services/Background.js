import { get } from '$lib/utils/API';

const PATH = "background";

const list = async () => {
  try {
    let { res, json } = await get(PATH);
    return json;
  } catch (error) {}
};

const Background = {
  list,
};

export default Background;
