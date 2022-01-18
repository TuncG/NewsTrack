export default function ApiCall() {
  var url =
    "https://newsapi.org/v2/everything?" +
    "q=Apple&" +
    "from=2022-01-18&" +
    "sortBy=popularity&" +
    "apiKey=ed8743d6c95941759e4053a4567380c8";

  var req = new Request(url);

  fetch(req).then(function (response) {
    console.log(response.json());
  });

  return <div></div>;
}
