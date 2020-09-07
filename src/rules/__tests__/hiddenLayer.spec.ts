import { resolve } from 'path';
import { testAssistant } from '@sketch-hq/sketch-assistant-utils';
import { assistantFactory } from '../../utils/assistantTestHelper';
import hiddenLayerRule from '../hiddenLayer';

describe('测试 hiddenLayer 规则', () => {
  it('图层隐藏提示', async () => {
    const Assistant = assistantFactory(hiddenLayerRule);
    const { violations } = await testAssistant(
      resolve(__dirname, './hiddenLayer.sketch'),
      Assistant,
    );
    expect(violations).toHaveLength(1);
  });
});
