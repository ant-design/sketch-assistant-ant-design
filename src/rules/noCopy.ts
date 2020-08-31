import { RuleContext } from '@sketch-hq/sketch-assistant-types';
import { ruleFactory } from '../utils';

/**
 * 图层名称不允许包含备份
 */
const noCopyRuleFn = async (context: RuleContext) => {
  const { utils } = context;
  const { objects } = utils;

  for (const layer of objects.anyLayer) {
    if (layer.name.includes('备份')) {
      utils.report(`图层${layer.name}包含"备份"文本`, layer);
    }
  }
};
const noCopyRule = ruleFactory({
  title: '不允许图层名称含有[备份]字样',
  identifier: 'no-copy',
  description: '让设计师能够好好地整理图层样式',
  rule: noCopyRuleFn,
});

export default noCopyRule;
