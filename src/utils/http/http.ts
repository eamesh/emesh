import { useUserStoreWithout } from '@/store/modules/user';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { CreateAxiosOptions, RequestOptions, Result } from './interface';
import { checkStatus } from './status';

export class Http {
  private instance: AxiosInstance;

  constructor (options: CreateAxiosOptions) {
    this.instance = axios.create(options);
    this.interceptors();
  }

  interceptors () {
    // 请求拦截器
    this.instance.interceptors.request.use((config: CreateAxiosOptions) => {
      console.log('axios reponse');
      const userStore = useUserStoreWithout();
      const token = userStore.getToken;

      // 设置token
      if (!!token && config.requestOptions?.token !== false) {
        config.headers!.Authorization = `Bearer ${token}`;
      }

      return config;
    }, undefined);

    // 请求拦截器错误处理
    this.instance.interceptors.response.use(undefined, (error: any) => {
      console.log('axios reponse status error', error);
      const $dialog = window.$dialog;
      const $message = window.$message;
      const { response, code, message } = error || {};
      // TODO 此处要根据后端接口返回格式修改
      const msg: string =
        response && response.data && response.data.message ? response.data.message : '';
      const err: string = error.toString();
      try {
        if (code === 'ECONNABORTED' && message.indexOf('timeout') !== -1) {
          $message.error('接口请求超时，请刷新页面重试!');
          return;
        }
        if (err && err.includes('Network Error')) {
          $dialog.info({
            title: '网络异常',
            content: '请检查您的网络连接是否正常',
            positiveText: '确定',
            // negativeText: '取消',
            closable: false,
            maskClosable: false,
            onPositiveClick: () => {},
            onNegativeClick: () => {}
          });
          return Promise.reject(error);
        }
      } catch (error) {
        throw new Error(error as any);
      }

      checkStatus(error.response && error.response.status, msg);
      return Promise.reject(response?.data);
    });
  }

  request<T> (config: AxiosRequestConfig, options: RequestOptions = {}): Promise<T> {
    const configure = Object.assign({}, config, {
      requestOptions: options
    });

    return new Promise((resolve, reject) => {
      this.instance
        .request(configure)
        .then((response: AxiosResponse<Result>) => {
          const { data } = response;
          resolve(data as unknown as T);
        })
        .catch((e: Error) => {
          reject(e);
        });
    });
  }
}
