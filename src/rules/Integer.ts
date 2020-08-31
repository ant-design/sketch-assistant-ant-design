import { RuleContext } from '@sketch-hq/sketch-assistant-types';
import { ruleFactory } from '../utils';

/**
 * 图层名称不允许包含备份
 */
const ruleFn = async (context: RuleContext) => {
  const Layers = context.utils.objects.anyLayer;
  for (const layer of Layers) {
    const errorX = layer.frame.x.toString().includes('.');
    const errorY = layer.frame.y.toString().includes('.');
    const errorH = layer.frame.height.toString().includes('.');
    const errorW = layer.frame.width.toString().includes('.');
    if (errorX || errorY || errorH || errorW) {
      context.utils.report('图形尺寸不是整数', layer);
    }
  }
};

const Rule = ruleFactory({
  title: '以下图形的 X/Y/W/H 值存在小数',
  identifier: 'Integer',
  description: 'Integer',
  rule: ruleFn,
});

export default Rule;