import { AssistantPackage } from '@sketch-hq/sketch-assistant-types';
import { identifier } from './utils';
import { TextHeightRule, RadiusRule, IntegerRule, HidenlayerRule } from './rules';

const assistant: AssistantPackage = async () => {
  return {
    name: identifier,
    rules: [TextHeightRule, RadiusRule, IntegerRule, HidenlayerRule],
    config: {
      rules: {
        [TextHeightRule.name]: { active: true },
        [RadiusRule.name]: { active: true },
        [IntegerRule.name]: { active: true },
        [HidenlayerRule.name]: { active: true },
      },
    },
  };
};

export default assistant;
