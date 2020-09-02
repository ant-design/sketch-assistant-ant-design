import { resolve } from 'path';
import { testAssistant } from '@sketch-hq/sketch-assistant-utils';
import { assistantFactory } from '../../utils/assistantTestHelper';
import panguRule from '../Pangu';

describe('测试 pangu 规则', () => {
  it('pangu', async () => {
    const Assistant = assistantFactory(panguRule);
    const { violations } = await testAssistant(resolve(__dirname, './pangu.sketch'), Assistant);
    expect(violations).toHaveLength(1);
  });
});
