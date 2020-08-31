import { AssistantPackage } from '@sketch-hq/sketch-assistant-types';
import { identifier } from './utils';
import { TextHeightRule, FontRule, FontSizeRule } from './rules';

const assistant: AssistantPackage = async () => {
  return {
    name: identifier,
    rules: [TextHeightRule, FontRule, FontSizeRule],
    config: {
      rules: {
        [TextHeightRule.name]: { active: true },
        [FontRule.name]: { active: true },
        [FontSizeRule.name]: { active: true },
      },
    },
  };
};

export default assistant;
