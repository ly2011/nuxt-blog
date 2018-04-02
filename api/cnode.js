import request from '~/utils/request';

const BASE_URL = 'https://cnodejs.org/api/v1';
export const getTopics = ({
  page = 1,
  tab = 'share',
  limit = 12,
  mdrender = 'false'
} = {}) =>
  request({
    baseURL: BASE_URL,
    method: 'get',
    url: '/topics',
    params: {
      page,
      tab,
      limit,
      mdrender
    }
  });

export const getTopic = (id = '') =>
  request({
    baseURL: BASE_URL,
    method: 'get',
    url: `/topic/${id}`
  });

export const Login = (params = {}) =>
  request({
    baseURL: BASE_URL,
    method: 'post',
    url: '/accesstoken',
    data: params
  });

export const getMessages = (params = {}) =>
  request({
    baseURL: BASE_URL,
    method: 'get',
    url: '/messages',
    params: params
  });

export const getUserInfo = (loginname = '') =>
  request({
    baseURL: BASE_URL,
    method: 'get',
    url: `/user/${loginname}`
  });
