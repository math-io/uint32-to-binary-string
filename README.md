Binary String
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> Returns a string giving the literal bit representation of an [unsigned 32-bit integer][integer].


## Installation

``` bash
$ npm install math-uint32-binary-string
```


## Usage

``` javascript
var binaryString = require( 'math-uint32-binary-string' );
```

#### binaryString( x )

Returns a `string` giving the literal bit representation of an [unsigned 32-bit integer][integer].

``` javascript
var a = new Uint32Array( [ 1, 4, 9 ] );

var str = binaryString( a[0] );
// returns '00000000000000000000000000000001'

str = binaryString( a[1] );
// returns '00000000000000000000000000000100'

str = binaryString( a[2] );
// returns '00000000000000000000000000001001'
```


## Notes

* 	Except for [typed arrays][typed-arrays], JavaScript does __not__ provide native user support for [unsigned 32-bit integers][integer]. According to the [ECMAScript standard][ecma-262], `number` values correspond to [double-precision floating-point numbers][ieee754]. While this `function` is intended for [unsigned 32-bit integers][integer], the `function` will accept [floating-point][ieee754] values and represent the values __as if__ they are [unsigned 32-bit integers][integer]. Accordingly, care __should__ be taken to ensure that __only__ nonnegative integer values less than `4,294,967,296` (`2**32`) are provided.

	``` javascript
	var str = binaryString( 1 );
	// returns '00000000000000000000000000000001'

	str = binaryString( 4 );
	// returns '00000000000000000000000000000100'

	str = binaryString( 9 );
	// returns '00000000000000000000000000001001'

	str = binaryString( 4294967295 );
	// returns '11111111111111111111111111111111'
	```


## Examples

``` javascript
var round = require( 'math-round' );
var binaryString = require( 'math-uint32-binary-string' );

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
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2016. The [Compute.io][compute-io] Authors.


[npm-image]: http://img.shields.io/npm/v/math-uint32-binary-string.svg
[npm-url]: https://npmjs.org/package/math-uint32-binary-string

[build-image]: http://img.shields.io/travis/math-io/uint32-binary-string/master.svg
[build-url]: https://travis-ci.org/math-io/uint32-binary-string

[coverage-image]: https://img.shields.io/codecov/c/github/math-io/uint32-binary-string/master.svg
[coverage-url]: https://codecov.io/github/math-io/uint32-binary-string?branch=master

[dependencies-image]: http://img.shields.io/david/math-io/uint32-binary-string.svg
[dependencies-url]: https://david-dm.org/math-io/uint32-binary-string

[dev-dependencies-image]: http://img.shields.io/david/dev/math-io/uint32-binary-string.svg
[dev-dependencies-url]: https://david-dm.org/dev/math-io/uint32-binary-string

[github-issues-image]: http://img.shields.io/github/issues/math-io/uint32-binary-string.svg
[github-issues-url]: https://github.com/math-io/uint32-binary-string/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com

[compute-io]: https://github.com/compute-io/
[integer]: https://en.wikipedia.org/wiki/Integer_(computer_science)
[typed-arrays]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays
[ecma-262]: http://www.ecma-international.org/ecma-262/5.1/#sec-4.3.19
[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985
