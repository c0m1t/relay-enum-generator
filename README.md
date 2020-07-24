# relay-enum-generator

[![NPM version](https://badgen.net/npm/v/relay-enum-generator)](https://npmjs.com/package/relay-enum-generator)
[![NPM downloads](https://badgen.net/npm/dm/relay-enum-generator)](https://npmjs.com/package/relay-enum-generator)

A package which generates enums from a generated schema file as unions.

For more options, check out this awesome packages: [`graphql-code-generator`](https://github.com/dotansimha/graphql-code-generator)

## Install

```bash
$ yarn add relay-enum-generator
```

## Usage

```
$ yarn relay-enum-generator [options]

options:
--name                  Name of your generated file [default: 'enums.ts']
--path                  Path where your file will be generated in [default: './src/__generated__']
--schema                Path of schema to read from. Default value is read from relay.config file [default: read from relay.config]
--noFutureProofEnums    This option controls whether or not a catch-all entry is added to enum type definitions for values that may be added in the future. [default: read from relay.config]
```

## Example

```
$ yarn relay-enum-generator --name enums
```
```ts
// src/__generated__/enums.ts

export type Evaluation =
  | 'NEEDS_IMPROVEMENT'
  | 'MEETS_EXPECTATIONS'
  | 'EXCEEDS_EXPECTATIONS'
  | 'SUPERB'
  | '%future added value' 

export type State =
  | 'TODO'
  | 'DOING'
  | 'DONE'
  | '%future added value' 

export type Phase =
  | 'SELF_REVIEW'
  | 'PEER_REVIEW'
  | 'MANAGER_REVIEW'
  | 'RESULTS'
  | 'IDLE'
  | '%future added value' 

```

## Acknowledgments

It is inspired by @zth [code](https://github.com/zth/reason-relay/blob/master/packages/reason-relay/compiler/generateSchemaAssets.js) which he had done for `Reason` language, also thanks to @smmoosavi for his contributions.
