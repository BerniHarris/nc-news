const axios = require("axios").default;

const api = axios.create({ 
    baseURL: 'https://nc-news-example-seminar-3-2.herokuapp.com/',
 })

exports.getAllArticles = (topic) => {
  if (!topic) {
    return api.get("/api/articles").then((res) => {
      return res.data.articles;
    });
  }
  else {
      return api.get(`/api/articles?topic=${topic}`).then((res) => {
        return res.data.articles;
      });
  }
};

exports.getArticle = (article_id) => {
  return api.get(`/api/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};

