import { fold_args } from "fold-args"
import  util  from "node:util"

console.error(  util .inspect( {
  foo : {
    bar : {
      baz : {
      },
    },
  },
}));


console.error( 'fold_args', fold_args );
