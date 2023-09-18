// import axios from "axios"
// import { axiosWithAuth } from "./axios"

// export const loginToApp = (username, password) => {
//     const data = {
//         username,
//         password
//     }
//     return axios.post('http://localhost:9000/api/login', data).then(res => res.data);
// }

// export const getArticlesData = () => {
//     return axiosWithAuth().get('http://localhost:9000/api/articles').then(res => res.data);
// }

// export const addArticle = ({title, text, topic}) => {
//     const data = {
//         title,
//         text,
//         topic
//     };
//     return axiosWithAuth().post('http://localhost:9000/api/articles', data).then(res => res.data);
// }

import axios from "axios";
import { axiosWithAuth } from "./axios";

export const loginToApp = (username, password) => {
  const data = {
    username,
    password,
  };
  return axios
    .post("http://localhost:9000/api/login", data)
    .then((res) => res.data);
};

export const getArticlesData = () => {
  return axiosWithAuth()
    .get("http://localhost:9000/api/articles")
    .then((res) => res.data);
};

export const addArticle = ({ title, text, topic }) => {
  const data = {
    title,
    text,
    topic,
  };
  return axiosWithAuth()
    .post("http://localhost:9000/api/articles", data)
    .then((res) => res.data);
};

export const updateArticleData = (title, text, topic, id) => {
  const data = {
    title,
    text,
    topic,
  };
  return axiosWithAuth()
    .put(`http://localhost:9000/api/articles/${id}`, data)
    .then((res) => res.data);
};

export const deleteArticleData = (id) => {
  return axiosWithAuth()
    .delete(`http://localhost:9000/api/articles/${id}`)
    .then((res) => res.data);
};

// export const updateArticleData = (title, text, topic, id) => {
//     const data = {
//         title,
//         text,
//         topic
//     };
//     return axiosWithAuth().put(`http://localhost:9000/api/articles/${id}`, data).then(res => res.data);
// }

// export const deleteArticleData = (id) => {
//     return axiosWithAuth().delete(`http://localhost:9000/api/articles/${id}`).then(res => res.data);
// }
