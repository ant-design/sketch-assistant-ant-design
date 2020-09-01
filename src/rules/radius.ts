import { RuleContext } from '@sketch-hq/sketch-assistant-types';
import { ruleFactory } from '../utils';

/**
 * 圆角规则
 */
const ruleFn = async (context: RuleContext) => {
  const Layers = context.utils.objects.anyLayer;
  for (const layer of Layers) {
    if (layer._class === 'rectangle') {
      if (layer.fixedRadius !== 2) {
        context.utils.report('圆角为 2px', layer);
      }
    }
  }
};

const Rule = ruleFactory({
  title: '矩形圆角应为 2px，以下图层不符合规则',
  identifier: 'radius',
  description: 'radius',
  rule: ruleFn,
});

export default Rule;
