import {
  ref,
  defineComponent,
  computed,
  PropType,
  provide,
  CSSProperties,
  watch,
  toRef,
  ComponentPublicInstance,
  VNode,
  nextTick,
  withDirectives,
  vShow,
  watchEffect,
  ExtractPropTypes,
  cloneVNode
} from 'vue';
import { VResizeObserver, VXScroll, VXScrollInst } from 'vueuc';
import { throttle } from 'lodash-es';
import { useCompitable, onFontsReady, useMergedState } from 'vooks';
// import { useConfig, useTheme, useThemeClass } from 'naive-ui/lib/_mixins';
import { useConfig, useTheme, useThemeClass } from 'naive-ui/lib/_mixins';

import type { ThemeProps } from 'naive-ui/lib/_mixins';
import {
  createKey,
  call,
  flatten,
  // warnOnce,
  resolveWrappedSlot
} from 'naive-ui/lib/_utils';
import type { MaybeArray, ExtractPublicPropTypes } from 'naive-ui/lib/_utils';
import { tabsLight } from 'naive-ui/lib/tabs/styles';

import type { TabsTheme } from 'naive-ui/lib/tabs/styles';
import type {
  Addable,
  OnClose,
  OnCloseImpl,
  OnBeforeLeave,
  TabsType,
  TabsInst,
  OnUpdateValue,
  OnUpdateValueImpl
} from 'naive-ui/lib/tabs/src/interface';
import { tabsInjectionKey } from './interface';
import Tab from 'naive-ui/lib/tabs/src/Tab';
import { tabPaneProps } from 'naive-ui/lib/tabs/src/TabPane';
import style from 'naive-ui/lib/tabs/src/styles/index.cssr';

type TabPaneProps = ExtractPropTypes<typeof tabPaneProps> & {
  'display-directive': 'if' | 'show' | 'show:lazy'
}

const tabsProps = {
  ...(useTheme.props as ThemeProps<TabsTheme>),
  value: [String, Number] as PropType<string | number>,
  defaultValue: [String, Number] as PropType<string | number>,
  trigger: {
    type: String as PropType<'click' | 'hover'>,
    default: 'click'
  },
  type: {
    type: String as PropType<TabsType>,
    default: 'bar'
  },
  closable: Boolean,
  justifyContent: String as PropType<
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'center'
  | 'start'
  | 'end'
  >,
  size: {
    type: String as PropType<'small' | 'medium' | 'large'>,
    default: 'medium'
  },
  tabStyle: [String, Object] as PropType<string | CSSProperties>,
  barWidth: Number,
  paneClass: String,
  paneStyle: [String, Object] as PropType<string | CSSProperties>,
  addable: [Boolean, Object] as PropType<Addable>,
  tabsPadding: {
    type: Number,
    default: 0
  },
  onBeforeLeave: Function as PropType<OnBeforeLeave>,
  onAdd: Function as PropType<() => void>,
  'onUpdate:value': [Function, Array] as PropType<MaybeArray<OnUpdateValue>>,
  onUpdateValue: [Function, Array] as PropType<MaybeArray<OnUpdateValue>>,
  onClose: [Function, Array] as PropType<MaybeArray<OnClose>>,
  // deprecated
  labelSize: String as PropType<'small' | 'medium' | 'large'>,
  activeName: [String, Number] as PropType<string | number>,
  onActiveNameChange: [Function, Array] as PropType<
  MaybeArray<(value: string & number) => void>
  >
} as const;

export type TabsProps = ExtractPublicPropTypes<typeof tabsProps>

