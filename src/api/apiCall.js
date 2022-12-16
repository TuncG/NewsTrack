import axiosRegular from "../axios";

export async function makeApiCallEverything(parameters) {
  return axiosRegular
    .get("http://newstrack.tuncgonel.com/news-api/getArticles.php" + parameters)
    .then((response) => {
      console.log("the_response:", response.data);
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
