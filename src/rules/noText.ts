import { RuleContext } from '@sketch-hq/sketch-assistant-types';
import { ruleFactory } from '../utils';

/**
 * 文本图层不允许包含输入的文本
 */
const noTextFn = async (context: RuleContext) => {
  const { utils } = context;
  const { objects, getOption } = utils;
  const pattern = getOption('text'); // 从配置项获取参数
  if (typeof pattern !== 'string') throw Error('没有输入文本或输入的不是文本');

  for (const layer of objects.text) {
    const value = layer.attributedString.string;

    if (value.includes(pattern)) {
      utils.report(`图层${layer.name}包含"${pattern}"文本`, layer);
    }
  }
};

const noTextRule = ruleFactory({
  title: (config) => `不允许文本图层包含[${config.text}]文本`,
  identifier: 'no-text',
  description: '不允许设计师使用一些假文本',
  rule: noTextFn,
});

export default noTextRule;
