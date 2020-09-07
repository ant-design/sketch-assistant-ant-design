import { RuleContext } from '@sketch-hq/sketch-assistant-types';
import { ruleFactory } from '../utils';

/**
 * 字体规则
 */
const ruleFn = async (context: RuleContext) => {
  const layers = context.utils.objects.text;
  for (const layer of layers) {
    const fontName =
      layer.attributedString.attributes[0].attributes.MSAttributedStringFontAttribute.attributes
        .name;
    const PingFang = fontName.includes('PingFangSC');
    const HelveticaNeue = fontName.includes('HelveticaNeue');
    const SFProText = fontName.includes('SFProText');
    if (!(PingFang || HelveticaNeue || SFProText)) {
      context.utils.report('字体应为 PingFangSC、HelveticaNeue、SF Pro Text', layer);
    }
  }
};

const Rule = ruleFactory({
  title: '✏️ 字体应为 PingFangSC、Helvetica Neue、SF Pro Text',
  identifier: 'Font',
  description: '字体应为 PingFangSC、Helvetica Neue、SF Pro Text',
  rule: ruleFn,
});

export default Rule;
