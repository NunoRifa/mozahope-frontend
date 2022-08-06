import { get } from '$lib/utils/API';

const PATH = "about";

const list = async () => {
  try {
    let { res, json } = await get(PATH);
    return json;
  } catch (error) {}
};

const About = {
  list,
};

export default About;
