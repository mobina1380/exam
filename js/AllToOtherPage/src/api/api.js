import axios from "axios";

export const getResultsFromServer = async ({ query, page }) => {
  // console.log('page     :'+page)
  const response = await axios.get("https://zarebin.ir/gse/api/search/", {
    params: {
      q: query,
      query_source: "user",
      page: Number(page),
      //page:5,
      size: 10,
      type: "ALL",
      PL: 0,
    },
  });
  console.log(response);
  return response.data.result.all.results.webs;
};
