import { SkuSchemas, SkuValueSchema } from './interface';

export interface FlattenOptions {
  optionValue: string;
  optionText: string;
}

interface FlattenStockMap {
  [key: string]: Omit<FlattenStock, 'skus'>;
}

export interface StockItem {
  k_id: string | number;
  k: string;
  v_id: string | number;
  v: string;
}

export interface FlattenStock {
  [key: string]: unknown;
  data: StockItem[];
}

// 计算每个sku后面有多少项
export function getLevels (tree: SkuSchemas): number[] {
  const level: number[] = [];
  for (let i = tree.length - 1; i >= 0; i--) {
    if (tree[i + 1] && tree[i + 1].leaf) {
      level[i] = tree[i + 1].leaf.length * level[i + 1] || 1;
    } else {
      level[i] = 1;
    }
  }
  return level;
}

/**
 * 笛卡尔积运算
 * @param  {[type]} tree   [description]
 * @param  {Array}  stocks [description]
 * @return {[type]}        [description]
 */
export function flatten (tree: SkuSchemas, stocks: FlattenStock[] = [], options: FlattenOptions = {
  optionText: 'name',
  optionValue: 'id',
}): FlattenStock[] {
  const { optionValue, optionText } = options || {};
  const result: FlattenStock[] = [];
  let skuLen = 0;
  const stockMap: FlattenStockMap = {}; // 记录已存在的stock的数据
  const level = getLevels(tree);
  if (tree.length === 0) return result;
  tree.forEach(sku => {
    const { leaf } = sku;
    if (!leaf || leaf.length === 0) return true;
    skuLen = (skuLen || 1) * leaf.length;
  });
  // 根据已有的stocks生成一个map
  stocks.forEach(stock => {
    const { data, ...attr } = stock;
    const key = data.map(item => {
      return `${item.k_id}_${item.v_id}`;
    }).join('|');
    stockMap[key] = attr;
  });
  for (let i = 0; i < skuLen; i++) {
    const data: StockItem[] = [];
    const mapKey: string []= [];
    tree.forEach((sku, column) => {
      const { leaf } = sku;
      let item = {} as SkuValueSchema;
      if (!leaf || leaf.length === 0) return true;
      if (leaf.length > 1) {
        const row = parseInt((i / level[column]).toString(), 10) % leaf.length;
        item = tree[column].leaf[row];
      } else {
        item = tree[column].leaf[0];
      }
      if (!sku[optionValue] || !item[optionValue]) return;
      mapKey.push(`${sku[optionValue]}_${item[optionValue]}`);
      data.push({
        k_id: sku[optionValue] as string | number,
        k: sku[optionText] as string,
        v_id: item[optionValue] as string | number,
        v: item[optionText] as string
      });
    });
    const { ...dataMap } = stockMap[mapKey.join('|')] || {};
    // 从map中找出存在的sku并保留其值
    result.push({ ...dataMap, data });
  }
  return result;
}

export function randomNumber (max = 100000): number {
  return Math.floor(Math.random() * (max + 1));
}
