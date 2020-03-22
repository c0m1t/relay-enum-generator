import * as fs from 'fs';
import * as path from 'path';

import { ExecutionResult, IntrospectionQuery } from 'graphql';

import { interospectionQueryToEnums } from './InterospectionQueryToEnums';

export interface Config {
  name: string;
  path: string;
  schema: string;
}

export function write(
  result: ExecutionResult<IntrospectionQuery>,
  config: Config,
) {
  const enums = interospectionQueryToEnums(result.data);
  if (!fs.existsSync(config.path)) {
    fs.mkdirSync(config.path);
  }
  fs.writeFileSync(path.resolve(config.path, config.name), enums);
}
