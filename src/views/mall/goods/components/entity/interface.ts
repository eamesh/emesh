import { FormInst } from 'naive-ui';
import { createInjectionKey } from 'naive-ui/lib/_utils';

export interface GoodsData {
  name: string,
  description: string;
  group_ids: number[];
  images: string[];
  video: string;
}

export interface FormRef {
  form: FormInst;
  model: () => any
}

export interface FormRefs {
  [key: string]: FormRef;
}

interface GoodsFormInjection {
  setForm: (name: string, form: FormInst, model: unknown) => void;
}

export const createGoodsFormInjectionKey = createInjectionKey<GoodsFormInjection>('upload-image-main');
