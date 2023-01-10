

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
  const pfn = typesafe_function(fn);

test( 'test1' , ()=>{
  expect(()=>{
    console.error( pfn({foo:100,bar:200}).value.foo.bar.baz.value );
  }).not.toThrow();
});

test( 'test2' , ()=>{
  expect(()=>{
    console.error( pfn({foo:100        }).value.foo.bar.baz.value );
  }).toThrow();
});

test( 'test3' , ()=>{
  expect( pfn({foo:100,bar:200}).value.foo.bar.baz.value  ).toBe( 100 );
});

