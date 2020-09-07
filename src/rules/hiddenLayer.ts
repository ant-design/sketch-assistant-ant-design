import { RuleContext } from '@sketch-hq/sketch-assistant-types';
import { ruleFactory } from '../utils';

/**
 * 图层名称不允许包含备份
 */
const ruleFn = async (context: RuleContext) => {
  const Layers = context.utils.objects.anyLayer;
  for (const layer of Layers) {
    if (layer.isVisible === false) {
      context.utils.report('被隐藏的图层', layer);
    }
  }
};

const Rule = ruleFactory({
  title: '👻 以下图层被隐藏,请检查是否需要删除',
  identifier: 'hide-layer',
  description: '以下图层被隐藏,请检查是否需要删除',
  rule: ruleFn,
});

export default Rule;
