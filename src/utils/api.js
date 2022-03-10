const axios = require("axios").default;

const api = axios.create({ 
    baseURL: 'https://nc-news-example-seminar-3-2.herokuapp.com/',
 })

//  ------ list of all articles ------
exports.getAllArticles = (topic) => {
  if (!topic) {
    return api.get("/api/articles").then((res) => {
      return res.data.articles;
    });
  }
 //  ------ list of all articles by topic------
  else {
      return api.get(`/api/articles?topic=${topic}`).then((res) => {
        return res.data.articles;
      });
  }
};
//  ------ article by id------
exports.getArticle = (article_id) => {
  return api.get(`/api/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};
//  ------ votes ------
exports.patchVotes = (article_id, votes) => {
  return api.patch(`/api/articles/${article_id}`, {inc_votes: votes}).then((res) => {
    return res;
  })
}

