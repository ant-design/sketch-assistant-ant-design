import { resolve } from 'path';
import { testAssistant } from '@sketch-hq/sketch-assistant-utils';
import { assistantFactory } from '../../utils/assistantTestHelper';
import fontRule from '../font';

describe('测试 font 规则', () => {
  it('font', async () => {
    const Assistant = assistantFactory(fontRule);
    const { violations } = await testAssistant(resolve(__dirname, './font.sketch'), Assistant);
    expect(violations).toHaveLength(1);
  });
});
