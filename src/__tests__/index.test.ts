import { resolve } from 'path';
import { testAssistant } from '@sketch-hq/sketch-assistant-utils';
import Assistant from '../index';

test('测试 Assistant', async () => {
  const { violations, ruleErrors } = await testAssistant(
    resolve(__dirname, './empty.sketch'),
    Assistant,
  );
  expect(violations).toHaveLength(0);
  expect(ruleErrors).toHaveLength(0);
});
