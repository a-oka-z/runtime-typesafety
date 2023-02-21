
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
`typesafe_function()` protects your functions from `undefined` values at
**runtime** and offers information to diagnosis where these extraterrestrial
`undefined` values come from.

See [prevent-undefined][] for further information about `preventUndefined()`
function which is a roubust system to protect your code from accidentally
accessing undefined values via incorrect field names.

Note that the named arguments are processed by [fold-args][] so that an earlier
argument will be overridden by the latter arguments; for further information,
see [fold-args][].

[prevent-undefined]: https://www.npmjs.com/package/prevent-undefined
[fold-args]: https://www.npmjs.com/package/fold-args


 Callbacks
--------------------------------------------------------------------------------

There are currently five callback functions which enable processes outside the
protected function to receive various events which `runtime-typesafe` notifies.

  - `on_enter`
  - `on_leave`
  - `on_leave_with_error`
  - `on_input_error`
  - `on_output_error`

```javascript
function on_callback( named_arguments : t_callback_arguments );

t_callback_arguments : object(
  fn              : function(), // the protected function
  fn_name         : string(),   // the name of the original function
  typesafe_input  : function(), // the input validator
  typesafe_output : function(), // the output validator
);

t_callback_arguments_on_enter : and(
  t_callback_arguments(),
  object(
    args : array_of( any() ), // the arguments which are passed when
                              // the protected function is called.
  ),
);

t_callback_arguments_on_leave : and(
  t_callback_arguments(),
  object(
    result : any(), // the result value when the protected function exits
                    // from a calling session.
  ),
);
```

[//]: # (Fri, 10 Feb 2023 16:12:39 +0900)


 History
--------------------------------------------------------------------------------
#### v1.0.0 ####
(Tue, 10 Jan 2023 13:35:00 +0900)
Released.

#### v1.0.1 ####
(Tue, 10 Jan 2023 14:17:43 +0900)
Updated `README.md` and the description in `package.js`.

#### v1.0.2 ####
(Wed, 11 Jan 2023 10:50:48 +0900)
Updated `README.md` to correct a grammatical error.

#### v1.0.3 ####
(Fri, 20 Jan 2023 16:06:02 +0900)
added `set_typesafe_tags()` function.

#### v3.0.0 ####
(Tue, 21 Feb 2023 17:21:30 +0900)
Updated the major version to 3; version 3 depends on prevent-undefined@3.0.0 or
later and vanilla-schema-validator@3.0.0 or later.


 Conclusion
--------------------------------------------------------------------------------
Thank you very much for your attention.

[Atsushi Oka][] / I'm from Tokyo. For further information, see my github account.

[Github Repository of `runtime-typesafety`][Github]

[Github]: https://github.com/apupu-framework/runtime-typesafety
[Atsushi Oka]: https://github.com/apupu-framework/

