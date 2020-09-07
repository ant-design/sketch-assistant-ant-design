import { RuleContext } from '@sketch-hq/sketch-assistant-types';
import { ruleFactory } from '../utils';
import { Pangu } from '../functions';

/**
 * 盘古规则
 */
const ruleFn = async (context: RuleContext) => {
  const layers = context.utils.objects.text;
  for (const layer of layers) {
    const rulepangu = layer.attributedString.string;
    const text = Pangu.spacing(rulepangu);
    if (text !== rulepangu) {
      context.utils.report('盘古之白：中英文之间需空格，数字与文字之间需空格', layer);
    }
  }
};

const Rule = ruleFactory({
  title: '✏️ 盘古之白：中英文之间需空格，数字与文字之间需空格',
  identifier: 'Pangu',
  description: '盘古之白：中英文之间需空格，数字与文字之间需空格',
  rule: ruleFn,
});

export default Rule;
