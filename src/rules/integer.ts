import { RuleContext } from '@sketch-hq/sketch-assistant-types';
import { ruleFactory } from '../utils';

/**
 * 图形尺寸不是整数 规则
 */
const ruleFn = async (context: RuleContext) => {
  const Layers = context.utils.objects.anyLayer;
  for (const layer of Layers) {
    const errorX = !layer.frame.x.toFixed(2).endsWith('.00');
    const errorY = !layer.frame.y.toFixed(2).endsWith('.00');
    const errorH = !layer.frame.height.toFixed(2).endsWith('.00');
    const errorW = !layer.frame.width.toFixed(2).endsWith('.00');
    if (errorX || errorY || errorH || errorW) {
      if (layer._class !== 'shapePath' && layer._class !== 'shapeGroup')
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
