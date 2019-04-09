const format = (url, params) => {
  if (Object.keys(params).length === 0) {
    return url;
  }

  let parameters = new URLSearchParams();

  for (let parameter of Object.keys(params)) {
    if (params[parameter] !== '') parameters.set(parameter, params[parameter]);
  }
  return `${url}?${parameters.toString()}`;
};

export default format;
