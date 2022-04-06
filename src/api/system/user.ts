import { http } from '@/utils/http';

interface AuthToken {
  token: string;
}

export const sigin = (data: any): Promise<AuthToken> => {
  return http.request<AuthToken>({
    url: '/system/auth',
    method: 'POST',
    data
  });
};

export const profile = () => {
  return http.request({
    url: '/system/user/profile',
    method: 'GET'
  });
};

export const signout = () => {
  return http.request({
    url: '/system/auth',
    method: 'DELETE'
  });
};
