import { createInjectionKey } from 'naive-ui/lib/_utils';
import { Ref } from 'vue';

export interface SkuInjection {
  clsPrefixRef: Ref<string>;
  handleChangeSku: (index: number, group: SkuSchema) => void;
  handleRemoveSku: (index: number) => void;
  createGroup: CreateGroup;
  createValue: CreateValue;
  getGroups: HandleGetGroups;
  getValues: HandleGetValues;
  groupsRef: Ref<SkuBaseSchema[]>;
  valuesRef: Ref<SkuValueSchemas>;
  skuData: Ref<SkuSchemas>;
}

export const skuInjectionKey = createInjectionKey<SkuInjection>('sku');

export interface SkuBaseSchema {
  id: number;
  name: string,
  [key: string]: unknown
}

export interface SkuValueSchema extends SkuBaseSchema {
  img_url?: string;
}

export type SkuValueSchemas = Array<SkuValueSchema>

export interface SkuSchema extends SkuBaseSchema {
  leaf: SkuValueSchemas,
}

export type SkuSchemas = Array<SkuSchema>

export interface CreateGroup {
  (label: string): Promise<SkuSchema>;
}

export interface CreateValue {
  (values: string[]): Promise<SkuValueSchemas>;
}

export interface GetGroups {
  (): Promise<SkuBaseSchema[]>;
}

export interface GetValues {
  (): Promise<SkuBaseSchema[]>;
}

export interface HandleGetData {
  (force: boolean): Promise<boolean>
}

export type HandleGetGroups = HandleGetData;
export type HandleGetValues = HandleGetData;
