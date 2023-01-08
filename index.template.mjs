params: body
'use strict';

import { preventUndefined, unprevent  } from 'prevent-undefined' ;
import { fold_args, the_last, the_all } from 'fold-args' ;
import { schema                       } from 'vanilla-schema-validator' ;
import  util                            from 'node:util';
const UTIL_INSPECT_CUSTOM = util.custom;

//function inspect(s) {
//  return JSON.stringify( s, (k,v)=>typeof v === 'function' ? v.toString() : v, 2 );
//}




<%=body%>

export {
  typesafe_function,
  no_typesafe_function,
  get_typesafe_tags,
  get_output_typesafe_info,
  get_input_typesafe_info,
};