export default defineComponent({
  name: 'Tabs',
  props: tabsProps,
  setup (props, { slots }) {
    // if (__DEV__) {
    //   watchEffect(() => {
    //     if (props.labelSize !== undefined) {
    //       warnOnce(
    //         'tabs',
    //         '`label-size` is deprecated, please use `size` instead.'
    //       );
    //     }
    //     if (props.activeName !== undefined) {
    //       warnOnce(
    //         'tabs',
    //         '`active-name` is deprecated, please use `value` instead.'
    //       );
    //     }
    //     if (props.onActiveNameChange !== undefined) {
    //       warnOnce(
    //         'tabs',
    //         '`on-active-name-change` is deprecated, please use `on-update:value` instead.'
    //       );
    //     }
    //   });
    // }

    const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
    const themeRef = useTheme(
      'Tabs',
      '-tabs',
      style,
      tabsLight,
      props,
      mergedClsPrefixRef
    );

    const tabsElRef = ref<HTMLElement | null>(null);
    const barElRef = ref<HTMLElement | null>(null);
    const scrollWrapperElRef = ref<HTMLElement | null>(null);
    const addTabInstRef = ref<ComponentPublicInstance | null>(null);
    const xScrollInstRef = ref<(VXScrollInst & ComponentPublicInstance) | null>(
      null
    );

    const leftReachedRef = ref(true);
    const rightReachedRef = ref(true);

    const compitableSizeRef = useCompitable(props, ['labelSize', 'size']);
    const compitableValueRef = useCompitable(props, ['activeName', 'value']);
    const { default: defaultSlotss } = slots;
    const uncontrolledValueRef = ref(
      compitableValueRef.value ??
        props.defaultValue ??
        (defaultSlotss
          ? ((flatten(defaultSlotss())[0] as any)?.props?.name as
              | string
              | number)
          : null)
    );
    console.log('非受控', uncontrolledValueRef.value);
    const mergedValueRef = useMergedState(
      compitableValueRef,
      uncontrolledValueRef
    );

    const tabChangeIdRef = { id: 0 };

    const tabWrapperStyleRef = computed(() => {
      if (!props.justifyContent || props.type === 'card') return undefined;
      return {
        display: 'flex',
        justifyContent: props.justifyContent
      };
    });

    watch(mergedValueRef, () => {
      tabChangeIdRef.id = 0;
      updateCurrentBarStyle();
    });

    function getCurrentEl (): HTMLElement | null {
      const { value } = mergedValueRef;
      if (value === null) return null;
      const tabEl = tabsElRef.value?.querySelector(`[data-name="${value}"]`);
      return tabEl as HTMLElement | null;
    }
    function updateBarStyle (tabEl: HTMLElement): void {
      if (props.type === 'card') return;
      const { value: barEl } = barElRef;
      if (!barEl) return;
      if (tabEl) {
        const disabledClassName = `${mergedClsPrefixRef.value}-tabs-bar--disabled`;
        const { barWidth } = props;
        if (tabEl.dataset.disabled === 'true') {
          barEl.classList.add(disabledClassName);
        } else {
          barEl.classList.remove(disabledClassName);
        }
        if (barWidth && tabEl.offsetWidth >= barWidth) {
          const offsetDiffLeft =
            Math.floor((tabEl.offsetWidth - barWidth) / 2) + tabEl.offsetLeft;
          barEl.style.left = `${offsetDiffLeft}px`;
          barEl.style.maxWidth = `${barWidth}px`;
        } else {
          barEl.style.left = `${tabEl.offsetLeft}px`;
          barEl.style.maxWidth = `${tabEl.offsetWidth}px`;
        }
        barEl.style.width = '8192px';
      }
    }
    function updateCurrentBarStyle (): void {
      if (props.type === 'card') return;
      const tabEl = getCurrentEl();
      if (tabEl) {
        updateBarStyle(tabEl);
      }
    }
    function activateTab (panelName: string | number): void {
      doUpdateValue(panelName);
    }
    function doUpdateValue (panelName: string | number): void {
      const {
        onActiveNameChange,
        onUpdateValue,
        'onUpdate:value': _onUpdateValue
      } = props;
      if (onActiveNameChange) {
        call(onActiveNameChange as OnUpdateValueImpl, panelName);
      }
      if (onUpdateValue) call(onUpdateValue as OnUpdateValueImpl, panelName);
      if (_onUpdateValue) call(_onUpdateValue as OnUpdateValueImpl, panelName);
      uncontrolledValueRef.value = panelName;
    }
    function handleClose (panelName: string | number): void {
      const { onClose } = props;
      if (onClose) call(onClose as OnCloseImpl, panelName);
    }

    let firstTimeUpdatePosition = true;
    const handleNavResize = throttle(function handleNavResize () {
      const { type } = props;
      if (
        (type === 'line' || type === 'bar') &&
        (firstTimeUpdatePosition || props.justifyContent)
      ) {
        const { value: barEl } = barElRef;
        if (!barEl) return;
        if (!firstTimeUpdatePosition) firstTimeUpdatePosition = false;
        const disableTransitionClassName = `${mergedClsPrefixRef.value}-tabs-bar--transition-disabled`;
        barEl.classList.add(disableTransitionClassName);
        updateCurrentBarStyle();
        // here we don't need to force layout after update bar style
        // since deriveScrollShadow will force layout
        barEl.classList.remove(disableTransitionClassName);
      }
      if (type !== 'segment') {
        deriveScrollShadow(xScrollInstRef.value?.$el);
      }
    }, 64);

    const addTabFixedRef = ref(false);
    function _handleTabsResize (entry: ResizeObserverEntry): void {
      const {
        target,
        contentRect: { width }
      } = entry;
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const containerWidth = target.parentElement!.offsetWidth;
      if (!addTabFixedRef.value) {
        if (containerWidth < width) {
          addTabFixedRef.value = true;
        }
      } else {
        const { value: addTabInst } = addTabInstRef;
        if (!addTabInst) return;
        if (containerWidth - width > addTabInst.$el.offsetWidth) {
          addTabFixedRef.value = false;
        }
      }
      deriveScrollShadow(xScrollInstRef.value?.$el);
    }
    const handleTabsResize = throttle(_handleTabsResize, 64);

    function handleAdd (): void {
      const { onAdd } = props;
      if (onAdd) onAdd();
      void nextTick(() => {
        const currentEl = getCurrentEl();
        const { value: xScrollInst } = xScrollInstRef;
        if (!currentEl || !xScrollInst) return;
        xScrollInst.scrollTo({
          left: currentEl.offsetLeft,
          top: 0,
          behavior: 'smooth'
        });
      });
    }

    function deriveScrollShadow (el: HTMLElement | null): void {
      if (!el) return;
      const { scrollLeft, scrollWidth, offsetWidth } = el;
      leftReachedRef.value = scrollLeft <= 0;
      rightReachedRef.value = scrollLeft + offsetWidth >= scrollWidth;
    }

    const handleScroll = throttle((e: Event) => {
      deriveScrollShadow(e.target as HTMLElement);
    }, 64);
    provide(tabsInjectionKey, {
      triggerRef: toRef(props, 'trigger'),
      tabStyleRef: toRef(props, 'tabStyle'),
      paneClassRef: toRef(props, 'paneClass'),
      paneStyleRef: toRef(props, 'paneStyle'),
      mergedClsPrefixRef,
      typeRef: toRef(props, 'type'),
      closableRef: toRef(props, 'closable'),
      valueRef: mergedValueRef,
      tabChangeIdRef,
      onBeforeLeaveRef: toRef(props, 'onBeforeLeave'),
      activateTab,
      handleClose,
      handleAdd
    });
    onFontsReady(() => {
      updateCurrentBarStyle();
    });

    // avoid useless rerender
    watchEffect(() => {
      const { value: el } = scrollWrapperElRef;
      if (!el) return;
      const { value: clsPrefix } = mergedClsPrefixRef;
      const shadowBeforeClass = `${clsPrefix}-tabs-nav-scroll-wrapper--shadow-before`;
      const shadowAfterClass = `${clsPrefix}-tabs-nav-scroll-wrapper--shadow-after`;
      if (leftReachedRef.value) {
        el.classList.remove(shadowBeforeClass);
      } else {
        el.classList.add(shadowBeforeClass);
      }
      if (rightReachedRef.value) {
        el.classList.remove(shadowAfterClass);
      } else {
        el.classList.add(shadowAfterClass);
      }
    });

    const exposedMethods: TabsInst = {
      syncBarPosition: () => {
        updateCurrentBarStyle();
      }
    };

    const cssVarsRef = computed(() => {
      const { value: size } = compitableSizeRef;
      const { type } = props;
      const typeSuffix = (
        {
          card: 'Card',
          bar: 'Bar',
          line: 'Line',
          segment: 'Segment'
        } as const
      )[type];
      const sizeType = `${size}${typeSuffix}` as const;
      const {
        self: {
          barColor,
          closeColor,
          closeColorHover,
          closeColorPressed,
          tabColor,
          tabBorderColor,
          paneTextColor,
          tabFontWeight,
          tabBorderRadius,
          tabFontWeightActive,
          colorSegment,
          fontWeightStrong,
          tabColorSegment,
          [createKey('panePadding', size)]: panePadding,
          [createKey('tabPadding', sizeType)]: tabPadding,
          [createKey('tabGap', sizeType)]: tabGap,
          [createKey('tabTextColor', type)]: tabTextColor,
          [createKey('tabTextColorActive', type)]: tabTextColorActive,
          [createKey('tabTextColorHover', type)]: tabTextColorHover,
          [createKey('tabTextColorDisabled', type)]: tabTextColorDisabled,
          [createKey('tabFontSize', size)]: tabFontSize
        },
        common: { cubicBezierEaseInOut }
      } = themeRef.value;
      return {
        '--n-bezier': cubicBezierEaseInOut,
        '--n-color-segment': colorSegment,
        '--n-bar-color': barColor,
        '--n-tab-font-size': tabFontSize,
        '--n-tab-text-color': tabTextColor,
        '--n-tab-text-color-active': tabTextColorActive,
        '--n-tab-text-color-disabled': tabTextColorDisabled,
        '--n-tab-text-color-hover': tabTextColorHover,
        '--n-pane-text-color': paneTextColor,
        '--n-tab-border-color': tabBorderColor,
        '--n-tab-border-radius': tabBorderRadius,
        '--n-close-color': closeColor,
        '--n-close-color-hover': closeColorHover,
        '--n-close-color-pressed': closeColorPressed,
        '--n-tab-color': tabColor,
        '--n-tab-font-weight': tabFontWeight,
        '--n-tab-font-weight-active': tabFontWeightActive,
        '--n-tab-padding': tabPadding,
        '--n-tab-gap': tabGap,
        '--n-pane-padding': panePadding,
        '--n-font-weight-strong': fontWeightStrong,
        '--n-tab-color-segment': tabColorSegment
      };
    });

    const themeClassHandle = inlineThemeDisabled
      ? useThemeClass(
        'tabs',
        computed(() => {
          return `${compitableSizeRef.value[0]}${props.type[0]}`;
        }),
        cssVarsRef,
        props
      )
      : undefined;

    return {
      mergedClsPrefix: mergedClsPrefixRef,
      mergedValue: mergedValueRef,
      renderedNames: new Set<NonNullable<TabPaneProps['name']>>(),
      tabsElRef,
      barElRef,
      addTabInstRef,
      xScrollInstRef,
      scrollWrapperElRef,
      addTabFixed: addTabFixedRef,
      tabWrapperStyle: tabWrapperStyleRef,
      handleNavResize,
      mergedSize: compitableSizeRef,
      handleScroll,
      handleTabsResize,
      cssVars: inlineThemeDisabled ? undefined : cssVarsRef,
      themeClass: themeClassHandle?.themeClass,
      onRender: themeClassHandle?.onRender,
      ...exposedMethods
    };
  },
  render () {
    const {
      mergedClsPrefix,
      type,
      addTabFixed,
      addable,
      mergedSize,
      onRender,
      $slots: { default: defaultSlot, prefix: prefixSlot, suffix: suffixSlot }
    } = this;

    onRender?.();

    const tabPaneChildren = defaultSlot
      ? flatten(defaultSlot()).filter((v) => {
        return (v.type as any).__TAB_PANE__ === true;
      })
      : [];
    const tabChildren = defaultSlot
      ? flatten(defaultSlot()).filter((v) => {
        return (v.type as any).__TAB__ === true;
      })
      : [];
    const showPane = !tabChildren.length;
    const isCard = type === 'card';
    const isSegment = type === 'segment';
    const mergedJustifyContent = !isCard && !isSegment && this.justifyContent;
    return (
      <div
        class={[
          `${mergedClsPrefix}-tabs`,
          this.themeClass,
          `${mergedClsPrefix}-tabs--${type}-type`,
          `${mergedClsPrefix}-tabs--${mergedSize}-size`,
          mergedJustifyContent && `${mergedClsPrefix}-tabs--flex`
        ]}
        style={this.cssVars as CSSProperties}
      >
        <div
          class={[
            // the class should be applied here since it's possible
            // to make tabs nested in tabs, style may influence each
            // other. adding a class will make it easy to write the
            // style.
            `${mergedClsPrefix}-tabs-nav--${type}-type`,
            `${mergedClsPrefix}-tabs-nav`
          ]}
        >
          {resolveWrappedSlot(
            prefixSlot,
            (children) =>
              children && (
                <div class={`${mergedClsPrefix}-tabs-nav__prefix`}>
                  {children}
                </div>
              )
          )}
          {isSegment ? (
            <div class={`${mergedClsPrefix}-tabs-rail`}>
              {showPane
                ? tabPaneChildren.map((tabPaneVNode: any, index: number) => {
                  return (
                      <Tab
                        {...tabPaneVNode.props}
                        internalCreatedByPane={true}
                        internalLeftPadded={index !== 0}
                      >
                        {tabPaneVNode.children
                          ? {
                              default: tabPaneVNode.children.tab
                            }
                          : undefined}
                      </Tab>
                  );
                })
                : tabChildren.map((tabVNode: any, index: number) => {
                  if (index === 0) {
                    return tabVNode;
                  } else {
                    return createLeftPaddedTabVNode(tabVNode);
                  }
                })}
            </div>
          ) : (
            <VResizeObserver onResize={this.handleNavResize}>
              {{
                default: () => (
                  <div
                    class={`${mergedClsPrefix}-tabs-nav-scroll-wrapper`}
                    ref="scrollWrapperElRef"
                  >
                    <VXScroll ref="xScrollInstRef" onScroll={this.handleScroll}>
                      {{
                        default: () => {
                          const rawWrappedTabs = (
                            <div
                              style={this.tabWrapperStyle}
                              class={`${mergedClsPrefix}-tabs-wrapper`}
                            >
                              {mergedJustifyContent ? null : (
                                <div
                                  class={`${mergedClsPrefix}-tabs-scroll-padding`}
                                  style={{ width: `${this.tabsPadding}px` }}
                                />
                              )}
                              {showPane
                                ? tabPaneChildren.map(
                                  (tabPaneVNode: any, index: number) => {
                                    return justifyTabDynamicProps(
                                        <Tab
                                          {...tabPaneVNode.props}
                                          internalCreatedByPane={true}
                                          internalLeftPadded={
                                            index !== 0 && !mergedJustifyContent
                                          }
                                        >
                                          {tabPaneVNode.children
                                            ? {
                                                default:
                                                  tabPaneVNode.children.tab
                                              }
                                            : undefined}
                                        </Tab>
                                    );
                                  }
                                )
                                : tabChildren.map(
                                  (tabVNode: any, index: number) => {
                                    if (
                                      index !== 0 &&
                                        !mergedJustifyContent
                                    ) {
                                      return justifyTabDynamicProps(
                                        createLeftPaddedTabVNode(tabVNode)
                                      );
                                    } else {
                                      return justifyTabDynamicProps(tabVNode);
                                    }
                                  }
                                )}
                              {!addTabFixed && addable && isCard
                                ? createAddTag(
                                  addable,
                                  (showPane
                                    ? tabPaneChildren.length
                                    : tabChildren.length) !== 0
                                )
                                : null}
                              {mergedJustifyContent ? null : (
                                <div
                                  class={`${mergedClsPrefix}-tabs-scroll-padding`}
                                  style={{ width: `${this.tabsPadding}px` }}
                                />
                              )}
                            </div>
                          );
                          let wrappedTabs = rawWrappedTabs;
                          if (isCard && addable) {
                            wrappedTabs = (
                              <VResizeObserver onResize={this.handleTabsResize}>
                                {{
                                  default: () => rawWrappedTabs
                                }}
                              </VResizeObserver>
                            );
                          }
                          return (
                            <div
                              ref="tabsElRef"
                              class={`${mergedClsPrefix}-tabs-nav-scroll-content`}
                            >
                              {wrappedTabs}
                              {isCard ? (
                                <div class={`${mergedClsPrefix}-tabs-pad`} />
                              ) : null}
                              {isCard ? null : (
                                <div
                                  ref="barElRef"
                                  class={`${mergedClsPrefix}-tabs-bar`}
                                />
                              )}
                            </div>
                          );
                        }
                      }}
                    </VXScroll>
                  </div>
                )
              }}
            </VResizeObserver>
          )}
          {addTabFixed && addable && isCard
            ? createAddTag(addable, true)
            : null}
          {resolveWrappedSlot(
            suffixSlot,
            (children) =>
              children && (
                <div class={`${mergedClsPrefix}-tabs-nav__suffix`}>
                  {children}
                </div>
              )
          )}
        </div>
        {showPane &&
          filterMapTabPanes(
            tabPaneChildren,
            this.mergedValue,
            this.renderedNames
          )}
      </div>
    );
  }
});

