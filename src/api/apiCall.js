import axiosRegular from "../axios";

export async function makeApiCallEverything(parameters) {
  return axiosRegular
    .get("https://newsapi.org/v2/everything?apiKey=ed8743d6c95941759e4053a4567380c8"+parameters)
    .then((response) => {
      return {
        success: true,
        data: response.data,
      };
    })
    .catch((err) => {
      const emptyData = {
        data: {
          title: "Oops",
          subtitle: "We could not complete the action.",
        },
      };

      if (err.response) {
        if (err.response.data) {
          return {
            success: false,
            data: err.response.data,
          };
        }
        return emptyData;
      } else {
        return {
          success: false,
          data: emptyData,
        };
      }
    });
}
