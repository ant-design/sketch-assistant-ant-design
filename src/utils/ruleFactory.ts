import { RuleConfig, RuleContext, RuleDefinition } from '@sketch-hq/sketch-assistant-types';
import identifier from './identifier';

/**
 * 规则工厂 基于传入的方法可以返回相应的规则名称和规则函数
 * @param rule 规则方法函数
 * @param description 规则说明
 */
export type RuleFactory = (param: {
  /**
   * 规则的标识符 建议使用英文
   */
  identifier: string;
  /**
   * 规则函数
   * @param context
   */
  rule: (context: RuleContext) => Promise<void>;
  /**
   * 规则的名称 会直接显示在 Assistant 中
   */
  title: string | ((ruleConfig: RuleConfig) => string);
  /**
   * 规则的描述
   */
  description: string;
}) => RuleDefinition;

export const ruleFactory: RuleFactory = ({ identifier: name, rule, description, title }) => {
  const ruleName = identifier + '/' + name;
  return {
    rule,
    name: ruleName,
    title,
    description,
  };
};
