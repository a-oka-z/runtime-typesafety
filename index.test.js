

  function fn({foo,bar}) {
    return {
      value : {
        foo: {
          bar : {
            baz : {
              value : 100,
            },
          },
        },
      },
    };
  }

test( 'test' , ()=>{
  const f = typesafe_function(fn);
  console.error( f({foo:100}).foo.bar.baz.value );
});
