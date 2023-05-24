params: body
'use strict';

const  { schema } = require( 'vanilla-schema-validator' );
const { typesafe_function, no_typesafe_function, get_typesafe_tags, set_typesafe_tags, get_output_typesafe_info, get_input_typesafe_info } = require( './index.cjs' );
const { preventUndefined, unprevent } = require( 'prevent-undefined' );
const assert = require( 'node:assert/strict' );
const { test, describe, it, before, after }  = require( 'node:test' );
const { Console } = require( 'node:console' );

globalThis.console = new Console({ stdout: process.stderr, stderr: process.stderr });

<%=body %>

