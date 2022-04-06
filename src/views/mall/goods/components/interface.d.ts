import { Component } from 'vue';

export type TypeKeys = 'entity' | 'virtual' | 'card';

export interface TypeSchema {
  title: string;
  delivery: boolean;
  name: Component;
  key: TypeKeys;
}
