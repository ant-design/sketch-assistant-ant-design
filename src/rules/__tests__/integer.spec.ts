import { resolve } from 'path';
import { testAssistant } from '@sketch-hq/sketch-assistant-utils';
import { assistantFactory } from '../../utils/assistantTestHelper';
import integerRule from '../integer';

describe('测试 integer 规则', () => {
  it('integer 图形', async () => {
    const Assistant = assistantFactory(integerRule);
    const { violations } = await testAssistant(resolve(__dirname, './integer.sketch'), Assistant);
    expect(violations).toHaveLength(5);
  });
});
