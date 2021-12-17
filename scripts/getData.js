// This function needs an url as argument
// This function returns data as an object with the fetched url
export default async function getData(url) {
  let resp = await fetch(url);
  let data = resp.json();
  return data;
}
