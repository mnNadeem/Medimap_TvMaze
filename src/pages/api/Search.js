import axios from "axios";

export const search = async (query) => {
  if (!query) {
    alert("Please enter a query before pressing search");
    return [];
  }
  try {
    const { data } = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${query}`
    );
    return data;
  } catch (error) {
    console.error("Error occurred while searching: ", error);
    return [];
  }
};
