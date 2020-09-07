import { RuleContext } from '@sketch-hq/sketch-assistant-types';
import { ruleFactory } from '../utils';
import { capitial } from '../functions';

/**
 * 英文首字母需大写规则
 */
const ruleFn = async (context: RuleContext) => {
  const layers = context.utils.objects.text;
  for (const layer of layers) {
    const rulecapitial = layer.attributedString.string;
    const text = capitial(rulecapitial);
    if (text !== rulecapitial) {
      context.utils.report('英文首字母需大写', layer);
    }
  }
};

const Rule = ruleFactory({
  title: '英文首字母需大写',
  identifier: 'Cpitial',
  description: 'Cpitial',
  rule: ruleFn,
});

export default Rule;
