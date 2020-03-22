import { IntrospectionQuery } from 'graphql';
import { isIntrospectionEnumType } from './helpers';

export function interospectionQueryToEnums(
  interospectionQuery: IntrospectionQuery | undefined | null,
) {
  if (!interospectionQuery) {
    return;
  }

  return interospectionQuery.__schema.types
    .filter(isIntrospectionEnumType)
    .filter(({ name }) => !name.startsWith('_'))
    .map(e => {
      const { name, enumValues } = e;
      const values = enumValues
        .map(enumValue => enumValue.name)
        .concat('%future added value');

      return `export type ${name} =\n  | '` + values.join("'\n  | '") + "' \n";
    })
    .join('\n');
}
