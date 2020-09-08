import { RuleContext } from '@sketch-hq/sketch-assistant-types';
import { ruleFactory } from '../utils';

/**
 * 圆角规则
 */
const ruleFn = async (context: RuleContext) => {
  const Layers = context.utils.objects.anyLayer;
  for (const layer of Layers) {
    if (layer._class === 'rectangle') {
      let R2Count = 0;
      let R0Count = 0;
      let notR0OrR2 = false;
      let hasLargeRadius = false;
      if (layer.frame.width > 10 && layer.frame.height > 10) {
        for (let i = 0; i < layer.points.length; i += 1) {
          const radius = layer.points[i].cornerRadius;
          if (radius === 2) {
            R2Count += 1;
          }
          if (radius === 0) {
            R0Count += 1;
          }
          if (radius !== 2 && radius !== 0) {
            notR0OrR2 = true;
          }
          if (radius > 10) {
            hasLargeRadius = true;
          }
        }
        const has1R0And3R2 = R0Count === 1 && R2Count === 3;
        const corner1 = layer.points[0].cornerRadius;
        const corner2 = layer.points[1].cornerRadius;
        const corner3 = layer.points[2].cornerRadius;
        const corner4 = layer.points[3].cornerRadius;
        const wrong1 = corner1 === 2 && corner3 === 2 && corner2 === 0 && corner4 === 0;
        const wrong2 = corner1 === 0 && corner3 === 0 && corner2 === 2 && corner4 === 2;
        if (!hasLargeRadius && (notR0OrR2 || has1R0And3R2 || wrong1 || wrong2)) {
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
