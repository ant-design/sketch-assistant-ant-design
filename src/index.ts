import { AssistantPackage } from '@sketch-hq/sketch-assistant-types';
import { identifier } from './utils';
import { TextHeightRule } from './rules';

const assistant: AssistantPackage = async () => {
  return {
    name: identifier,
    rules: [TextHeightRule],
    config: {
      rules: {
        [TextHeightRule.name]: { active: true },
      },
    },
  };
};

export default assistant;
