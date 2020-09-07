import { RuleContext } from '@sketch-hq/sketch-assistant-types';
import { ruleFactory } from '../utils';

/**
 * 圆角规则
 */
const ruleFn = async (context: RuleContext) => {
  const Layers = context.utils.objects.anyLayer;
  for (const layer of Layers) {
    if (layer._class === 'rectangle') {
      let radius2Count = 0;
      let radius0Count = 0;
      let hasRadiusError = false;
      let hasLargeRadius = false;
      if (layer.frame.width > 10 && layer.frame.height > 10) {
        for (let i = 0; i < layer.points.length; i += 1) {
          const radius = layer.points[i].cornerRadius;
          if (radius === 2) {
            radius2Count += 1;
          }
          if (radius === 0) {
            radius0Count += 1;
          }
          if (radius !== 2 && radius !== 0) {
            hasRadiusError = true;
          }
          if (radius > 10) {
            hasLargeRadius = true;
          }
        }
        const condition1 = radius0Count === 1 || radius0Count === 3;
        const condition2 = radius2Count === 1 || radius2Count === 3;
        if (!hasLargeRadius && (hasRadiusError || condition2 || condition1)) {
          context.utils.report('圆角为 2px', layer);
        }
      }
    }
  }
};

const Rule = ruleFactory({
  title: '🧩 矩形圆角应为 2px',
  identifier: 'radius',
  description: '矩形圆角应为 2px',
  rule: ruleFn,
});

export default Rule;
