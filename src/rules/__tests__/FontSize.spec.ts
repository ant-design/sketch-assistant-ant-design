import { resolve } from 'path';
import { testAssistant } from '@sketch-hq/sketch-assistant-utils';
import { assistantFactory } from '../../utils/assistantTestHelper';
import fontSizeRule from '../fontsize';

describe('测试 FontSize 规则', () => {
  it('fontSize', async () => {
    const Assistant = assistantFactory(fontSizeRule);
    const { violations } = await testAssistant(resolve(__dirname, './fontSize.sketch'), Assistant);
    expect(violations).toHaveLength(1);
  });
});
