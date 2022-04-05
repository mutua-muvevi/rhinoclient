import axios from 'axios';

const url = 'http://localhost:7000/api/contact/post';

export const postContact = (newPost) => axios.post(url, newPost);
// export const fetchPosts = () => axios.get(url);
// export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
// export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
// export const deletePost = (id) => axios.delete(`${url}/${id}`);