function filterMapTabPanes (
  tabPaneVNodes: VNode[],
  value: string | number | null,
  renderedNames: Set<string | number>
): VNode[] {
  const children: VNode[] = [];
  tabPaneVNodes.forEach((vNode) => {
    const {
      name,
      displayDirective,
      'display-directive': _displayDirective
    } = vNode.props as TabPaneProps;
    const matchDisplayDirective = (
      directive: TabPaneProps['displayDirective']
    ): boolean =>
      displayDirective === directive || _displayDirective === directive;
    const show = value === name;
    if (vNode.key !== undefined) {
      vNode.key = name;
    }
    if (
      show ||
      matchDisplayDirective('show') ||
      (matchDisplayDirective('show:lazy') && renderedNames.has(name))
    ) {
      if (!renderedNames.has(name)) {
        renderedNames.add(name);
      }
      const useVShow = !matchDisplayDirective('if');
      children.push(useVShow ? withDirectives(vNode, [[vShow, show]]) : vNode);
    }
  });
  return children;
}

function createAddTag (addable: Addable, internalLeftPadded: boolean): VNode {
  return (
    <Tab
      ref="addTabInstRef"
      key="__addable"
      name="__addable"
      internalCreatedByPane
      internalAddable
      internalLeftPadded={internalLeftPadded}
      disabled={typeof addable === 'object' && addable.disabled}
    />
  );
}

function createLeftPaddedTabVNode (tabVNode: VNode): VNode {
  const modifiedVNode = cloneVNode(tabVNode);
  if (modifiedVNode.props) {
    modifiedVNode.props.internalLeftPadded = true;
  } else {
    modifiedVNode.props = {
      internalLeftPadded: true
    };
  }
  return modifiedVNode;
}

function justifyTabDynamicProps (
  tabVNode: {
    dynamicProps?: string[]
  } & VNode
): VNode {
  if (Array.isArray(tabVNode.dynamicProps)) {
    if (!tabVNode.dynamicProps.includes('internalLeftPadded')) {
      tabVNode.dynamicProps.push('internalLeftPadded');
    }
  } else {
    tabVNode.dynamicProps = ['internalLeftPadded'];
  }
  return tabVNode;
}
