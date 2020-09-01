import { AssistantPackage } from '@sketch-hq/sketch-assistant-types';
import { identifier } from './utils';
import { textHeightRule, radiusRule, integerRule, hidenlayerRule } from './rules';

const assistant: AssistantPackage = async () => {
  return {
    name: identifier,
    rules: [textHeightRule, radiusRule, integerRule, hidenlayerRule],
    config: {
      rules: {
        [textHeightRule.name]: { active: true },
        [radiusRule.name]: { active: true },
        [integerRule.name]: { active: true },
        [hidenlayerRule.name]: { active: true },
      },
    },
  };
};

export default assistant;
