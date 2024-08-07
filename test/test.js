/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var filled = require( '@stdlib/array-filled' );
var accessorArray = require( '@stdlib/array-base-accessor' );
var Complex128Array = require( '@stdlib/array-complex128' );
var Complex64Array = require( '@stdlib/array-complex64' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var Complex64 = require( '@stdlib/complex-float32-ctor' );
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );
var realf = require( '@stdlib/complex-float32-real' );
var imagf = require( '@stdlib/complex-float32-imag' );
var dtypes = require( '@stdlib/array-dtypes' );
var resolveGetter = require( '@stdlib/array-base-resolve-getter' );
var resolveSetter = require( './../lib' );


// VARIABLES //

var DTYPES = dtypes( 'real_and_generic' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof resolveSetter, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a function for setting an array element (indexed)', function test( t ) {
	var arr;
	var get;
	var set;
	var dt;
	var v;
	var i;

	for ( i = 0; i < DTYPES.length; i++ ) {
		dt = DTYPES[ i ];
		arr = filled( i+1, 10, dt );

		set = resolveSetter( arr );
		set( arr, 2, i+100 );

		get = resolveGetter( arr );
		v = get( arr, 2 );

		t.strictEqual( v, i+100, 'returns expected value for dtype: '+dt );
	}
	t.end();
});

tape( 'the function returns a function for setting an array element (accessor)', function test( t ) {
	var arr;
	var get;
	var set;
	var v;

	arr = new Complex128Array( 10 );

	set = resolveSetter( arr );
	set( arr, 2, new Complex128( 4.0, 5.0 ) );

	get = resolveGetter( arr );
	v = get( arr, 2 );

	t.strictEqual( real( v ), 4.0, 'returns expected value' );
	t.strictEqual( imag( v ), 5.0, 'returns expected value' );

	arr = new Complex64Array( 10 );

	set = resolveSetter( arr );
	set( arr, 2, new Complex64( 4.0, 5.0 ) );

	get = resolveGetter( arr );
	v = get( arr, 2 );

	t.strictEqual( realf( v ), 4.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 5.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function for setting an array element (indexed; unrecognized dtype)', function test( t ) {
	var arr;
	var get;
	var set;
	var v;

	arr = filled( 2, 10, 'generic' );

	set = resolveSetter( 'beep boop' );
	set( arr, 2, 10 );

	get = resolveGetter( arr );
	v = get( arr, 2 );

	t.strictEqual( v, 10, 'returns expected value' );
	t.end();
});

tape( 'the function returns a function for setting an array element (accessor; unrecognized dtype)', function test( t ) {
	var arr;
	var get;
	var set;
	var v;

	arr = accessorArray( [ 1, 2, 3, 4 ] );

	set = resolveSetter( arr );
	set( arr, 2, 10 );

	get = resolveGetter( arr );
	v = get( arr, 2 );

	t.strictEqual( v, 10, 'returns expected value' );
	t.end();
});

tape( 'the returned function does not perform bounds checks (indexed)', function test( t ) {
	var arr;
	var get;
	var set;
	var v;
	var i;

	arr = [ 1, 2, 3, 4 ];
	i = arr.length + 10;

	set = resolveSetter( arr );
	set( arr, i, 10 );

	get = resolveGetter( arr );
	v = get( arr, i );

	t.strictEqual( v, 10, 'returns expected value' );
	t.end();
});

tape( 'the returned function does not perform bounds checks (accessor)', function test( t ) {
	var arr;
	var get;
	var set;
	var v;
	var i;

	arr = accessorArray( [ 1, 2, 3, 4 ] );
	i = arr.length + 10;

	set = resolveSetter( arr );
	set( arr, i, 10 );

	get = resolveGetter( arr );
	v = get( arr, i );

	t.strictEqual( v, 10, 'returns expected value' );
	t.end();
});

tape( 'the returned function does not perform bounds checks (indexed; unrecognized dtype)', function test( t ) {
	var arr;
	var get;
	var set;
	var v;
	var i;

	arr = filled( 2, 10, 'generic' );
	i = arr.length + 10;

	set = resolveSetter( 'beep boop' );
	set( arr, i, 10 );

	get = resolveGetter( arr );
	v = get( arr, i );

	t.strictEqual( v, 10, 'returns expected value' );
	t.end();
});

tape( 'the returned function does not perform bounds checks (accessor; unrecognized dtype)', function test( t ) {
	var arr;
	var get;
	var set;
	var v;
	var i;

	arr = accessorArray( [] );
	i = arr.length + 10;

	set = resolveSetter( arr );
	set( arr, i, 10 );

	get = resolveGetter( arr );
	v = get( arr, i );

	t.strictEqual( v, 10, 'returns expected value' );
	t.end();
});
