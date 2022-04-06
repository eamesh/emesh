import { defineComponent } from 'vue';
import { RouteRecordRaw } from 'vue-router';

export type Component<T = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>);

export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'children'> {
  children?: AppRouteRecordRaw[];
}
