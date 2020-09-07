import { resolve } from 'path';
import { testAssistant } from '@sketch-hq/sketch-assistant-utils';
import { assistantFactory } from '../../utils/assistantTestHelper';
import CapitialRule from '../Capitial';

describe('测试 Capitial 规则', () => {
  it('Capitial ', async () => {
    const Assistant = assistantFactory(CapitialRule);
    const { violations } = await testAssistant(resolve(__dirname, './Capitial.sketch'), Assistant);
    expect(violations).toHaveLength(3);
  });
});
