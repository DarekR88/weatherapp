import axios from "axios";

const BASEURL = "https://api.openweathermap.org/data/2.5/forecast?q=";
const APIKEY = ",us&units=imperial&appid=151738c1e7763a992dbc746363f5b0d5";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};