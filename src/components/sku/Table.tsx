import { SkuSchemas } from '@/components/sku/interface';
import { flatten, FlattenStock } from '@/components/sku/utils';
import { NDataTable } from 'naive-ui';
import { TableColumn, TableColumns } from 'naive-ui/lib/data-table/src/interface';
import { computed, defineComponent, PropType, ref, watch } from 'vue';

const tableProps = {
  sku: {
    type: Array as PropType<SkuSchemas>,
    default: () => []
  },

  extraColumns: {
    type: Array as PropType<TableColumns<any>>,
    default: () => []
  },

  flatten: {
    type: Array as PropType<FlattenStock[]>,
    default: () => []
  }
};

export default defineComponent({
  name: 'Demo',

  props: tableProps,

  emits: ['changeData'],

  setup (props, { emit }) {
    const listsRef = ref<any[]>([]);
    const rowspanRef = ref<(number[])[]>([]);
    const columns = ref<TableColumns>([]);

    const computedFilter = computed(() => {
      return props.sku.filter(item => item.name && item.leaf.length);
    });

    const handleColumns = function () {
      const { extraColumns } = props;
      columns.value = computedFilter.value.map((item, index): TableColumn => {
        return {
          title: item.name,
          key: index,
          render (row) {
            const { data } = row as FlattenStock;
            return data[index] ? data[index].v : null;
          },
          // colSpan: (_, rowIndex) => {
          //   return 1;
          // },
          rowSpan: (_, rowIndex) => {
            return rowspanRef.value[index][rowIndex];
          }
        };
      }).concat(extraColumns as Array<any>);
    };

    watch(
      () => computedFilter.value,
      () => {
          handleColumns();
          listsRef.value = flatten(computedFilter.value, props.flatten);
          handleRowspan();
      },
      {
        immediate: true
      }
    );

    watch(
      () => listsRef.value,
      () => {
        console.log('update');
        emit('changeData', listsRef.value);
      },
      {
        deep: true,
        immediate: true,
      }
    );

    function handleRowspan () {
      rowspanRef.value = [];

      computedFilter.value.map((_, index) => {
        const span: number[] = [];
        let dot = 0;

        listsRef.value.map((item: FlattenStock, indx: number) => {
          if (indx === 0) {
            span.push(1);
          } else {
            if (item.data[index].v === listsRef.value[indx - 1].data[index].v) {
              span[dot] += 1;
              span.push(0);
            } else {
              dot = indx;
              span.push(1);
            }
          }
        });
        rowspanRef.value.push(span);
      });
    }

    return {
      lists: listsRef,
      columns,
      computedFilter
    };
  },

  render () {
    const {
      lists,
      columns,
    } = this;

    return (
      <div class="sku-table">
        <NDataTable
          data={lists}
          columns={columns}
          singleLine={false}
        />
      </div>
    );
  }
});
