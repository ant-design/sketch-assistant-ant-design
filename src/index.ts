import { AssistantPackage } from '@sketch-hq/sketch-assistant-types';
import { identifier } from './utils';
import {
  textHeightRule,
  radiusRule,
  integerRule,
  hiddenLayerRule,
  fontColorRule,
  FontRule,
  FontSizeRule,
  PanguRule,
  capitialRule,
} from './rules';

const assistant: AssistantPackage = async () => {
  return {
    name: identifier,
    rules: [
      textHeightRule,
      radiusRule,
      integerRule,
      hiddenLayerRule,
      FontRule,
      FontSizeRule,
      PanguRule,
      capitialRule,
    ],
    config: {
      rules: {
        [textHeightRule.name]: { active: true },
        [radiusRule.name]: { active: true },
        [integerRule.name]: { active: true },
        [hiddenLayerRule.name]: { active: true },
        [fontColorRule.name]: { active: true },
        [FontRule.name]: { active: true },
        [FontSizeRule.name]: { active: true },
        [PanguRule.name]: { active: true },
        [capitialRule.name]: { active: false },
      },
    },
  };
};

export default assistant;
