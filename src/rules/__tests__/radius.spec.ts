import { resolve } from 'path';
import { testAssistant } from '@sketch-hq/sketch-assistant-utils';
import { assistantFactory } from '../../utils/assistantTestHelper';
import radiusRule from '../radius';

describe('测试 radius 规则', () => {
  it('4个圆角全不为2px时 提示出错', async () => {
    const Assistant = assistantFactory(radiusRule);
    const { violations } = await testAssistant(
      resolve(__dirname, './radius/all2radius.sketch'),
      Assistant,
    );
    expect(violations).toHaveLength(1);
  });
  it('4个圆角全为0px时 不提示出错', async () => {
    const Assistant = assistantFactory(radiusRule);
    const { violations } = await testAssistant(
      resolve(__dirname, './radius/all0radius.sketch'),
      Assistant,
    );
    expect(violations).toHaveLength(1);
  });
  it('2个圆角是0px 2个圆角是2px时 不提示出错', async () => {
    const Assistant = assistantFactory(radiusRule);
    const { violations } = await testAssistant(
      resolve(__dirname, './radius/2-0_2-2_radius.sketch'),
      Assistant,
    );
    expect(violations).toHaveLength(3);
  });
  it('输入圆角顺序对校验结果无影响', async () => {
    const Assistant = assistantFactory(radiusRule);
    const { violations } = await testAssistant(
      resolve(__dirname, './radius/wrongRadius.sketch'),
      Assistant,
    );
    expect(violations).toHaveLength(0);
  });
  it('大于 10px 的圆角忽略', async () => {
    const Assistant = assistantFactory(radiusRule);
    const { violations } = await testAssistant(
      resolve(__dirname, './radius/bigRadius.sketch'),
      Assistant,
    );
    expect(violations).toHaveLength(0);
  });
  it('长宽小于 10 忽略', async () => {
    const Assistant = assistantFactory(radiusRule);
    const { violations } = await testAssistant(
      resolve(__dirname, './radius/smallRadius.sketch'),
      Assistant,
    );
    expect(violations).toHaveLength(0);
  });
});
