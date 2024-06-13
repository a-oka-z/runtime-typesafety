'use strict';

import  { schema } from 'vanilla-schema-validator';
import  { typesafe_function, no_typesafe_function, get_typesafe_tags, set_typesafe_tags, get_output_typesafe_info, get_input_typesafe_info } from './index.mjs' ;
import  { preventUndefined, unprevent } from 'prevent-undefined' ;
import assert from 'node:assert/strict';
import { test, describe, it, before, after } from 'node:test';
import { Console } from 'node:console';

globalThis.console = new Console({ stdout: process.stderr, stderr: process.stderr });



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

    it( 'as test output value protection (a correct argument; does not throw) (synchronous)' , async ()=>{
      assert.doesNotThrow(()=>{
        console.error( safe_fn({foo:100,bar:200}).value.foo.bar.baz.value );
      });
    }),

    it( 'as test output value protection (an incorrect argument;does not throw ) (synchronous)' , async ()=>{
      // << BREAKING CHANGE ON (Thu, 13 Jun 2024 17:10:11 +0900)
      // assert.throws
      assert.doesNotThrow
      // >> BREAKING CHANGE ON (Thu, 13 Jun 2024 17:10:11 +0900)
      (()=>{
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
      await assert.doesNotReject(async ()=>{
        console.error( (await async_safe_fn({foo:100,bar:200})).value.foo.bar.baz.value );
      });
    }),

    it( 'as test output value protection (okay) (asynchronous)' ,async  ()=>{
      // << BREAKING CHANGE ON (Thu, 13 Jun 2024 17:10:11 +0900)
      // await assert.rejects
      await assert.doesNotReject
      // >> BREAKING CHANGE ON (Thu, 13 Jun 2024 17:10:11 +0900)
      (async ()=>{
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



// ADDED (Wed, 24 May 2023 11:09:24 +0900)
describe( 'standard test 1', {}, ()=>{
  it( 'as 1', ()=>{
    const f=  typesafe_function(
      function foo( foo, bar ) {
        return foo+bar;
      },
      {
        typesafe_input : schema.compile`
          array(
            number(),
            number(),
          )
        `,
        typesafe_output : schema.compile`
          number()
        `,
      }
    );
    assert.equal( f(10,20), 30 );
  });
  it( 'as 2', ()=>{
    const f=  typesafe_function(
      function foo( foo, bar ) {
        return foo+bar;
      },
      {
        typesafe_input : schema.compile`
          array(
            number(),
            number(),
          )
        `,
        typesafe_output : schema.compile`
          number()
        `,
      }
    );
    assert.throws(()=>{
      try {
        f(10,20,30);
      } catch ( e ){
        console.log(e);
        throw e;
      }
    });
  });

});


