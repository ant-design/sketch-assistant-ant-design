import { RuleContext } from '@sketch-hq/sketch-assistant-types';
import { ruleFactory } from '../utils';

/**
 * 字号大小规则
 */
const ruleFn = async (context: RuleContext) => {
  const layers = context.utils.objects.text;
  for (const layer of layers) {
    const fontSize =
      layer.attributedString.attributes[0].attributes.MSAttributedStringFontAttribute.attributes
        .size;
    const size12 = fontSize === 12;
    const size14 = fontSize === 14;
    const size16 = fontSize === 16;
    const size20 = fontSize === 20;
    const size24 = fontSize === 24;
    if (!(size12 || size14 || size16 || size20 || size24)) {
      context.utils.report('字号应为12、14、16、20、24', layer);
    }
  }
};

const Rule = ruleFactory({
  title: '字号应为12、14、16、20、24',
  identifier: 'FontSize',
  description: 'FontSize',
  rule: ruleFn,
});

export default Rule;
