import { RuleContext } from '@sketch-hq/sketch-assistant-types';
import { ruleFactory } from '../utils';

/**
 * 文本行高+8规则
 */
const ruleFn = async (context: RuleContext) => {
  const { utils } = context;
  const { objects } = utils;
  // eslint-disable-next-line no-restricted-syntax
  for (const layer of objects.text) {
    const textStyle = layer?.style?.textStyle;
    const size = textStyle?.encodedAttributes.MSAttributedStringFontAttribute.attributes.size;
    const maxHeight = textStyle?.encodedAttributes.paragraphStyle?.maximumLineHeight;
    const minHeight = textStyle?.encodedAttributes.paragraphStyle?.minimumLineHeight;
    if (size && (maxHeight !== size + 8 || minHeight !== size + 8)) {
      utils.report(`图层的行高不等于字号+8`, layer);
    }
  }
};

const rule = ruleFactory({
  title: '✏️ 文本行高应为文本字号 +8px',
  identifier: 'text-height',
  description: '文本行高应为文本字号 +8px',
  rule: ruleFn,
});

export default rule;
