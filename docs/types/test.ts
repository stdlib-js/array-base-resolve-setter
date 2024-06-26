/*
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

import AccessorArray = require( '@stdlib/array-base-accessor' );
import Complex128Array = require( '@stdlib/array-complex128' );
import Complex64Array = require( '@stdlib/array-complex64' );
import Complex128 = require( '@stdlib/complex-float64-ctor' );
import Complex64 = require( '@stdlib/complex-float32-ctor' );
import resolveSetter = require( './index' );


// TESTS //

// The function returns a function...
{
	resolveSetter( new Float64Array( 0 ) ); // $ExpectType SetFloat64
	resolveSetter( new Float32Array( 0 ) ); // $ExpectType SetFloat32
	resolveSetter( new Int32Array( 0 ) ); // $ExpectType SetInt32
	resolveSetter( new Int16Array( 0 ) ); // $ExpectType SetInt16
	resolveSetter( new Int8Array( 0 ) ); // $ExpectType SetInt8
	resolveSetter( new Uint32Array( 0 ) ); // $ExpectType SetUint32
	resolveSetter( new Uint16Array( 0 ) ); // $ExpectType SetUint16
	resolveSetter( new Uint8Array( 0 ) ); // $ExpectType SetUint8
	resolveSetter( new Uint8ClampedArray( 0 ) ); // $ExpectType SetUint8c
	resolveSetter( new Complex128Array( 0 ) ); // $ExpectType SetComplex128
	resolveSetter( new Complex64Array( 0 ) ); // $ExpectType SetComplex64
	resolveSetter( new AccessorArray( [ 1, 2, 3 ] ) ); // $ExpectType SetAccessorArrayLike<number>
	resolveSetter<any>( [] ); // $ExpectType SetGeneric<any>
	resolveSetter<number>( [] ); // $ExpectType SetGeneric<number>
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object...
{
	resolveSetter( 5 ); // $ExpectError
	resolveSetter( true ); // $ExpectError
	resolveSetter( false ); // $ExpectError
	resolveSetter( null ); // $ExpectError
	resolveSetter( {} ); // $ExpectError
	resolveSetter( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	resolveSetter(); // $ExpectError
	resolveSetter( [ 1, 2, 3 ], {} ); // $ExpectError
}

// The function returns a function which sets an array element...
{
	const x1 = [ 1, 2, 3, 4 ];
	const set1 = resolveSetter<number>( x1 );
	set1( x1, 2, 10 ); // $ExpectType void

	const x2 = new Float64Array( [ 1, 2, 3, 4 ] );
	const set2 = resolveSetter( x2 );
	set2( x2, 2, 10 ); // $ExpectType void

	const x3 = new Float32Array( [ 1, 2, 3, 4 ] );
	const set3 = resolveSetter( x3 );
	set3( x3, 2, 10 ); // $ExpectType void

	const x4 = new Int32Array( [ 1, 2, 3, 4 ] );
	const set4 = resolveSetter( x4 );
	set4( x4, 2, 10 ); // $ExpectType void

	const x5 = new Int16Array( [ 1, 2, 3, 4 ] );
	const set5 = resolveSetter( x5 );
	set5( x5, 2, 10 ); // $ExpectType void

	const x6 = new Int8Array( [ 1, 2, 3, 4 ] );
	const set6 = resolveSetter( x6 );
	set6( x6, 2, 10 ); // $ExpectType void

	const x7 = new Uint32Array( [ 1, 2, 3, 4 ] );
	const set7 = resolveSetter( x7 );
	set7( x7, 2, 10 ); // $ExpectType void

	const x8 = new Uint16Array( [ 1, 2, 3, 4 ] );
	const set8 = resolveSetter( x8 );
	set8( x8, 2, 10 ); // $ExpectType void

	const x9 = new Uint8Array( [ 1, 2, 3, 4 ] );
	const set9 = resolveSetter( x9 );
	set9( x9, 2, 10 ); // $ExpectType void

	const x10 = new Uint8ClampedArray( [ 1, 2, 3, 4 ] );
	const set10 = resolveSetter( x10 );
	set10( x10, 2, 10 ); // $ExpectType void

	const x11 = new Complex128Array( [ 1, 2, 3, 4 ] );
	const set11 = resolveSetter( x11 );
	set11( x11, 0, new Complex128( 5, 6 ) ); // $ExpectType void

	const x12 = new Complex64Array( [ 1, 2, 3, 4 ] );
	const set12 = resolveSetter( x12 );
	set12( x12, 0, new Complex64( 5, 6 ) ); // $ExpectType void

	const x13 = new AccessorArray( [ 1, 2, 3, 4 ] );
	const set13 = resolveSetter( x13 );
	set13( x13, 2, 10 ); // $ExpectType void
}

// The compiler throws an error if the returned function is provided a first argument which is not a collection...
{
	const set1 = resolveSetter( [ 1, 2, 3, 4 ] );
	set1( 5, 2, 10 ); // $ExpectError
	set1( true, 2, 10 ); // $ExpectError
	set1( false, 2, 10 ); // $ExpectError
	set1( null, 2, 10 ); // $ExpectError
	set1( {}, 2, 10 ); // $ExpectError

	const set2 = resolveSetter( new Float64Array( 0 ) );
	set2( 5, 2, 10 ); // $ExpectError
	set2( true, 2, 10 ); // $ExpectError
	set2( false, 2, 10 ); // $ExpectError
	set2( null, 2, 10 ); // $ExpectError
	set2( {}, 2, 10 ); // $ExpectError

	const set3 = resolveSetter( new Float32Array( 0 ) );
	set3( 5, 2, 10 ); // $ExpectError
	set3( true, 2, 10 ); // $ExpectError
	set3( false, 2, 10 ); // $ExpectError
	set3( null, 2, 10 ); // $ExpectError
	set3( {}, 2, 10 ); // $ExpectError

	const set4 = resolveSetter( new Int32Array( 0 ) );
	set4( 5, 2, 10 ); // $ExpectError
	set4( true, 2, 10 ); // $ExpectError
	set4( false, 2, 10 ); // $ExpectError
	set4( null, 2, 10 ); // $ExpectError
	set4( {}, 2, 10 ); // $ExpectError

	const set5 = resolveSetter( new Int16Array( 0 ) );
	set5( 5, 2, 10 ); // $ExpectError
	set5( true, 2, 10 ); // $ExpectError
	set5( false, 2, 10 ); // $ExpectError
	set5( null, 2, 10 ); // $ExpectError
	set5( {}, 2, 10 ); // $ExpectError

	const set6 = resolveSetter( new Int8Array( 0 ) );
	set6( 5, 2, 10 ); // $ExpectError
	set6( true, 2, 10 ); // $ExpectError
	set6( false, 2, 10 ); // $ExpectError
	set6( null, 2, 10 ); // $ExpectError
	set6( {}, 2, 10 ); // $ExpectError

	const set7 = resolveSetter( new Uint32Array( 0 ) );
	set7( 5, 2, 10 ); // $ExpectError
	set7( true, 2, 10 ); // $ExpectError
	set7( false, 2, 10 ); // $ExpectError
	set7( null, 2, 10 ); // $ExpectError
	set7( {}, 2, 10 ); // $ExpectError

	const set8 = resolveSetter( new Uint16Array( 0 ) );
	set8( 5, 2, 10 ); // $ExpectError
	set8( true, 2, 10 ); // $ExpectError
	set8( false, 2, 10 ); // $ExpectError
	set8( null, 2, 10 ); // $ExpectError
	set8( {}, 2, 10 ); // $ExpectError

	const set9 = resolveSetter( new Uint8Array( 0 ) );
	set9( 5, 2, 10 ); // $ExpectError
	set9( true, 2, 10 ); // $ExpectError
	set9( false, 2, 10 ); // $ExpectError
	set9( null, 2, 10 ); // $ExpectError
	set9( {}, 2, 10 ); // $ExpectError

	const set10 = resolveSetter( new Uint8ClampedArray( 0 ) );
	set10( 5, 2, 10 ); // $ExpectError
	set10( true, 2, 10 ); // $ExpectError
	set10( false, 2, 10 ); // $ExpectError
	set10( null, 2, 10 ); // $ExpectError
	set10( {}, 2, 10 ); // $ExpectError

	const set11 = resolveSetter( new Complex128Array( 0 ) );
	set11( 5, 2, new Complex128( 0, 0 ) ); // $ExpectError
	set11( true, 2, new Complex128( 0, 0 ) ); // $ExpectError
	set11( false, 2, new Complex128( 0, 0 ) ); // $ExpectError
	set11( null, 2, new Complex128( 0, 0 ) ); // $ExpectError
	set11( {}, 2, new Complex128( 0, 0 ) ); // $ExpectError

	const set12 = resolveSetter( new Complex64Array( 0 ) );
	set12( 5, 2, new Complex64( 0, 0 ) ); // $ExpectError
	set12( true, 2, new Complex64( 0, 0 ) ); // $ExpectError
	set12( false, 2, new Complex64( 0, 0 ) ); // $ExpectError
	set12( null, 2, new Complex64( 0, 0 ) ); // $ExpectError
	set12( {}, 2, new Complex64( 0, 0 ) ); // $ExpectError

	const set13 = resolveSetter( new AccessorArray( [ 1, 2, 3, 4 ] ) );
	set13( 5, 2, 10 ); // $ExpectError
	set13( true, 2, 10 ); // $ExpectError
	set13( false, 2, 10 ); // $ExpectError
	set13( null, 2, 10 ); // $ExpectError
	set13( {}, 2, 10 ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a second argument which is not a number...
{
	const set1 = resolveSetter( [ 0, 1, 2, 3, 4 ] );
	set1( [ 1, 2, 3, 4 ], '5', 10 ); // $ExpectError
	set1( [ 1, 2, 3, 4 ], true, 10 ); // $ExpectError
	set1( [ 1, 2, 3, 4 ], false, 10 ); // $ExpectError
	set1( [ 1, 2, 3, 4 ], null, 10 ); // $ExpectError
	set1( [ 1, 2, 3, 4 ], {}, 10 ); // $ExpectError

	const set2 = resolveSetter( new Float64Array( 0 ) );
	set2( new Float64Array( [ 1, 2, 3, 4 ] ), '5', 10 ); // $ExpectError
	set2( new Float64Array( [ 1, 2, 3, 4 ] ), true, 10 ); // $ExpectError
	set2( new Float64Array( [ 1, 2, 3, 4 ] ), false, 10 ); // $ExpectError
	set2( new Float64Array( [ 1, 2, 3, 4 ] ), null, 10 ); // $ExpectError
	set2( new Float64Array( [ 1, 2, 3, 4 ] ), {}, 10 ); // $ExpectError

	const set3 = resolveSetter( new Float32Array( 0 ) );
	set3( new Float32Array( [ 1, 2, 3, 4 ] ), '5', 10 ); // $ExpectError
	set3( new Float32Array( [ 1, 2, 3, 4 ] ), true, 10 ); // $ExpectError
	set3( new Float32Array( [ 1, 2, 3, 4 ] ), false, 10 ); // $ExpectError
	set3( new Float32Array( [ 1, 2, 3, 4 ] ), null, 10 ); // $ExpectError
	set3( new Float32Array( [ 1, 2, 3, 4 ] ), {}, 10 ); // $ExpectError

	const set4 = resolveSetter( new Int32Array( 0 ) );
	set4( new Int32Array( [ 1, 2, 3, 4 ] ), '5', 10 ); // $ExpectError
	set4( new Int32Array( [ 1, 2, 3, 4 ] ), true, 10 ); // $ExpectError
	set4( new Int32Array( [ 1, 2, 3, 4 ] ), false, 10 ); // $ExpectError
	set4( new Int32Array( [ 1, 2, 3, 4 ] ), null, 10 ); // $ExpectError
	set4( new Int32Array( [ 1, 2, 3, 4 ] ), {}, 10 ); // $ExpectError

	const set5 = resolveSetter( new Int16Array( 0 ) );
	set5( new Int16Array( [ 1, 2, 3, 4 ] ), '5', 10 ); // $ExpectError
	set5( new Int16Array( [ 1, 2, 3, 4 ] ), true, 10 ); // $ExpectError
	set5( new Int16Array( [ 1, 2, 3, 4 ] ), false, 10 ); // $ExpectError
	set5( new Int16Array( [ 1, 2, 3, 4 ] ), null, 10 ); // $ExpectError
	set5( new Int16Array( [ 1, 2, 3, 4 ] ), {}, 10 ); // $ExpectError

	const set6 = resolveSetter( new Int8Array( 0 ) );
	set6( new Int8Array( [ 1, 2, 3, 4 ] ), '5', 10 ); // $ExpectError
	set6( new Int8Array( [ 1, 2, 3, 4 ] ), true, 10 ); // $ExpectError
	set6( new Int8Array( [ 1, 2, 3, 4 ] ), false, 10 ); // $ExpectError
	set6( new Int8Array( [ 1, 2, 3, 4 ] ), null, 10 ); // $ExpectError
	set6( new Int8Array( [ 1, 2, 3, 4 ] ), {}, 10 ); // $ExpectError

	const set7 = resolveSetter( new Uint32Array( 0 ) );
	set7( new Uint32Array( [ 1, 2, 3, 4 ] ), '5', 10 ); // $ExpectError
	set7( new Uint32Array( [ 1, 2, 3, 4 ] ), true, 10 ); // $ExpectError
	set7( new Uint32Array( [ 1, 2, 3, 4 ] ), false, 10 ); // $ExpectError
	set7( new Uint32Array( [ 1, 2, 3, 4 ] ), null, 10 ); // $ExpectError
	set7( new Uint32Array( [ 1, 2, 3, 4 ] ), {}, 10 ); // $ExpectError

	const set8 = resolveSetter( new Uint16Array( 0 ) );
	set8( new Uint16Array( [ 1, 2, 3, 4 ] ), '5', 10 ); // $ExpectError
	set8( new Uint16Array( [ 1, 2, 3, 4 ] ), true, 10 ); // $ExpectError
	set8( new Uint16Array( [ 1, 2, 3, 4 ] ), false, 10 ); // $ExpectError
	set8( new Uint16Array( [ 1, 2, 3, 4 ] ), null, 10 ); // $ExpectError
	set8( new Uint16Array( [ 1, 2, 3, 4 ] ), {}, 10 ); // $ExpectError

	const set9 = resolveSetter( new Uint8Array( 0 ) );
	set9( new Uint8Array( [ 1, 2, 3, 4 ] ), '5', 10 ); // $ExpectError
	set9( new Uint8Array( [ 1, 2, 3, 4 ] ), true, 10 ); // $ExpectError
	set9( new Uint8Array( [ 1, 2, 3, 4 ] ), false, 10 ); // $ExpectError
	set9( new Uint8Array( [ 1, 2, 3, 4 ] ), null, 10 ); // $ExpectError
	set9( new Uint8Array( [ 1, 2, 3, 4 ] ), {}, 10 ); // $ExpectError

	const set10 = resolveSetter( new Uint8ClampedArray( 0 ) );
	set10( new Uint8ClampedArray( [ 1, 2, 3, 4 ] ), '5', 10 ); // $ExpectError
	set10( new Uint8ClampedArray( [ 1, 2, 3, 4 ] ), true, 10 ); // $ExpectError
	set10( new Uint8ClampedArray( [ 1, 2, 3, 4 ] ), false, 10 ); // $ExpectError
	set10( new Uint8ClampedArray( [ 1, 2, 3, 4 ] ), null, 10 ); // $ExpectError
	set10( new Uint8ClampedArray( [ 1, 2, 3, 4 ] ), {}, 10 ); // $ExpectError

	const set11 = resolveSetter( new Complex128Array( 0 ) );
	set11( new Complex128Array( [ 1, 2, 3, 4 ] ), '5', new Complex128( 0, 0 ) ); // $ExpectError
	set11( new Complex128Array( [ 1, 2, 3, 4 ] ), true, new Complex128( 0, 0 ) ); // $ExpectError
	set11( new Complex128Array( [ 1, 2, 3, 4 ] ), false, new Complex128( 0, 0 ) ); // $ExpectError
	set11( new Complex128Array( [ 1, 2, 3, 4 ] ), null, new Complex128( 0, 0 ) ); // $ExpectError
	set11( new Complex128Array( [ 1, 2, 3, 4 ] ), {}, new Complex128( 0, 0 ) ); // $ExpectError

	const set12 = resolveSetter( new Complex64Array( 0 ) );
	set12( new Complex64Array( [ 1, 2, 3, 4 ] ), '5', new Complex64( 0, 0 ) ); // $ExpectError
	set12( new Complex64Array( [ 1, 2, 3, 4 ] ), true, new Complex64( 0, 0 ) ); // $ExpectError
	set12( new Complex64Array( [ 1, 2, 3, 4 ] ), false, new Complex64( 0, 0 ) ); // $ExpectError
	set12( new Complex64Array( [ 1, 2, 3, 4 ] ), null, new Complex64( 0, 0 ) ); // $ExpectError
	set12( new Complex64Array( [ 1, 2, 3, 4 ] ), {}, new Complex64( 0, 0 ) ); // $ExpectError

	const set13 = resolveSetter( new AccessorArray( [ 1, 2, 3, 4 ] ) );
	set13( new AccessorArray( [ 1, 2, 3, 4 ] ), '5', 10 ); // $ExpectError
	set13( new AccessorArray( [ 1, 2, 3, 4 ] ), true, 10 ); // $ExpectError
	set13( new AccessorArray( [ 1, 2, 3, 4 ] ), false, 10 ); // $ExpectError
	set13( new AccessorArray( [ 1, 2, 3, 4 ] ), null, 10 ); // $ExpectError
	set13( new AccessorArray( [ 1, 2, 3, 4 ] ), {}, 10 ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a third argument which is not a valid value...
{
	const set1 = resolveSetter( [ 0, 1, 2, 3, 4 ] );
	set1( [ 1, 2, 3, 4 ], 2, '5' ); // $ExpectError
	set1( [ 1, 2, 3, 4 ], 2, true ); // $ExpectError
	set1( [ 1, 2, 3, 4 ], 2, false ); // $ExpectError
	set1( [ 1, 2, 3, 4 ], 2, null ); // $ExpectError
	set1( [ 1, 2, 3, 4 ], 2, {} ); // $ExpectError

	const set2 = resolveSetter( new Float64Array( 0 ) );
	set2( new Float64Array( [ 1, 2, 3, 4 ] ), 2, '5' ); // $ExpectError
	set2( new Float64Array( [ 1, 2, 3, 4 ] ), 2, true ); // $ExpectError
	set2( new Float64Array( [ 1, 2, 3, 4 ] ), 2, false ); // $ExpectError
	set2( new Float64Array( [ 1, 2, 3, 4 ] ), 2, null ); // $ExpectError
	set2( new Float64Array( [ 1, 2, 3, 4 ] ), 2, {} ); // $ExpectError

	const set3 = resolveSetter( new Float32Array( 0 ) );
	set3( new Float32Array( [ 1, 2, 3, 4 ] ), 2, '5' ); // $ExpectError
	set3( new Float32Array( [ 1, 2, 3, 4 ] ), 2, true ); // $ExpectError
	set3( new Float32Array( [ 1, 2, 3, 4 ] ), 2, false ); // $ExpectError
	set3( new Float32Array( [ 1, 2, 3, 4 ] ), 2, null ); // $ExpectError
	set3( new Float32Array( [ 1, 2, 3, 4 ] ), 2, {} ); // $ExpectError

	const set4 = resolveSetter( new Int32Array( 0 ) );
	set4( new Int32Array( [ 1, 2, 3, 4 ] ), 2, '5' ); // $ExpectError
	set4( new Int32Array( [ 1, 2, 3, 4 ] ), 2, true ); // $ExpectError
	set4( new Int32Array( [ 1, 2, 3, 4 ] ), 2, false ); // $ExpectError
	set4( new Int32Array( [ 1, 2, 3, 4 ] ), 2, null ); // $ExpectError
	set4( new Int32Array( [ 1, 2, 3, 4 ] ), 2, {} ); // $ExpectError

	const set5 = resolveSetter( new Int16Array( 0 ) );
	set5( new Int16Array( [ 1, 2, 3, 4 ] ), 2, '5' ); // $ExpectError
	set5( new Int16Array( [ 1, 2, 3, 4 ] ), 2, true ); // $ExpectError
	set5( new Int16Array( [ 1, 2, 3, 4 ] ), 2, false ); // $ExpectError
	set5( new Int16Array( [ 1, 2, 3, 4 ] ), 2, null ); // $ExpectError
	set5( new Int16Array( [ 1, 2, 3, 4 ] ), 2, {} ); // $ExpectError

	const set6 = resolveSetter( new Int8Array( 0 ) );
	set6( new Int8Array( [ 1, 2, 3, 4 ] ), 2, '5' ); // $ExpectError
	set6( new Int8Array( [ 1, 2, 3, 4 ] ), 2, true ); // $ExpectError
	set6( new Int8Array( [ 1, 2, 3, 4 ] ), 2, false ); // $ExpectError
	set6( new Int8Array( [ 1, 2, 3, 4 ] ), 2, null ); // $ExpectError
	set6( new Int8Array( [ 1, 2, 3, 4 ] ), 2, {} ); // $ExpectError

	const set7 = resolveSetter( new Uint32Array( 0 ) );
	set7( new Uint32Array( [ 1, 2, 3, 4 ] ), 2, '5' ); // $ExpectError
	set7( new Uint32Array( [ 1, 2, 3, 4 ] ), 2, true ); // $ExpectError
	set7( new Uint32Array( [ 1, 2, 3, 4 ] ), 2, false ); // $ExpectError
	set7( new Uint32Array( [ 1, 2, 3, 4 ] ), 2, null ); // $ExpectError
	set7( new Uint32Array( [ 1, 2, 3, 4 ] ), 2, {} ); // $ExpectError

	const set8 = resolveSetter( new Uint16Array( 0 ) );
	set8( new Uint16Array( [ 1, 2, 3, 4 ] ), 2, '5' ); // $ExpectError
	set8( new Uint16Array( [ 1, 2, 3, 4 ] ), 2, true ); // $ExpectError
	set8( new Uint16Array( [ 1, 2, 3, 4 ] ), 2, false ); // $ExpectError
	set8( new Uint16Array( [ 1, 2, 3, 4 ] ), 2, null ); // $ExpectError
	set8( new Uint16Array( [ 1, 2, 3, 4 ] ), 2, {} ); // $ExpectError

	const set9 = resolveSetter( new Uint8Array( 0 ) );
	set9( new Uint8Array( [ 1, 2, 3, 4 ] ), 2, '5' ); // $ExpectError
	set9( new Uint8Array( [ 1, 2, 3, 4 ] ), 2, true ); // $ExpectError
	set9( new Uint8Array( [ 1, 2, 3, 4 ] ), 2, false ); // $ExpectError
	set9( new Uint8Array( [ 1, 2, 3, 4 ] ), 2, null ); // $ExpectError
	set9( new Uint8Array( [ 1, 2, 3, 4 ] ), 2, {} ); // $ExpectError

	const set10 = resolveSetter( new Uint8ClampedArray( 0 ) );
	set10( new Uint8ClampedArray( [ 1, 2, 3, 4 ] ), 2, '5' ); // $ExpectError
	set10( new Uint8ClampedArray( [ 1, 2, 3, 4 ] ), 2, true ); // $ExpectError
	set10( new Uint8ClampedArray( [ 1, 2, 3, 4 ] ), 2, false ); // $ExpectError
	set10( new Uint8ClampedArray( [ 1, 2, 3, 4 ] ), 2, null ); // $ExpectError
	set10( new Uint8ClampedArray( [ 1, 2, 3, 4 ] ), 2, {} ); // $ExpectError

	const set11 = resolveSetter( new Complex128Array( 0 ) );
	set11( new Complex128Array( [ 1, 2, 3, 4 ] ), 2, '5' ); // $ExpectError
	set11( new Complex128Array( [ 1, 2, 3, 4 ] ), 2, true ); // $ExpectError
	set11( new Complex128Array( [ 1, 2, 3, 4 ] ), 2, false ); // $ExpectError
	set11( new Complex128Array( [ 1, 2, 3, 4 ] ), 2, null ); // $ExpectError
	set11( new Complex128Array( [ 1, 2, 3, 4 ] ), 2, {} ); // $ExpectError

	const set12 = resolveSetter( new Complex64Array( 0 ) );
	set12( new Complex64Array( [ 1, 2, 3, 4 ] ), 2, '5' ); // $ExpectError
	set12( new Complex64Array( [ 1, 2, 3, 4 ] ), 2, true ); // $ExpectError
	set12( new Complex64Array( [ 1, 2, 3, 4 ] ), 2, false ); // $ExpectError
	set12( new Complex64Array( [ 1, 2, 3, 4 ] ), 2, null ); // $ExpectError
	set12( new Complex64Array( [ 1, 2, 3, 4 ] ), 2, {} ); // $ExpectError

	const set13 = resolveSetter( new AccessorArray( [ 1, 2, 3, 4 ] ) );
	set13( new AccessorArray( [ 1, 2, 3, 4 ] ), 2, '5' ); // $ExpectError
	set13( new AccessorArray( [ 1, 2, 3, 4 ] ), 2, true ); // $ExpectError
	set13( new AccessorArray( [ 1, 2, 3, 4 ] ), 2, false ); // $ExpectError
	set13( new AccessorArray( [ 1, 2, 3, 4 ] ), 2, null ); // $ExpectError
	set13( new AccessorArray( [ 1, 2, 3, 4 ] ), 2, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is provided an unsupported number of arguments...
{
	const set1 = resolveSetter( [] );
	set1(); // $ExpectError
	set1( [] ); // $ExpectError
	set1( [], 1, 2, 10 ); // $ExpectError

	const set2 = resolveSetter( new Float64Array( 0 ) );
	set2(); // $ExpectError
	set2( new Float64Array( [] ) ); // $ExpectError
	set2( new Float64Array( [] ), 1, 2, 10 ); // $ExpectError

	const set3 = resolveSetter( new Float32Array( 0 ) );
	set3(); // $ExpectError
	set3( new Float32Array( [] ) ); // $ExpectError
	set3( new Float32Array( [] ), 1, 2, 10 ); // $ExpectError

	const set4 = resolveSetter( new Int32Array( 0 ) );
	set4(); // $ExpectError
	set4( new Int32Array( [] ) ); // $ExpectError
	set4( new Int32Array( [] ), 1, 2, 10 ); // $ExpectError

	const set5 = resolveSetter( new Int16Array( 0 ) );
	set5(); // $ExpectError
	set5( new Int16Array( [] ) ); // $ExpectError
	set5( new Int16Array( [] ), 1, 2, 10 ); // $ExpectError

	const set6 = resolveSetter( new Int8Array( 0 ) );
	set6(); // $ExpectError
	set6( new Int8Array( [] ) ); // $ExpectError
	set6( new Int8Array( [] ), 1, 2, 10 ); // $ExpectError

	const set7 = resolveSetter( new Uint32Array( 0 ) );
	set7(); // $ExpectError
	set7( new Uint32Array( [] ) ); // $ExpectError
	set7( new Uint32Array( [] ), 1, 2, 10 ); // $ExpectError

	const set8 = resolveSetter( new Uint16Array( 0 ) );
	set8(); // $ExpectError
	set8( new Uint16Array( [] ) ); // $ExpectError
	set8( new Uint16Array( [] ), 1, 2, 10 ); // $ExpectError

	const set9 = resolveSetter( new Uint8Array( 0 ) );
	set9(); // $ExpectError
	set9( new Uint8Array( [] ) ); // $ExpectError
	set9( new Uint8Array( [] ), 1, 2, 10 ); // $ExpectError

	const set10 = resolveSetter( new Uint8ClampedArray( 0 ) );
	set10(); // $ExpectError
	set10( new Uint8ClampedArray( [] ) ); // $ExpectError
	set10( new Uint8ClampedArray( [] ), 1, 2, 10 ); // $ExpectError

	const set11 = resolveSetter( new Complex128Array( 0 ) );
	set11(); // $ExpectError
	set11( new Complex128Array( 0 ) ); // $ExpectError
	set11( new Complex128Array( 0 ), 1, new Complex128( 0, 0 ), 10 ); // $ExpectError

	const set12 = resolveSetter( new Complex64Array( 0 ) );
	set12(); // $ExpectError
	set12( new Complex64Array( 0 ) ); // $ExpectError
	set12( new Complex64Array( 0 ), 1, new Complex64( 0, 0 ), 10 ); // $ExpectError

	const set13 = resolveSetter( new AccessorArray( [ 1, 2, 3, 4 ] ) );
	set13(); // $ExpectError
	set13( new AccessorArray( [ 1, 2, 3, 4 ] ) ); // $ExpectError
	set13( new AccessorArray( [ 1, 2, 3, 4 ] ), 1, 2, 10 ); // $ExpectError
}
