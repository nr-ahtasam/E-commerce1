export const getFetch = async (url) => {
  const res = await fetch(url, {
    cache: "no-store",
  });
  const data = res.json();
  return data;
};
