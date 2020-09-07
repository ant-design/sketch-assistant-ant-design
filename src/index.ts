import { AssistantPackage } from '@sketch-hq/sketch-assistant-types';
import { identifier } from './utils';
import { textHeightRule, radiusRule, integerRule, hiddenLayerRule, fontColorRule } from './rules';

const assistant: AssistantPackage = async () => {
  return {
    name: identifier,
    rules: [textHeightRule, radiusRule, integerRule, hiddenLayerRule],
    config: {
      rules: {
        [textHeightRule.name]: { active: true },
        [radiusRule.name]: { active: true },
        [integerRule.name]: { active: true },
        [hiddenLayerRule.name]: { active: true },
        [fontColorRule.name]: { active: true },
      },
    },
  };
};

export default assistant;
