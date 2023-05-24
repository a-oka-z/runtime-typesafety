params: body
'use strict';

import  { schema } from 'vanilla-schema-validator';
import  { typesafe_function, no_typesafe_function, get_typesafe_tags, set_typesafe_tags, get_output_typesafe_info, get_input_typesafe_info } from './index.mjs' ;
import  { preventUndefined, unprevent } from 'prevent-undefined' ;
import assert from 'node:assert/strict';
import { test, describe, it, before, after } from 'node:test';
import { Console } from 'node:console';

globalThis.console = new Console({ stdout: process.stderr, stderr: process.stderr });

<%=body %>

