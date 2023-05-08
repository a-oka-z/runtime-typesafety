

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

  async function async_fn(...args) {
    return fn(...args);
  }
  const safe_fn = typesafe_function(fn, {
    tags : 'hello',
  });

  const async_safe_fn = typesafe_function(async_fn, {
    tags : 'hello',
  });


describe( 'test 1', {concurrency:2}, async ()=>{
  await Promise.all([

    ////

    it( 'as test output value protection (throws) (synchronous)' , async ()=>{
      assert.doesNotThrow(()=>{
        console.error( safe_fn({foo:100,bar:200}).value.foo.bar.baz.value );
      });
    }),

    it( 'as test output value protection (okay) (synchronous)' , async ()=>{
      assert.throws(()=>{
        try {
          console.error( safe_fn({foo:100        }).value.foo.bar.baz.value );
        } catch ( e ) {
          console.error('expected error', e);
          throw e;
        }
      });
    }),

    it( 'as test output value correctness (synchronous)' , async ()=>{
      assert.equal( safe_fn({foo:100,bar:200}).value.foo.bar.baz.value, 100 );
    }),

    ////

    it( 'as test output value protection (throws) (asynchronous)' ,async  ()=>{
      assert.doesNotReject(async ()=>{
        console.error( (await async_safe_fn({foo:100,bar:200})).value.foo.bar.baz.value );
      });
    }),

    it( 'as test output value protection (okay) (asynchronous)' ,async  ()=>{
      assert.rejects(async ()=>{
        try {
          console.error( (await async_safe_fn({foo:100        })).value.foo.bar.baz.value );
        } catch ( e ) {
          console.error('expected error', e);
          throw e;
        }
      });
    }),

    it( 'as test output value correctness (asynchronous)' , async ()=>{
      assert.equal((await async_safe_fn({foo:100,bar:200})).value.foo.bar.baz.value, 100 );
    }),

    ////

    it( 'get_typesafe_tags_test_01' , async ()=>{
      const fn = function fn() {
      }

      const safe_fn = typesafe_function(fn, {
        tags : 'foo',
      },{
        tags : 'bar',
      });

      assert.deepEqual( unprevent( get_typesafe_tags( safe_fn )), [ 'foo' ,'bar' ] );
    }),


    it( 'get_typesafe_tags_test_02' , async ()=>{
      const fn = function fn() {
      }

      const safe_fn = typesafe_function(fn, {
        tags : 'foo',
      },{
        tags : 'bar',
      });

      set_typesafe_tags( safe_fn , 'FOO' );

      assert.deepEqual( unprevent( get_typesafe_tags( safe_fn )), [ 'FOO'  ] );
    }),
  ]);
});


describe( 'edit_error' , ()=>{
  it( 'as first', ()=>{
    const fn = function fn() {
      throw new Error( 'hello' );
    }

    const safe_fn = typesafe_function(fn, {
      tags : 'foo',
    },{
      tags : 'bar',
    });

    assert.throws(()=>{
      try {
        safe_fn();
      } catch(e){
        console.error('expected error',e);
        throw e;
      }
    });

  });
});
