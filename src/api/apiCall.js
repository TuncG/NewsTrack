import axiosRegular from "../axios";
//http://newstrack.tuncgonel.com/news-api/getArticles.php
export async function makeApiCallEverything(parameters) {
  const apiUrl =
    "https://api-newstrack.tuncgonel.com/news-api/getArticles.php?" +
    parameters;
  return axiosRegular
    .get(apiUrl)
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
