import { create as createSpec, getLists as getSpecLists } from '@/api/mall/spec';
import { create as createValue, getLists as getValueLists } from '@/api/mall/value';
import { SkuBaseSchema, SkuSchema, SkuValueSchemas } from '@/components/sku/interface';

export const useSku = () => {
  function handleCreateSkuGroup (label: string): Promise<SkuSchema> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await createSpec(label);
        resolve({
          ...response,
          leaf: []
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  function handleCreateSkuValues (labels: string[]): Promise<SkuValueSchemas> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await createValue(labels);
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  }

  function handleGetGroups (): Promise<SkuBaseSchema[]> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await getSpecLists();

        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  }

  function handleGetValues (): Promise<SkuValueSchemas> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await getValueLists();
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  }

  return {
    handleCreateSkuGroup,
    handleCreateSkuValues,
    handleGetGroups,
    handleGetValues
  };
};
