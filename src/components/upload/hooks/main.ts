import { computed, ref, toRef } from 'vue';
import { uploadLight } from 'naive-ui/lib/upload/styles';
import style from 'naive-ui/lib/upload/src/styles/index.cssr';
import { useConfig, useTheme } from 'naive-ui/lib/_mixins';
import { FileInfo } from 'naive-ui/lib/upload/src/interface';
import { SelectListSchema } from '../image/UploadLIst';
import { MenuOption } from 'naive-ui';

export const useMain = (props: any) => {
  const mainRef = ref();
  const fileListRef = toRef<{ fileList: FileInfo[]}, 'fileList'>(props, 'fileList');
  const { mergedClsPrefixRef } = useConfig(props);
  const themeRef = useTheme(
    'Upload',
    '-upload-main',
    style,
    uploadLight,
    {},
    mergedClsPrefixRef
  );

  const cssVarsRef = computed(() => {
    const {
      common: { cubicBezierEaseInOut },
      self: {
        draggerColor,
        draggerBorder,
        draggerBorderHover,
        itemColorHover,
        itemColorHoverError,
        itemTextColorError,
        itemTextColorSuccess,
        itemTextColor,
        itemIconColor,
        itemDisabledOpacity,
        lineHeight,
        borderRadius,
        fontSize,
        itemBorderImageCardError,
        itemBorderImageCard,
      }
    } = themeRef.value;
    return {
      '--n-bezier': cubicBezierEaseInOut,
      '--n-border-radius': borderRadius,
      '--n-dragger-border': draggerBorder,
      '--n-dragger-border-hover': draggerBorderHover,
      '--n-dragger-color': draggerColor,
      '--n-font-size': fontSize,
      '--n-item-color-hover': itemColorHover,
      '--n-item-color-hover-error': itemColorHoverError,
      '--n-item-disabled-opacity': itemDisabledOpacity,
      '--n-item-icon-color': itemIconColor,
      '--n-item-text-color': itemTextColor,
      '--n-item-text-color-error': itemTextColorError,
      '--n-item-text-color-success': itemTextColorSuccess,
      '--n-line-height': lineHeight,
      '--n-item-border-image-card-error': itemBorderImageCardError,
      '--n-item-border-image-card': itemBorderImageCard
    } as any;
  });

  const handleSelect = (selects: FileInfo[]) => {
    // fileListRef.value = [
    //   ...fileListRef.value,
    //   ...selects
    // ];
    handleUpdate([
      ...fileListRef.value,
      ...selects
    ]);
  };

  const handleSelectChange = (selects: SelectListSchema) => {
    mainRef.value.handleSelectChange(selects);
  };

  const handleRemove = (index: number) => {
    console.log('remove image');
    fileListRef.value.splice(index, 1);
    handleUpdate(fileListRef.value);
  };

  const handleUpdate = (files: FileInfo[]) => {
    const { 'onUpdate:fileList': _onUpdateFileList, onUpdateFileList } = props;
    if (_onUpdateFileList) _onUpdateFileList(files);
    if (onUpdateFileList) onUpdateFileList(files);
  };

  // watch(
  //   () => fileListRef.value,
  //   () => {
  //     emit('update:fileList', fileListRef.value);
  //   },
  //   {
  //     deep: true,
  //     immediate: true,
  //   }
  // );

  const groupOptions = ref([
    {
      label: '未分组',
      key: 1,
    },
    {
      label: '自定义分组',
      key: 2,
    }
  ]);

  const renderCount = (options: MenuOption) => {
    console.log(options);
    return '(0)';
  };

  const mainMax = computed(() => {
    console.log(fileListRef.value);
    return props.max ? props.max - fileListRef.value.length : 0;
  });

  return {
    mainRef,
    fileListRef,
    cssVarsRef,
    mergedClsPrefixRef,
    mainMax,
    groupOptions,
    renderCount,
    handleSelect,
    handleSelectChange,
    handleRemove,
  };
};
