

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
  const pfn = typesafe_function(fn, {
    tags : 'hello',
  });

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


test( 'get_typesafe_tags_test_01' , ()=>{
  const fn = function fn() {
  }

  const pfn = typesafe_function(fn, {
    tags : 'foo',
  },{
    tags : 'bar',
  });

  expect( unprevent( get_typesafe_tags( pfn )) ).toEqual( [ 'foo' ,'bar' ] );
});


test( 'get_typesafe_tags_test_02' , ()=>{
  const fn = function fn() {
  }

  const pfn = typesafe_function(fn, {
    tags : 'foo',
  },{
    tags : 'bar',
  });

  set_typesafe_tags( pfn , 'FOO' );

  expect( unprevent( get_typesafe_tags( pfn )) ).toEqual( [ 'FOO'  ] );
});

