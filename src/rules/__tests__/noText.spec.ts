import { resolve } from 'path';
import { testAssistant } from '@sketch-hq/sketch-assistant-utils';
import { assistantFactory } from '../../utils/assistantTestHelper';
import noTextRule from '../noText';

describe('测试 NoText 规则', () => {
  it('没有配置时会报错', async () => {
    const Assistant = assistantFactory(noTextRule);
    const { ruleErrors } = await testAssistant(resolve(__dirname, './noText.sketch'), Assistant);
    expect(ruleErrors).toHaveLength(1);
  });
  it('配置为假时 no-text.sketch 文件包含两条错误', async () => {
    const Assistant = assistantFactory(noTextRule, { text: '假' });
    const { violations, ruleErrors } = await testAssistant(
      resolve(__dirname, './noText.sketch'),
      Assistant,
    );
    expect(violations).toHaveLength(2);
    expect(violations[0].message).toBe('图层假文本包含"假"文本');
    expect(violations[1].message).toBe('图层假文本备份包含"假"文本');
    expect(ruleErrors).toHaveLength(0);
  });
  it('配置为真时 no-text.sketch 文件包含两条错误', async () => {
    const Assistant = assistantFactory(noTextRule, { text: '真' });
    const { violations, ruleErrors } = await testAssistant(
      resolve(__dirname, './noText.sketch'),
      Assistant,
    );
    expect(violations).toHaveLength(0);
    expect(ruleErrors).toHaveLength(0);
  });
});
