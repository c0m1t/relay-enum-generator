/**
 * @public
 */
export interface Options {}

/**
 *
 * return `relay-enum-generator` string
 *
 * @returns the `relay-enum-generator`  string
 *
 * @example
 * Here's an example:
 *
 * ```ts
 * import { RelayEnumGenerator } from 'relay-enum-generator'
 *
 * console.log(RelayEnumGenerator());
 * // Prints "relay-enum-generator":
 * ```
 */
export function RelayEnumGenerator(options?: Options) {
  return 'relay-enum-generator';
}
