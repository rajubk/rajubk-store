export const encodeQueryParam = (obj: Record<string, string>) => {
  const str: string[] = [];
  for (const p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
};

export const buildUrl = (url: string, paramObj: Record<string, string>) => {
  const encode = encodeQueryParam(paramObj);
  return `${url}?${encode}`;
};
