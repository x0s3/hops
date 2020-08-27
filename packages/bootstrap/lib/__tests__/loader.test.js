/* eslint-env node, jest */
const { join } = require('path');
// eslint-disable-next-line node/no-extraneous-require
const execa = require('execa');

async function spawnTest(fixture) {
  const dir = join(__dirname, 'fixtures', fixture);
  const result = await execa(process.argv[0], [join(dir, 'test.js')], {
    cwd: dir,
  });
  try {
    return JSON.parse(result.stdout);
  } catch (e) {
    console.log(result.stdout);
    throw e;
  }
}

test('Should return empty object if no config is given', async () => {
  const actual = await spawnTest('no-config');

  expect({}).toEqual(actual);
});

test('Should return a simple config without presets', async () => {
  const actual = await spawnTest('no-presets');

  expect({ key: 'value' }).toEqual(actual);
});

test('Should return a config with default presets', async () => {
  const actual = await spawnTest('default-presets');

  expect({ key: 'value' }).toEqual(actual);
});

test('Should return a config with custom presets', async () => {
  const actual = await spawnTest('custom-presets');

  expect({ key: 'value' }).toEqual(actual);
});
