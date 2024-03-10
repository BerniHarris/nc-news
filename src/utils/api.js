const axios = require("axios").default;

const api = axios.create({
  baseURL: "https://be-nc-news-4vle.onrender.com",
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

exports.getAllArticles = (topic, sort, order) => {
  return api
    .get("/api/articles", {
      params: { topic: topic, sort_by: sort, order: order },
    })
    .then((res) => {
      return res.data.articles;
    });
};

exports.getArticle = (article_id) => {
  return api.get(`/api/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};

exports.patchVotes = (article_id, votes) => {
  return api
    .patch(`/api/articles/${article_id}`, { inc_votes: votes })
    .then((res) => {
      return res;
    });
};

exports.getCommentsByArticle = (article_id) => {
  return api.get(`/api/articles/${article_id}/comments`, {}).then((res) => {
    return res.data.comments;
  });
};

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
