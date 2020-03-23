import * as fs from 'fs';
import * as path from 'path';

import {
  ExecutionResult,
  IntrospectionQuery,
  buildSchema,
  getIntrospectionQuery,
  graphql,
} from 'graphql';

/**
 *
 * Parses schema file basedd on its extension.
 * .json and .graphql are supported.
 *
 * @param schemaPath full path of schema file
 */
export async function parseSchema(schemaPath: string) {
  const schema = fs.readFileSync(schemaPath, 'utf8');
  const schemaExtname = path.extname(schemaPath);
  let result: ExecutionResult<IntrospectionQuery> | null;

  switch (schemaExtname) {
    case '.graphql':
      const graphqlSchema = buildSchema(schema);
      const introspectionQuery = getIntrospectionQuery();
      result = await graphql<IntrospectionQuery>(
        graphqlSchema,
        introspectionQuery,
        {},
      );
      break;
    case '.json':
      result = JSON.parse(schema);
      break;
    default:
      result = null;
      break;
  }
  return result;
}
