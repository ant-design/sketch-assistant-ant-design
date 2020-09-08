import { RuleContext } from '@sketch-hq/sketch-assistant-types';
import { ruleFactory } from '../utils';

/**
 * 图层名称不允许包含备份
 */
const ruleFn = async (context: RuleContext) => {
  const { objects } = context.utils;
  for (const layer of objects.text) {
    const fontColor = layer.style?.textStyle?.encodedAttributes.MSAttributedStringColorAttribute!;
    const opacity = layer.style?.contextSettings?.opacity!;
    if (fontColor && fontColor.blue === 0 && fontColor.green === 0 && fontColor.red === 0) {
      const condition1 =
        fontColor.alpha === 1 && ['0.25', '0.45', '0.65', '0.85'].includes(opacity.toFixed(2));
      const correctColorOpacity =
        opacity === 1 &&
        (fontColor.alpha.toFixed(2) === '0.25' ||
          fontColor.alpha.toFixed(2) === '0.45' ||
          fontColor.alpha.toFixed(2) === '0.65' ||
          fontColor.alpha.toFixed(2) === '0.85');
      if (!(condition1 || correctColorOpacity)) context.utils.report('文本透明度', layer);
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
