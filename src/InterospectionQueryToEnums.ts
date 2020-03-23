import { IntrospectionQuery } from 'graphql';
import { isIntrospectionEnumType } from './helpers';

export interface Options {
  noFutureProofEnums?: boolean;
}

export function interospectionQueryToEnums(
  interospectionQuery: IntrospectionQuery | undefined | null,
  options: Options = {},
) {
  if (!interospectionQuery) {
    return;
  }

  const { noFutureProofEnums } = options;

  return interospectionQuery.__schema.types
    .filter(isIntrospectionEnumType)
    .filter(({ name }) => !name.startsWith('_'))
    .map(introspectionEnumType => {
      const { name, enumValues } = introspectionEnumType;
      const values = enumValues.map(enumValue => enumValue.name);

      if (!noFutureProofEnums) {
        values.push('%future added value');
      }

      return `export type ${name} =\n  | '` + values.join("'\n  | '") + "' \n";
    })
    .join('\n');
}
