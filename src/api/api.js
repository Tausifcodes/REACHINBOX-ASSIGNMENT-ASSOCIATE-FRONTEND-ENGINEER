import axios from 'axios';

const BASE_URL = 'https://your-api-endpoint.com'; // Replace with actual URL

const getThreads = async () => {
  const response = await axios.get(`${BASE_URL}/onebox/list`);
  return response.data;
};

const deleteThread = async (id) => {
  const response = await axios.delete(`${BASE_URL}/onebox/${id}`);
  return response.data;
};

export { getThreads, deleteThread };
