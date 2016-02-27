'use strict';

// MODULES //

var tape = require( 'tape' );
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
