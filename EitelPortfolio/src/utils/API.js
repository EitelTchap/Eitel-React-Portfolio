import axios from "axios";

// Gets a random programming Gif from Giphy API

export default {
  getRandomGif: function() {
    //API keys and URL variable definition
    const GiphyAPI_Key = "JlYM2XmAwmrUDSWWhLTzqgSsAOwV5YZ7";
    const GiphyUrl = "https://api.giphy.com/v1/gifs/translate";
    //Returns random Gif related to "React coding"
    const searchTerm = "React coding";

    return axios.get(GiphyUrl, {
      params: {
          api_key: GiphyAPI_Key,
          s: searchTerm
      }
  });
  }
};
