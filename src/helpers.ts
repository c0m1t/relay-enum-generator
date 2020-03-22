import { IntrospectionEnumType, IntrospectionType } from 'graphql';

export function isIntrospectionEnumType(
  type: IntrospectionType,
): type is IntrospectionEnumType {
  return type.kind === 'ENUM';
}
