import axios from "axios";

const instance = axios.create({
  method:"get",
  // baseURL: "https://newsapi.org/v2/everything?apiKey=ed8743d6c95941759e4053a4567380c8",
});

export default instance;
