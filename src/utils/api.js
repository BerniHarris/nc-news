const axios = require("axios").default;

const api = axios.create({ 
    baseURL: 'https://nc-news-example-seminar-3-2.herokuapp.com/',
 })

exports.getAllArticles = () => {
  return api.get("/api/articles").then((res) => {
      console.log(res.data.articles)
    return res.data.articles;
  });
};
