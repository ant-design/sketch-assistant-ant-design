import { RuleContext } from '@sketch-hq/sketch-assistant-types';
import { ruleFactory } from '../utils';

/**
 * 图层名称不允许包含备份
 */
const ruleFn = async (context: RuleContext) => {
  const Layers = context.utils.objects.anyLayer;
  for (const layer of Layers) {
    if (layer._class === 'rectangle') {
      // const points = layer.points
      // let isSame = true
      // let initRadius
      // for (let i = 0; i < points.length; i++) {
      //   const radius = points[i].cornerRadius
      //   // 如果第一次执行 没有值
      //   if (!initRadius) {
      //     initRadius = radius
      //   }
      //   if (initRadius !== radius) {
      //     isSame = false
      if (layer.fixedRadius !== 2) {
        context.utils.report('圆角为 2px', layer);
      }
    }
  }
};

const Rule = ruleFactory({
  title: '矩形圆角应为 2px，以下图层不符合规则',
  identifier: 'Radius',
  description: 'Radius',
  rule: ruleFn,
});

export default Rule;
