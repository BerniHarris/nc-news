const axios = require("axios").default;

const api = axios.create({
  baseURL: "https://berni-nc-news.herokuapp.com",
});

exports.getTopics = (topic, sort, order) => {
  return api
    .get(`/api/articles?topic=${topic}`, {
      params: { sort_by: sort, order: order },
    })
    .then((res) => {
      return res.data.articles;
    });
};
//  ------ list of all articles ------
exports.getAllArticles = (topic, sort, order) => {
  if (!topic) {
    return api
      .get("/api/articles", { params: { sort_by: sort, order: order } })
      .then((res) => {
        return res.data.articles;
      });
  }

  //  ------ list of all articles by topic------
  else {
    return api
      .get(`/api/articles?topic=${topic}`, {
        params: { sort_by: sort, order: order },
      })
      .then((res) => {
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
  return api
    .patch(`/api/articles/${article_id}`, { inc_votes: votes })
    .then((res) => {
      return res;
    });
};
// ------ article comments ------
exports.getCommentsByArticle = (article_id, sort, order) => {
  return api
    .get(`/api/articles/${article_id}/comments`, {
      params: { sort_by: sort, order: order },
    })
    .then((res) => {
      return res.data.comments;
    });
};
// ------ post comments ------
exports.postArticleComment = (article_id, comment) => {
  return api
    .post(`/api/articles/${article_id}/comments`, comment)
    .then((res) => {
      return res.data.comment;
    });
};

exports.deleteArticleComment = (comment_id) => {
  return api.delete(`/api/comments/${comment_id}`);
};
