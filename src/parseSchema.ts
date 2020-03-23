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
 * Parses schema file basedd on its type.
 * supported GraphQL schema types: .graphql
 *
 * @param schemaPath full path to GraphQL schema file
 */
export async function parseSchema(
  schemaPath: string,
): Promise<ExecutionResult<IntrospectionQuery> | null> {
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
    // TODO: support other GraphQL schema types
    default:
      result = null;
      break;
  }
  return result;
}
