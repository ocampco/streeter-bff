exports.jsonp = response => {
  const raw = response.replace(/^loaded\(/, '').replace(/\)$/, '');
  return JSON.parse(raw);
};
