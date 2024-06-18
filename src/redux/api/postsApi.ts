import { Posts } from '../../types';

import api from './api';

export const fetchPostsRequest = async () => {
  return await api.get<Posts[]>('posts');
};
