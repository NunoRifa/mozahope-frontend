import { API_SERVER } from "$lib/utils/ENV";

const baseURL = API_SERVER;

async function send({ method, path, data, session }) {
  const fetch =
    typeof window !== "undefined"
      ? window.fetch
      : await import("node-fetch").then((mod) => mod.default);

  const opts = { method, headers: {} };

  // add timeout
  opts.timeout = 10000;
  if (data) {
    if (!data.types) {
      opts.headers["Content-Type"] = "application/json";
      opts.body = JSON.stringify(data);
    } else if (data.type === "formData") {
      const formData = new FormData();
      formData.append("image", data.image[0]);
      opts.body = formData;
    }
  }
  
  let fullPath = encodeURI(`${baseURL}${path}`);
  const response = await fetch(fullPath, opts);
  const json = await response.json();
  return { response, json };
}

export function get(path, session) {
  return send({ method: "GET", path, session });
}

export function del(path, data, session) {
  return send({ method: "DELETE", path, data, session });
}

export function post(path, data, session) {
  return send({ method: "POST", path, data, session });
}

export function put(path, data, session) {
  return send({ method: "PUT", path, data, session });
}

