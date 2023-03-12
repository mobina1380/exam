import axios from "axios";

// if api is song
export const getResultsFromServer = async ({ query, page, type }) => {
  console.log(page);
  const response = await axios.get("https://zarebin.ir/songs/api/search", {
    params: {
      q: query,
      page: Number(page),
      size: 10,
      type: type,
      searchSourceType: "NORMAL_SEARCH",
      PL: 0,
      qsrc: "user",
    },
  });

  console.log(response.data.results);
  return response.data.results;
};
