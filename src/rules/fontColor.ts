import { RuleContext } from '@sketch-hq/sketch-assistant-types';
import { ruleFactory } from '../utils';

/**
 * 图层名称不允许包含备份
 */
const ruleFn = async (context: RuleContext) => {
  const Layers = context.utils.objects.anyLayer;
  for (const layer of Layers) {
    const fontColor = layer.style?.textStyle?.encodedAttributes.MSAttributedStringColorAttribute!;

    if (fontColor && fontColor.blue === 0 && fontColor.green === 0 && fontColor.red === 0) {
      if (
        fontColor.alpha !== 0.25 &&
        fontColor.alpha !== 0.45 &&
        fontColor.alpha !== 0.65 &&
        fontColor.alpha !== 0.85
      )
        context.utils.report('文本透明度', layer);
    }
  }
};

const Rule = ruleFactory({
  title: '🎨 文本透明度应为 25%、45%、65%、85%',
  identifier: 'fontColor',
  description: '文本透明度应为 25%、45%、65%、85%',
  rule: ruleFn,
});

export default Rule;
