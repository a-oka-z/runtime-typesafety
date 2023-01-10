
 `runtime-typesafety`
================================================================================

 Synopsys
--------------------------------------------------------------------------------

``` javascript
function typesafe_function({
  fn                  , // Your function to protect.
  typesafe_input      , // The validator for the input parameters.
  typesafe_output     , // The validator for the output parameters.
  tags                , // Tags you wish to set; see below.
  property            , // The property descriptor to set on the protected func.
  on_enter            , // The callback to be called when `fn` is called.
  on_leave            , // The callback to be called when `fn` exitted.
  on_leave_with_error , // The callback to be called when `fn` exitted with an error.
  on_input_error      , // The callback to be called when the input validation failed.
  on_output_error     , // The callback to be called when the ouput validation failed.
  unprotected_input   , // If true, `preventUndefined()` is not applied to input arguments.
  unprotected_output  , // If true, `preventUndefined()` is not applied to output arguments.
}) {
}
```
`typesafe_function()` protects your function from `undefined` values at
**runtime** and offers information to diagnosis where these extraterrestrial
`undefined` values comes from.

See [prevent-undefined][] for further information about `preventUndefined()`
which is a roubust system to protect your programs from accidentally accessing
to an undefined values by incorrect field names.

Note that the named arguments are processed by [fold-args][] so that an earlier
argument will be overridden by the latter arguments; for further information,
see [fold-args][].

[prevent-undefined]: https://www.npmjs.com/package/prevent-undefined
[fold-args]: https://www.npmjs.com/package/fold-args

 History
--------------------------------------------------------------------------------
#### v1.0.0 ####
(Tue, 10 Jan 2023 13:35:00 +0900)
Released.


 Conclusion
--------------------------------------------------------------------------------
Thank you very much for your attention.

[Atsushi Oka][] / I'm from Tokyo. For further information, see my github account.

[Github Repository of `runtime-typesafety`](Github)

[Github]: https://github.com/a-oka-z/runtime-typesafety
[Atsushi Oka]: https://github.com/a-oka-z/

