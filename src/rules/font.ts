import { RuleContext } from '@sketch-hq/sketch-assistant-types';
import { ruleFactory } from '../utils';

/**
 * 图层名称不允许包含备份
 */
const ruleFn = async (context: RuleContext) => {
  const layers = context.utils.objects.text;
  for (const layer of layers) {
    const fontName =
      layer.attributedString.attributes[0].attributes.MSAttributedStringFontAttribute.attributes
        .name;
    const PingFang = fontName.includes('PingFangSC');
    const HelveticaNeue = fontName.includes('Helvetica Neue');
    const SFProText = fontName.includes('SF Pro Text');
    if (!(PingFang || HelveticaNeue || SFProText)) {
      context.utils.report('字体为 PingFangSC、Helvetica Neue、SF Pro Text', layer);
    }
  }
};

const Rule = ruleFactory({
  title: '字体为 PingFangSC、Helvetica Neue、SF Pro Text',
  identifier: 'Font',
  description: 'Font',
  rule: ruleFn,
});

export default Rule;
