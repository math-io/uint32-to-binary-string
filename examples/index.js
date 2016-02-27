'use strict';

var round = require( 'math-round' );
var bits = require( './../lib' );

var x;
var y;
var b;
var i;

// Convert random nonnegative integers to literal bit representations...
for ( i = 0; i < 100; i++ ) {
	x = round( Math.random()*1e5 );
	b = bits( x );
	y = parseInt( b, 2 );
	console.log( 'x: %d, b: %s, y: %d', x, b, y );
}
