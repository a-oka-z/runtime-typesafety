

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
  const safe_fn = typesafe_function(fn, {
    tags : 'hello',
  });

describe('test', ()=>{
  it( 'test1' , ()=>{
    assert.doesNotThrow(()=>{
      console.error( safe_fn({foo:100,bar:200}).value.foo.bar.baz.value );
    });
  });

  it( 'test2' , ()=>{
    assert.throws(()=>{
      try {
      console.error( safe_fn({foo:100        }).value.foo.bar.baz.value );
      } catch ( e ) {
        console.error('expected error', e);
        throw e;
      }
    });
  });

  it( 'test3' , ()=>{
    assert.equal( safe_fn({foo:100,bar:200}).value.foo.bar.baz.value, 100 );
  });


  it( 'get_typesafe_tags_test_01' , ()=>{
    const fn = function fn() {
    }

    const safe_fn = typesafe_function(fn, {
      tags : 'foo',
    },{
      tags : 'bar',
    });

    assert.deepEqual( unprevent( get_typesafe_tags( safe_fn )), [ 'foo' ,'bar' ] );
  });


  it( 'get_typesafe_tags_test_02' , ()=>{
    const fn = function fn() {
    }

    const safe_fn = typesafe_function(fn, {
      tags : 'foo',
    },{
      tags : 'bar',
    });

    set_typesafe_tags( safe_fn , 'FOO' );

    assert.deepEqual( unprevent( get_typesafe_tags( safe_fn )), [ 'FOO'  ] );
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

});

