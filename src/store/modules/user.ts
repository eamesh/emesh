import { profile, sigin, signout } from '@/api/system/user';
import { storage } from '@/utils/storage';
import { defineStore } from 'pinia';
import { ACCESS_TOKEN, CURRENT_USER, USER } from '../types';
import { useRouteStoreWhithout } from './router';

interface IUserState {
  token: string;
  username: string;
  avatar: string;
  info: unknown;
}

export const useUserStore = defineStore({
  id: 'user',

  state: (): IUserState => ({
    token: storage.get(ACCESS_TOKEN, ''),
    username: '',
    avatar: '',
    info: storage.get(USER, {})
  }),

  getters: {
    getToken (): string {
      return this.token;
    },
    getProfile (): unknown {
      return this.info;
    }
  },

  actions: {
    setToken (token: string) {
      this.token = token;
    },
    setUserInfo (info: unknown) {
      storage.set(CURRENT_USER, info);
      this.info = info;
    },
    // 登录
    async login (data: any) {
      return new Promise(async (resolve, reject) => {
        try {
          const { token } = await sigin(data);
          console.log(token);
          storage.set(ACCESS_TOKEN, token);
          this.setToken(token);

          // 重载路由
          const useRouterStore = useRouteStoreWhithout();
          useRouterStore.setAdded(false);

          await this.setProfile();

          resolve(token);
        } catch (error) {
          reject(error);
        }
      });
    },
    async setProfile () {
      return new Promise(async (resolve, reject) => {
        try {
          const info = await profile();
          this.setUserInfo(info);

          resolve(info);
        } catch (error) {
          reject(error);
        }
      });
    },
    // 登出
    async logout () {
      // token destroy
      await signout();
      this.logoutRemove();
      return Promise.resolve(true);
    },

    logoutRemove () {
      storage.remove(CURRENT_USER);
      storage.remove(ACCESS_TOKEN);
      this.setUserInfo({});
      this.setToken('');

      return Promise.resolve();
    }
  }
});

// 外部调用
export const useUserStoreWithout = () => {
  return useUserStore();
};
