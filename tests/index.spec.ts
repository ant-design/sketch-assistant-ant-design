import { name } from '../package.json';
import { identifier } from '../src/utils';

test('Assistant identifier 需要和 package.json 的 name 一致', async () => {
  expect(identifier).toBe(name);
});
