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

'use strict';

// MODULES //

var isnan = require( '@stdlib/math/base/assert/is-nan' );
var pkg = require( './../package.json' ).name;
var bench = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var opts;
	var i;

	opts = {
		'iterations': null,
		'repeats': 3,
		'timeout': 60000,
		'skip': false
	};

	i = 0;
	b.tic();

	return next();

	function next() {
		var harness;
		var stream;
		var hopts;

		i += 1;

		if ( i > b.iterations ) {
			b.toc();
			return b.end();
		}
		hopts = {
			'autoclose': true
		};
		harness = bench.createHarness( hopts, onFinish );

		stream = harness.createStream();
		stream.on( 'close', onClose );

		harness( 'test', opts, test );

		function onFinish() {
			b.ok( true, 'benchmark finished' );
			stream.destroy();
		}

		function onClose() {
			next();
		}
	}

	function test( b ) {
		var x;
		var i;

		x = 0;
		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			x += i * 2;
			if ( isnan( x ) ) {
				b.fail( 'something went wrong' );
			}
		}
		b.toc();
		if ( isnan( x ) ) {
			b.fail( 'something went wrong' );
		}
		b.end();
	}
});
