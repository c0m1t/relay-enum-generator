# relay-enum-generator

[![NPM version](https://badgen.net/npm/v/relay-enum-generator)](https://npmjs.com/package/relay-enum-generator)
[![NPM downloads](https://badgen.net/npm/dm/relay-enum-generator)](https://npmjs.com/package/relay-enum-generator)

A package which generates enums from a generated schema file.

## Install

```bash
$ yarn add relay-enum-generator
```

## Usage

```
$ yarn relay-enum-generator [options]

Options:

--name                Name of your generated file
--path                Path where your file will be generated in
--schema              Path of schema to read from
--noFutureProofEnums  This option controls whether or not a catch-all entry is added to enum type definitions for values that may be added in the future.
```

Default values for `--schema` and `--noFutureProofEnums` are read from `relay.config` file.

## Acknowledgments

It is inspired by @zth [work](https://github.com/zth/reason-relay/blob/master/packages/reason-relay/compiler/generateSchemaAssets.js) which he had done for `Reason` language, also thanks to @smmoosavi for his contributions.
