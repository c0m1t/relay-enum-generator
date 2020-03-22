import * as yargs from 'yargs';

import { Config, write } from '../write';

import { parseSchema } from '../parseSchema';

const relayConfig = require('relay-config').loadConfig();
const defaultSchemaPath = relayConfig['schema'];
const defaultPath = './src/__generated__';
const defaultName = 'enums.ts';

async function main(config: Config) {
  await parseSchema(config.schema).then(result => {
    if (!result) {
      return;
    }
    write(result, config);
  });
}

const options: Record<keyof Config, yargs.Options> = {
  name: {
    describe: 'Name of your generated file',
    type: 'string',
    string: true,
    array: false,
    default: defaultName,
  },
  path: {
    describe: 'Path where your file will be generated in',
    type: 'string',
    string: true,
    array: false,
    default: defaultPath,
  },
  schema: {
    describe: 'Path of schema to read from',
    type: 'string',
    string: true,
    array: false,
    default: defaultSchemaPath,
  },
};

// Parse CLI args
const argv: any = yargs
  .usage('Generate Relay enums\n\n $0 --name <name> --path <path>')
  .options(options)
  .strict()
  .help('help')
  .alias('help', 'h')
  .version('version', '1.0.0')
  .alias('version', 'V').argv;

// Start the application
main(argv).catch(error => {
  console.error(String(error.stack || error));
  process.exit(1);
});
