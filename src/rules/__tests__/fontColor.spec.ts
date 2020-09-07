import { resolve } from 'path';
import { testAssistant } from '@sketch-hq/sketch-assistant-utils';
import { assistantFactory } from '../../utils/assistantTestHelper';
import fontColorRule from '../fontColor';

describe('测试 fontColor 规则', () => {
  it('fontColor 文本颜色', async () => {
    const Assistant = assistantFactory(fontColorRule);
    const { violations } = await testAssistant(resolve(__dirname, './fontColor.sketch'), Assistant);
    expect(violations).toHaveLength(2);
  });
});
