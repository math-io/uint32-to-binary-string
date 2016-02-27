'use strict';

// MODULES //

var tape = require( 'tape' );
var MAX_UINT32 = require( 'const-max-uint32' );
var bits = require( './../lib' );


// FIXTURES //

var small = require( './fixtures/small.json' );
var medium = require( './fixtures/medium.json' );
var large = require( './fixtures/large.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.equal( typeof bits, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a literal 32-bit unsigned integer representation for 0', function test( t ) {
	var expected;

	expected = '00000000000000000000000000000000';

	t.equal( bits(0), expected, 'returns bit literal for 0' );
	t.end();
});

tape( 'the function returns a literal 32-bit unsigned integer representation for MAX_UINT32', function test( t ) {
	var expected;

	expected = '11111111111111111111111111111111';

	t.equal( bits(MAX_UINT32), expected, 'returns bit literal for MAX_UINT32' );
	t.end();
});

tape( 'the function returns literal bit representations for unsigned 32-bit integers (small)', function test( t ) {
	var expected;
	var str;
	var x;
	var i;

	x = small.x;
	expected = small.expected;
	for ( i = 0; i < x.length; i++ ) {
		str = bits( x[ i ] );
		t.equal( str, expected[ i ], 'returns bit literal for ' + x[ i ] );
	}
	t.end();
});

tape( 'the function returns literal bit representations for unsigned 32-bit integers (medium)', function test( t ) {
	var expected;
	var str;
	var x;
	var i;

	x = medium.x;
	expected = medium.expected;
	for ( i = 0; i < x.length; i++ ) {
		str = bits( x[ i ] );
		t.equal( str, expected[ i ], 'returns bit literal for ' + x[ i ] );
	}
	t.end();
});

tape( 'the function returns literal bit representations for unsigned 32-bit integers (large)', function test( t ) {
	var expected;
	var str;
	var x;
	var i;

	x = large.x;
	expected = large.expected;
	for ( i = 0; i < x.length; i++ ) {
		str = bits( x[ i ] );
		t.equal( str, expected[ i ], 'returns bit literal for ' + x[ i ] );
	}
	t.end();
});

tape( 'the function will accept floating-point values, but will interpret the values as unsigned 32-bit integers', function test( t ) {
	var values;
	var str;
	var i;

	values = [
		1e308,
		3.14,
		1/3,
		1/10,
		-0,
		-1e-308,
		-1e308,
		1/0,
		1/-0,
		NaN
	];

	for ( i = 0; i < values.length; i++ ) {
		str = bits( values[i] );
		t.equal( typeof str, 'string', 'returns a string' );
		t.equal( str.length, 32, 'returns a string of length 32' );
	}
	t.end();
});
