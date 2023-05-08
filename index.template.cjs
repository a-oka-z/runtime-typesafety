params: body
'use strict'

const { preventUndefined, unprevent  } = require( 'prevent-undefined' );
const { fold_args, the_last, the_all } = require( 'fold-args' );
const { schema                       } = require( 'vanilla-schema-validator' );
const { trace_validator              } = require( 'vanilla-schema-validator' );
const util                             = require( 'util' );
const UTIL_INSPECT_CUSTOM              = require( 'util' ).inspect.custom;
//function inspect(s) {
//  return JSON.stringify( s, (k,v)=>typeof v === 'function' ? v.toString() : v, 2 );
//}





<%=body %>


module.exports.typesafe_function        = typesafe_function;
module.exports.no_typesafe_function     = no_typesafe_function;
module.exports.get_typesafe_tags        = get_typesafe_tags;
module.exports.set_typesafe_tags        = set_typesafe_tags;
module.exports.get_output_typesafe_info = get_output_typesafe_info
module.exports.get_input_typesafe_info  = get_input_typesafe_info;

