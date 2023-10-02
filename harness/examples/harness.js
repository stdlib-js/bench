/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

/* eslint-disable no-restricted-syntax */

'use strict';

var randu = require( '@stdlib/random/base/randu' );
var sin = require( '@stdlib/math/base/special/sin' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var logStream = require( './../lib/log' );
var createHarness = require( './../lib' ).createHarness;

// Create the benchmark harness:
var bench = createHarness( onFinish );

function onFinish() {
	bench.close();
}

// Write benchmark results to `stdout`:
var log = logStream();
bench.createStream().pipe( log );

// Set benchmark options:
var opts = {
	'iterations': 1e6,
	'repeats': 3
};

// Run benchmarks:
bench( 'sin', opts, function benchmark( b ) {
	var x;
	var y;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = (randu()*100.0) - 50.0;
		y = sin( x );
		if ( y < -1.0 || y > 1.0 ) {
			b.fail( 'something went wrong!' );
		}
	}
	b.toc();

	if ( isnan( y ) ) {
		b.fail( 'something went wrong!' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
