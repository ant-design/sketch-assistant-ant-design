import { resolve } from 'path';
import { testAssistant } from '@sketch-hq/sketch-assistant-utils';
import { assistantFactory } from '../../utils/assistantTestHelper';
import noCopyRule from '../noCopy';

const Assistant = assistantFactory(noCopyRule);

describe('测试 Assistant', function () {
  it('two-copy.sketch 文件包含两条错误', async () => {
    const { violations, ruleErrors } = await testAssistant(
      resolve(__dirname, './noCopy.sketch'),
      Assistant,
    );
    expect(violations).toHaveLength(2);
    expect(violations[0].message).toBe('图层矩形备份包含"备份"文本');
    expect(violations[1].message).toBe('图层矩形备份 2包含"备份"文本');
    expect(ruleErrors).toHaveLength(0);
  });
});
