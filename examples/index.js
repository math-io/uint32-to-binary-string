'use strict';

var round = require( 'math-round' );
var binaryString = require( './../lib' );

var x;
var y;
var b;
var i;

// Generate random unsigned 32-bit integers...
x = new Uint32Array( 100 );
for ( i = 0; i < x.length; i++ ) {
	x[ i ] = round( Math.random()*1e5 );
}

// Convert unsigned 32-bit integers to literal bit representations...
for ( i = 0; i < x.length; i++ ) {
	b = binaryString( x[i] );
	y = parseInt( b, 2 );
	console.log( 'x: %d, b: %s, y: %d', x[i], b, y );
}
