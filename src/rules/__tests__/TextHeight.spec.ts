import { resolve } from 'path';
import { testAssistant } from '@sketch-hq/sketch-assistant-utils';
import { assistantFactory } from '../../utils/assistantTestHelper';
import TextHeightRule from '../textHeight';

describe('测试 TextHeight 规则', () => {
  it('TextHeight 文本', async () => {
    const Assistant = assistantFactory(TextHeightRule);
    const { violations } = await testAssistant(
      resolve(__dirname, './TextHeight.sketch'),
      Assistant,
    );
    expect(violations).toHaveLength(2);
  });
});
