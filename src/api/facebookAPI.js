export default function ApiCall() {
  let temp = [];
  var url =
    "https://newsapi.org/v2/everything?" +
    "q=Facebook&" +
    "from=2022-01-18&" +
    "sortBy=popularity&" +
    "apiKey=ed8743d6c95941759e4053a4567380c8";

  var req = new Request(url);
  var parsedData = [];

  fetch(req)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      temp[0] = data.articles;
    });

  console.log("temp", temp[0]);
  console.log("java");
  return <div></div>;
}