import { AssistantPackage, RuleDefinition } from '@sketch-hq/sketch-assistant-types';
import { identifier } from '../utils';

interface Config {
  [key: string]: any;
}

export const assistantFactory = (
  testRule: RuleDefinition,
  config?: Config,
): AssistantPackage => async () => {
  return {
    name: identifier,
    rules: [testRule],
    config: {
      rules: {
        [testRule.name]: { active: true, ...config },
      },
    },
  };
};
