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

var tape = require( 'tape' );
var randu = require( '@stdlib/random/base/randu' );
var sin = require( '@stdlib/math/base/special/sin' );
var Benchmark = require( './../lib/benchmark-class' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Benchmark, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function is a constructor (no benchmark)', function test( t ) {
	var opts;
	var b;

	opts = {
		'iterations': 5,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'beep', opts );

	t.strictEqual( b instanceof Benchmark, true, 'returns an instance' );
	t.end();
});

tape( 'the function is a constructor (benchmark)', function test( t ) {
	var opts;
	var b;

	opts = {
		'iterations': 5,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'beep', opts, benchmark );

	t.strictEqual( b instanceof Benchmark, true, 'returns an instance' );
	t.end();

	function benchmark( b ) {
		var x;
		var y;
		var i;
		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			x = (randu()*100.0) - 50.0;
			y = sin( x );
			if ( y < -1.0 || y > 1.0 ) {
				b.fail( 'something went wrong' );
			}
		}
		b.toc();
		if ( y < -1.0 || y > 1.0 ) {
			b.fail( 'something went wrong' );
		}
		b.end();
	}
});

tape( 'the constructor does not require the `new` keyword', function test( t ) {
	var createBenchmark;
	var opts;
	var b;

	opts = {
		'iterations': 5,
		'timeout': 60000,
		'skip': false
	};

	createBenchmark = Benchmark;
	b = createBenchmark( 'beep', opts );

	t.strictEqual( b instanceof Benchmark, true, 'returns an instance' );
	t.end();
});

tape( 'a benchmark instance has a `name` property', function test( t ) {
	var opts;
	var b;

	opts = {
		'iterations': 5,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'beep', opts );

	t.strictEqual( typeof b.name, 'string', 'has property' );
	t.end();
});

tape( 'a benchmark instance has an `iterations` property', function test( t ) {
	var opts;
	var b;

	opts = {
		'iterations': 5,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'beep', opts );

	t.strictEqual( typeof b.iterations, 'number', 'has property' );
	t.end();
});

tape( 'a benchmark instance has a `timeout` property', function test( t ) {
	var opts;
	var b;

	opts = {
		'iterations': 5,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'beep', opts );

	t.strictEqual( typeof b.timeout, 'number', 'has property' );
	t.end();
});

tape( 'a benchmark instance has a `tic` method', function test( t ) {
	var opts;
	var b;

	opts = {
		'iterations': 5,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'beep', opts );

	t.strictEqual( typeof b.tic, 'function', 'has method' );
	t.end();
});

tape( 'a benchmark instance has a `toc` method', function test( t ) {
	var opts;
	var b;

	opts = {
		'iterations': 5,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'beep', opts );

	t.strictEqual( typeof b.toc, 'function', 'has method' );
	t.end();
});

tape( 'a benchmark instance has a `comment` method', function test( t ) {
	var opts;
	var b;

	opts = {
		'iterations': 5,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'beep', opts );

	t.strictEqual( typeof b.comment, 'function', 'has method' );
	t.end();
});

tape( 'a benchmark instance has a `skip` method', function test( t ) {
	var opts;
	var b;

	opts = {
		'iterations': 5,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'beep', opts );

	t.strictEqual( typeof b.skip, 'function', 'has method' );
	t.end();
});

tape( 'a benchmark instance has a `todo` method', function test( t ) {
	var opts;
	var b;

	opts = {
		'iterations': 5,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'beep', opts );

	t.strictEqual( typeof b.todo, 'function', 'has method' );
	t.end();
});

tape( 'a benchmark instance has a `fail` method', function test( t ) {
	var opts;
	var b;

	opts = {
		'iterations': 5,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'beep', opts );

	t.strictEqual( typeof b.fail, 'function', 'has method' );
	t.end();
});

tape( 'a benchmark instance has a `pass` method', function test( t ) {
	var opts;
	var b;

	opts = {
		'iterations': 5,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'beep', opts );

	t.strictEqual( typeof b.pass, 'function', 'has method' );
	t.end();
});

tape( 'a benchmark instance has an `ok` method', function test( t ) {
	var opts;
	var b;

	opts = {
		'iterations': 5,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'beep', opts );

	t.strictEqual( typeof b.ok, 'function', 'has method' );
	t.end();
});

tape( 'a benchmark instance has a `notOk` method', function test( t ) {
	var opts;
	var b;

	opts = {
		'iterations': 5,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'beep', opts );

	t.strictEqual( typeof b.notOk, 'function', 'has method' );
	t.end();
});

tape( 'a benchmark instance has an `equal` method', function test( t ) {
	var opts;
	var b;

	opts = {
		'iterations': 5,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'beep', opts );

	t.strictEqual( typeof b.equal, 'function', 'has method' );
	t.end();
});

tape( 'a benchmark instance has a `notEqual` method', function test( t ) {
	var opts;
	var b;

	opts = {
		'iterations': 5,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'beep', opts );

	t.strictEqual( typeof b.notEqual, 'function', 'has method' );
	t.end();
});

tape( 'a benchmark instance has a `deepEqual` method', function test( t ) {
	var opts;
	var b;

	opts = {
		'iterations': 5,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'beep', opts );

	t.strictEqual( typeof b.deepEqual, 'function', 'has method' );
	t.end();
});

tape( 'a benchmark instance has a `notDeepEqual` method', function test( t ) {
	var opts;
	var b;

	opts = {
		'iterations': 5,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'beep', opts );

	t.strictEqual( typeof b.notDeepEqual, 'function', 'has method' );
	t.end();
});

tape( 'a benchmark instance has an `end` method', function test( t ) {
	var opts;
	var b;

	opts = {
		'iterations': 5,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'beep', opts );

	t.strictEqual( typeof b.end, 'function', 'has method' );
	t.end();
});

tape( 'a benchmark instance emits an `end` event once finished', function test( t ) {
	var opts;
	var b;

	opts = {
		'iterations': 5,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'sin', opts, benchmark );

	b.on( 'end', onEnd );

	b.run();

	function benchmark( b ) {
		var x;
		var y;
		var i;
		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			x = (randu()*100.0) - 50.0;
			y = sin( x );
			if ( y < -1.0 || y > 1.0 ) {
				b.fail( 'something went wrong' );
			}
		}
		b.toc();
		if ( y < -1.0 || y > 1.0 ) {
			b.fail( 'something went wrong' );
		}
		b.end();
	}

	function onEnd() {
		t.ok( true, 'emits expected event' );
		t.end();
	}
});

tape( 'a benchmark instance emits a `result` event for each result (assertions, timing results, and comments)', function test( t ) {
	var comments;
	var asserts;
	var results;
	var opts;
	var b;

	opts = {
		'iterations': 5,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'sin', opts, benchmark );

	b.on( 'result', onResult );
	b.on( 'end', onEnd );

	comments = 0;
	results = 0;
	asserts = 0;

	b.run();

	function benchmark( b ) {
		var x;
		var y;
		var i;
		b.comment( 'Running benchmarks...' );
		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			x = (randu()*100.0) - 50.0;
			y = sin( x );
			if ( y < -1.0 || y > 1.0 ) {
				b.fail( 'something went wrong' );
			} else {
				b.pass( 'everything is fine' );
			}
		}
		b.toc();
		if ( y < -1.0 || y > 1.0 ) {
			b.fail( 'something went wrong' );
		} else {
			b.pass( 'Success!' );
		}
		b.end();
	}

	function onResult( result ) {
		if ( typeof result === 'string' ) {
			comments += 1;
		} else if ( typeof result === 'object' ) {
			if ( result.operator === 'result' ) {
				results += 1;
			} else {
				asserts += 1;
			}
		} else {
			t.ok( false, 'unrecognized result type: '+result );
		}
	}

	function onEnd() {
		t.strictEqual( comments, 1, 'emits expected number of comments' );
		t.strictEqual( asserts, 6, 'emits expected number of assertion results' );
		t.strictEqual( results, 1, 'emits expected number of timing results' );
		t.end();
	}
});

tape( 'a benchmark instance strips comments of leading and trailing whitespace and removes a leading `#` followed by whitespace', function test( t ) {
	var expected;
	var opts;
	var flg;
	var idx;
	var b;

	expected = [
		'beep',
		'boop',
		'foo foo',
		'bar bar bar',
		'beep boop'
	];

	opts = {
		'iterations': 1,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'sin', opts, benchmark );

	b.on( 'result', onResult );
	b.on( 'end', onEnd );

	idx = 0;

	b.run();

	function benchmark( b ) {
		var i;
		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			b.comment( '    beep' );
			b.comment( 'boop        ' );
			b.comment( '   foo foo     ' );
			b.comment( '# bar bar bar    ' );
			b.comment( '         # beep boop' );
		}
		b.toc();
		b.end();
	}

	function onResult( result ) {
		flg = true;
		if ( typeof result === 'string' ) {
			t.strictEqual( result, expected[ idx ], 'emits expected result: '+expected[ idx ] );
			idx += 1;
		}
	}

	function onEnd() {
		t.ok( flg, 'emitted results' );
		t.end();
	}
});

tape( 'a benchmark instance emits newline delimited comments as separate results', function test( t ) {
	var expected;
	var opts;
	var flg;
	var idx;
	var b;

	expected = [
		'beep',
		'boop',
		'foo',
		'bar',
		'be',
		'ep bo',
		'op'
	];

	opts = {
		'iterations': 1,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'sin', opts, benchmark );

	b.on( 'result', onResult );
	b.on( 'end', onEnd );

	idx = 0;

	b.run();

	function benchmark( b ) {
		var i;
		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			b.comment( 'beep\nboop\nfoo\nbar\nbe\nep bo\nop' );
		}
		b.toc();
		b.end();
	}

	function onResult( result ) {
		flg = true;
		if ( typeof result === 'string' ) {
			t.strictEqual( result, expected[ idx ], 'emits expected result: '+expected[ idx ] );
			idx += 1;
		}
	}

	function onEnd() {
		t.ok( flg, 'emitted results' );
		t.end();
	}
});

tape( 'a benchmark instance emits timing results as objects', function test( t ) {
	var opts;
	var flg;
	var b;

	opts = {
		'iterations': 5,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'sin', opts, benchmark );

	b.on( 'result', onResult );
	b.on( 'end', onEnd );

	b.run();

	function benchmark( b ) {
		var x;
		var y;
		var i;
		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			x = (randu()*100.0) - 50.0;
			y = sin( x );
			if ( y < -1.0 || y > 1.0 ) {
				b.fail( 'something went wrong' );
			}
		}
		b.toc();
		if ( y < -1.0 || y > 1.0 ) {
			b.fail( 'something went wrong' );
		}
		b.end();
	}

	function onResult( result ) {
		if ( typeof result === 'object' && result.operator === 'result' ) {
			flg = true;
			t.strictEqual( result.operator, 'result', 'expected `operator` value' );
			t.strictEqual( result.ok, true, 'expected `ok` value' );
			t.strictEqual( typeof result.iterations, 'number', 'has property' );
			t.strictEqual( typeof result.elapsed, 'number', 'has property' );
			t.strictEqual( typeof result.rate, 'number', 'has property' );
		}
	}

	function onEnd() {
		t.ok( flg, 'emitted timing results' );
		t.end();
	}
});

tape( 'a benchmark instance generates a failing assertion if its `tic` method is called more than once', function test( t ) {
	var opts;
	var msg;
	var flg;
	var b;

	msg = '.tic() called more than once';

	opts = {
		'iterations': 5,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'sin', opts, benchmark );

	b.on( 'result', onResult );
	b.on( 'end', onEnd );

	b.run();

	function benchmark( b ) {
		var x;
		var y;
		var i;
		b.tic();
		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			x = (randu()*100.0) - 50.0;
			y = sin( x );
			if ( y < -1.0 || y > 1.0 ) {
				b.fail( 'something went wrong' );
			}
		}
		b.toc();
		if ( y < -1.0 || y > 1.0 ) {
			b.fail( 'something went wrong' );
		}
		b.end();
	}

	function onResult( result ) {
		if (
			typeof result === 'object' &&
			result.ok === false &&
			result.operator === 'fail' &&
			result.name === msg
		) {
			flg = true;
		}
	}

	function onEnd() {
		t.ok( flg, 'generated a failing assertion' );
		t.end();
	}
});

tape( 'a benchmark instance generates a failing assertion if its `toc` method is called more than once', function test( t ) {
	var opts;
	var msg;
	var flg;
	var b;

	msg = '.toc() called more than once';

	opts = {
		'iterations': 5,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'sin', opts, benchmark );

	b.on( 'result', onResult );
	b.on( 'end', onEnd );

	b.run();

	function benchmark( b ) {
		var x;
		var y;
		var i;
		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			x = (randu()*100.0) - 50.0;
			y = sin( x );
			if ( y < -1.0 || y > 1.0 ) {
				b.fail( 'something went wrong' );
			}
		}
		b.toc();
		b.toc();
		if ( y < -1.0 || y > 1.0 ) {
			b.fail( 'something went wrong' );
		}
		b.end();
	}

	function onResult( result ) {
		if (
			typeof result === 'object' &&
			result.ok === false &&
			result.operator === 'fail' &&
			result.name === msg
		) {
			flg = true;
		}
	}

	function onEnd() {
		t.ok( flg, 'generated a failing assertion' );
		t.end();
	}
});

tape( 'a benchmark instance generates a failing assertion if its `toc` method is called before calling its `tic` method', function test( t ) {
	var opts;
	var msg;
	var flg;
	var b;

	msg = '.toc() called before .tic()';

	opts = {
		'iterations': 5,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'sin', opts, benchmark );

	b.on( 'result', onResult );
	b.on( 'end', onEnd );

	b.run();

	function benchmark( b ) {
		var x;
		var y;
		var i;
		for ( i = 0; i < b.iterations; i++ ) {
			x = (randu()*100.0) - 50.0;
			y = sin( x );
			if ( y < -1.0 || y > 1.0 ) {
				b.fail( 'something went wrong' );
			}
		}
		b.toc();
		if ( y < -1.0 || y > 1.0 ) {
			b.fail( 'something went wrong' );
		}
		b.end();
	}

	function onResult( result ) {
		if (
			typeof result === 'object' &&
			result.ok === false &&
			result.operator === 'fail' &&
			result.name === msg
		) {
			flg = true;
		}
	}

	function onEnd() {
		t.ok( flg, 'generated a failing assertion' );
		t.end();
	}
});

tape( 'a benchmark instance generates a failing assertion if its `end` method is called more than once', function test( t ) {
	var opts;
	var msg;
	var flg;
	var b;

	msg = '.end() called more than once';

	opts = {
		'iterations': 5,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'sin', opts, benchmark );

	b.on( 'result', onResult );
	b.on( 'end', onEnd );

	b.run();

	function benchmark( b ) {
		var x;
		var y;
		var i;
		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			x = (randu()*100.0) - 50.0;
			y = sin( x );
			if ( y < -1.0 || y > 1.0 ) {
				b.fail( 'something went wrong' );
			}
		}
		b.toc();
		if ( y < -1.0 || y > 1.0 ) {
			b.fail( 'something went wrong' );
		}
		b.end();
		b.end();
	}

	function onResult( result ) {
		if (
			typeof result === 'object' &&
			result.ok === false &&
			result.operator === 'fail' &&
			result.name === msg
		) {
			flg = true;
		}
	}

	function onEnd() {
		t.ok( flg, 'generated a failing assertion' );
		t.end();
	}
});

tape( 'an equality assertion asserts that two values are strictly equal (passing)', function test( t ) {
	var opts;
	var flg;
	var b;

	opts = {
		'iterations': 5,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'test', opts, benchmark );

	b.on( 'result', onResult );
	b.on( 'end', onEnd );

	b.run();

	function benchmark( b ) {
		var i;
		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			b.equal( 3.14, 3.14, 'values are equal' );
		}
		b.toc();
		b.end();
	}

	function onResult( result ) {
		if ( typeof result === 'object' && result.operator !== 'result' ) {
			flg = true;
			t.strictEqual( result.operator, 'equal', 'expected operator' );
			t.strictEqual( result.ok, true, 'expected `ok` status' );
			t.strictEqual( result.name, 'values are equal', 'expected `name` value' );
			t.strictEqual( result.actual, 3.14, 'expected `actual` value' );
			t.strictEqual( result.expected, 3.14, 'expected `expected` value' );
		}
	}

	function onEnd() {
		t.ok( flg, 'generated assertion' );
		t.end();
	}
});

tape( 'an equality assertion asserts that two values are strictly equal (failing)', function test( t ) {
	var opts;
	var flg;
	var b;

	opts = {
		'iterations': 5,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'test', opts, benchmark );

	b.on( 'result', onResult );
	b.on( 'end', onEnd );

	b.run();

	function benchmark( b ) {
		var i;
		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			b.equal( 3.14, 3.0, 'values are equal' );
		}
		b.toc();
		b.end();
	}

	function onResult( result ) {
		if ( typeof result === 'object' && result.operator !== 'result' ) {
			flg = true;
			t.strictEqual( result.operator, 'equal', 'expected operator' );
			t.strictEqual( result.ok, false, 'expected `ok` status' );
			t.strictEqual( result.name, 'values are equal', 'expected `name` value' );
			t.strictEqual( result.actual, 3.14, 'expected `actual` value' );
			t.strictEqual( result.expected, 3.0, 'expected `expected` value' );
		}
	}

	function onEnd() {
		t.ok( flg, 'generated assertion' );
		t.end();
	}
});

tape( 'an equality assertion asserts that two values are strictly equal (default message)', function test( t ) {
	var opts;
	var flg;
	var b;

	opts = {
		'iterations': 5,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'test', opts, benchmark );

	b.on( 'result', onResult );
	b.on( 'end', onEnd );

	b.run();

	function benchmark( b ) {
		var i;
		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			b.equal( 3.14, 3.14 );
		}
		b.toc();
		b.end();
	}

	function onResult( result ) {
		if ( typeof result === 'object' && result.operator !== 'result' ) {
			flg = true;
			t.strictEqual( result.operator, 'equal', 'expected operator' );
			t.strictEqual( result.ok, true, 'expected `ok` status' );
			t.strictEqual( result.name, 'should be equal', 'expected `name` value' );
			t.strictEqual( result.actual, 3.14, 'expected `actual` value' );
			t.strictEqual( result.expected, 3.14, 'expected `expected` value' );
		}
	}

	function onEnd() {
		t.ok( flg, 'generated assertion' );
		t.end();
	}
});

tape( 'an inequality assertion asserts that two values are not strictly equal (passing)', function test( t ) {
	var opts;
	var flg;
	var b;

	opts = {
		'iterations': 5,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'test', opts, benchmark );

	b.on( 'result', onResult );
	b.on( 'end', onEnd );

	b.run();

	function benchmark( b ) {
		var i;
		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			b.notEqual( 3.14, 3.0, 'values are not equal' );
		}
		b.toc();
		b.end();
	}

	function onResult( result ) {
		if ( typeof result === 'object' && result.operator !== 'result' ) {
			flg = true;
			t.strictEqual( result.operator, 'notEqual', 'expected operator' );
			t.strictEqual( result.ok, true, 'expected `ok` status' );
			t.strictEqual( result.name, 'values are not equal', 'expected `name` value' );
			t.strictEqual( result.actual, 3.14, 'expected `actual` value' );
			t.strictEqual( result.expected, 3.0, 'expected `expected` value' );
		}
	}

	function onEnd() {
		t.ok( flg, 'generated assertion' );
		t.end();
	}
});

tape( 'an inequality assertion asserts that two values are not strictly equal (failing)', function test( t ) {
	var opts;
	var flg;
	var b;

	opts = {
		'iterations': 5,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'test', opts, benchmark );

	b.on( 'result', onResult );
	b.on( 'end', onEnd );

	b.run();

	function benchmark( b ) {
		var i;
		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			b.notEqual( 3.14, 3.14, 'values are not equal' );
		}
		b.toc();
		b.end();
	}

	function onResult( result ) {
		if ( typeof result === 'object' && result.operator !== 'result' ) {
			flg = true;
			t.strictEqual( result.operator, 'notEqual', 'expected operator' );
			t.strictEqual( result.ok, false, 'expected `ok` status' );
			t.strictEqual( result.name, 'values are not equal', 'expected `name` value' );
			t.strictEqual( result.actual, 3.14, 'expected `actual` value' );
			t.strictEqual( result.expected, 3.14, 'expected `expected` value' );
		}
	}

	function onEnd() {
		t.ok( flg, 'generated assertion' );
		t.end();
	}
});

tape( 'an inequality assertion asserts that two values are not strictly equal (default message)', function test( t ) {
	var opts;
	var flg;
	var b;

	opts = {
		'iterations': 5,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'test', opts, benchmark );

	b.on( 'result', onResult );
	b.on( 'end', onEnd );

	b.run();

	function benchmark( b ) {
		var i;
		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			b.notEqual( 3.14, 3.0 );
		}
		b.toc();
		b.end();
	}

	function onResult( result ) {
		if ( typeof result === 'object' && result.operator !== 'result' ) {
			flg = true;
			t.strictEqual( result.operator, 'notEqual', 'expected operator' );
			t.strictEqual( result.ok, true, 'expected `ok` status' );
			t.strictEqual( result.name, 'should not be equal', 'expected `name` value' );
			t.strictEqual( result.actual, 3.14, 'expected `actual` value' );
			t.strictEqual( result.expected, 3.0, 'expected `expected` value' );
		}
	}

	function onEnd() {
		t.ok( flg, 'generated assertion' );
		t.end();
	}
});

// TODO: add deepEqual and notDeepEqual tests

tape( 'an `ok` assertion asserts that a value is truthy (passing)', function test( t ) {
	var opts;
	var flg;
	var b;

	opts = {
		'iterations': 5,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'test', opts, benchmark );

	b.on( 'result', onResult );
	b.on( 'end', onEnd );

	b.run();

	function benchmark( b ) {
		var i;
		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			b.ok( {}, 'is okay' );
		}
		b.toc();
		b.end();
	}

	function onResult( result ) {
		if ( typeof result === 'object' && result.operator !== 'result' ) {
			flg = true;
			t.strictEqual( result.operator, 'ok', 'expected operator' );
			t.strictEqual( result.ok, true, 'expected `ok` status' );
			t.strictEqual( result.name, 'is okay', 'expected `name` value' );
			t.deepEqual( result.actual, {}, 'expected `actual` value' );
			t.strictEqual( result.expected, true, 'expected `expected` value' );
		}
	}

	function onEnd() {
		t.ok( flg, 'generated assertion' );
		t.end();
	}
});

tape( 'an `ok` assertion asserts that a value is truthy (failing)', function test( t ) {
	var opts;
	var flg;
	var b;

	opts = {
		'iterations': 5,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'test', opts, benchmark );

	b.on( 'result', onResult );
	b.on( 'end', onEnd );

	b.run();

	function benchmark( b ) {
		var i;
		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			b.ok( null, 'is okay' );
		}
		b.toc();
		b.end();
	}

	function onResult( result ) {
		if ( typeof result === 'object' && result.operator !== 'result' ) {
			flg = true;
			t.strictEqual( result.operator, 'ok', 'expected operator' );
			t.strictEqual( result.ok, false, 'expected `ok` status' );
			t.strictEqual( result.name, 'is okay', 'expected `name` value' );
			t.strictEqual( result.actual, null, 'expected `actual` value' );
			t.strictEqual( result.expected, true, 'expected `expected` value' );
		}
	}

	function onEnd() {
		t.ok( flg, 'generated assertion' );
		t.end();
	}
});

tape( 'an `ok` assertion asserts that a value is truthy (default message)', function test( t ) {
	var opts;
	var flg;
	var b;

	opts = {
		'iterations': 5,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'test', opts, benchmark );

	b.on( 'result', onResult );
	b.on( 'end', onEnd );

	b.run();

	function benchmark( b ) {
		var i;
		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			b.ok( null );
		}
		b.toc();
		b.end();
	}

	function onResult( result ) {
		if ( typeof result === 'object' && result.operator !== 'result' ) {
			flg = true;
			t.strictEqual( result.operator, 'ok', 'expected operator' );
			t.strictEqual( result.ok, false, 'expected `ok` status' );
			t.strictEqual( result.name, 'should be truthy', 'expected `name` value' );
			t.strictEqual( result.actual, null, 'expected `actual` value' );
			t.strictEqual( result.expected, true, 'expected `expected` value' );
		}
	}

	function onEnd() {
		t.ok( flg, 'generated assertion' );
		t.end();
	}
});

tape( 'a `notOk` assertion asserts that a value is falsy (passing)', function test( t ) {
	var opts;
	var flg;
	var b;

	opts = {
		'iterations': 5,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'test', opts, benchmark );

	b.on( 'result', onResult );
	b.on( 'end', onEnd );

	b.run();

	function benchmark( b ) {
		var i;
		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			b.notOk( null, 'is not okay' );
		}
		b.toc();
		b.end();
	}

	function onResult( result ) {
		if ( typeof result === 'object' && result.operator !== 'result' ) {
			flg = true;
			t.strictEqual( result.operator, 'notOk', 'expected operator' );
			t.strictEqual( result.ok, true, 'expected `ok` status' );
			t.strictEqual( result.name, 'is not okay', 'expected `name` value' );
			t.strictEqual( result.actual, null, 'expected `actual` value' );
			t.strictEqual( result.expected, false, 'expected `expected` value' );
		}
	}

	function onEnd() {
		t.ok( flg, 'generated assertion' );
		t.end();
	}
});

tape( 'a `notOk` assertion asserts that a value is falsy (failing)', function test( t ) {
	var opts;
	var flg;
	var b;

	opts = {
		'iterations': 5,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'test', opts, benchmark );

	b.on( 'result', onResult );
	b.on( 'end', onEnd );

	b.run();

	function benchmark( b ) {
		var i;
		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			b.notOk( [], 'is not okay' );
		}
		b.toc();
		b.end();
	}

	function onResult( result ) {
		if ( typeof result === 'object' && result.operator !== 'result' ) {
			flg = true;
			t.strictEqual( result.operator, 'notOk', 'expected operator' );
			t.strictEqual( result.ok, false, 'expected `ok` status' );
			t.strictEqual( result.name, 'is not okay', 'expected `name` value' );
			t.deepEqual( result.actual, [], 'expected `actual` value' );
			t.strictEqual( result.expected, false, 'expected `expected` value' );
		}
	}

	function onEnd() {
		t.ok( flg, 'generated assertion' );
		t.end();
	}
});

tape( 'a `notOk` assertion asserts that a value is falsy (default message)', function test( t ) {
	var opts;
	var flg;
	var b;

	opts = {
		'iterations': 5,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'test', opts, benchmark );

	b.on( 'result', onResult );
	b.on( 'end', onEnd );

	b.run();

	function benchmark( b ) {
		var i;
		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			b.notOk( void 0 );
		}
		b.toc();
		b.end();
	}

	function onResult( result ) {
		if ( typeof result === 'object' && result.operator !== 'result' ) {
			flg = true;
			t.strictEqual( result.operator, 'notOk', 'expected operator' );
			t.strictEqual( result.ok, true, 'expected `ok` status' );
			t.strictEqual( result.name, 'should be falsy', 'expected `name` value' );
			t.strictEqual( result.actual, void 0, 'expected `actual` value' );
			t.strictEqual( result.expected, false, 'expected `expected` value' );
		}
	}

	function onEnd() {
		t.ok( flg, 'generated assertion' );
		t.end();
	}
});

tape( 'a `pass` assertion generates a passing assertion', function test( t ) {
	var opts;
	var flg;
	var b;

	opts = {
		'iterations': 5,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'test', opts, benchmark );

	b.on( 'result', onResult );
	b.on( 'end', onEnd );

	b.run();

	function benchmark( b ) {
		var i;
		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			b.pass( 'beep boop' );
		}
		b.toc();
		b.end();
	}

	function onResult( result ) {
		if ( typeof result === 'object' && result.operator !== 'result' ) {
			flg = true;
			t.strictEqual( result.operator, 'pass', 'expected operator' );
			t.strictEqual( result.ok, true, 'expected `ok` status' );
			t.strictEqual( result.name, 'beep boop', 'expected `name` value' );
		}
	}

	function onEnd() {
		t.ok( flg, 'generated assertion' );
		t.end();
	}
});

tape( 'a `pass` assertion generates a passing assertion (no message)', function test( t ) {
	var opts;
	var flg;
	var b;

	opts = {
		'iterations': 5,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'test', opts, benchmark );

	b.on( 'result', onResult );
	b.on( 'end', onEnd );

	b.run();

	function benchmark( b ) {
		var i;
		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			b.pass();
		}
		b.toc();
		b.end();
	}

	function onResult( result ) {
		if ( typeof result === 'object' && result.operator !== 'result' ) {
			flg = true;
			t.strictEqual( result.operator, 'pass', 'expected operator' );
			t.strictEqual( result.ok, true, 'expected `ok` status' );
			t.strictEqual( result.name, '(unnamed assert)', 'expected `name` value' );
		}
	}

	function onEnd() {
		t.ok( flg, 'generated assertion' );
		t.end();
	}
});

tape( 'a `fail` assertion generates a failing assertion', function test( t ) {
	var opts;
	var flg;
	var b;

	opts = {
		'iterations': 5,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'test', opts, benchmark );

	b.on( 'result', onResult );
	b.on( 'end', onEnd );

	b.run();

	function benchmark( b ) {
		var i;
		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			b.fail( 'foo bar' );
		}
		b.toc();
		b.end();
	}

	function onResult( result ) {
		if ( typeof result === 'object' && result.operator !== 'result' ) {
			flg = true;
			t.strictEqual( result.operator, 'fail', 'expected operator' );
			t.strictEqual( result.ok, false, 'expected `ok` status' );
			t.strictEqual( result.name, 'foo bar', 'expected `name` value' );
		}
	}

	function onEnd() {
		t.ok( flg, 'generated assertion' );
		t.end();
	}
});

tape( 'a `fail` assertion generates a failing assertion (no message)', function test( t ) {
	var opts;
	var flg;
	var b;

	opts = {
		'iterations': 5,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'test', opts, benchmark );

	b.on( 'result', onResult );
	b.on( 'end', onEnd );

	b.run();

	function benchmark( b ) {
		var i;
		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			b.fail();
		}
		b.toc();
		b.end();
	}

	function onResult( result ) {
		if ( typeof result === 'object' && result.operator !== 'result' ) {
			flg = true;
			t.strictEqual( result.operator, 'fail', 'expected operator' );
			t.strictEqual( result.ok, false, 'expected `ok` status' );
			t.strictEqual( result.name, '(unnamed assert)', 'expected `name` value' );
		}
	}

	function onEnd() {
		t.ok( flg, 'generated assertion' );
		t.end();
	}
});

tape( 'calling `skip` generates an assertion which will be skipped (truthy value)', function test( t ) {
	var opts;
	var flg;
	var b;

	opts = {
		'iterations': 5,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'test', opts, benchmark );

	b.on( 'result', onResult );
	b.on( 'end', onEnd );

	b.run();

	function benchmark( b ) {
		var i;
		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			b.skip( true, 'skippy skipper' );
		}
		b.toc();
		b.end();
	}

	function onResult( result ) {
		if ( typeof result === 'object' && result.operator !== 'result' ) {
			flg = true;
			t.strictEqual( result.operator, 'skip', 'expected operator' );
			t.strictEqual( result.ok, true, 'expected `ok` status' );
			t.strictEqual( result.name, 'skippy skipper', 'expected `name` value' );
			t.strictEqual( result.skip, true, 'expected `skip` value' );
		}
	}

	function onEnd() {
		t.ok( flg, 'generated assertion' );
		t.end();
	}
});

tape( 'calling `skip` generates an assertion which will be skipped (falsy value)', function test( t ) {
	var opts;
	var flg;
	var b;

	opts = {
		'iterations': 5,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'test', opts, benchmark );

	b.on( 'result', onResult );
	b.on( 'end', onEnd );

	b.run();

	function benchmark( b ) {
		var i;
		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			b.skip( false, 'skippy skipper' );
		}
		b.toc();
		b.end();
	}

	function onResult( result ) {
		if ( typeof result === 'object' && result.operator !== 'result' ) {
			flg = true;
			t.strictEqual( result.operator, 'skip', 'expected operator' );
			t.strictEqual( result.ok, true, 'expected `ok` status' );
			t.strictEqual( result.name, 'skippy skipper', 'expected `name` value' );
			t.strictEqual( result.skip, true, 'expected `skip` value' );
		}
	}

	function onEnd() {
		t.ok( flg, 'generated assertion' );
		t.end();
	}
});

tape( 'calling `todo` generates an assertion which should be implemented (truthy value)', function test( t ) {
	var opts;
	var flg;
	var b;

	opts = {
		'iterations': 5,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'test', opts, benchmark );

	b.on( 'result', onResult );
	b.on( 'end', onEnd );

	b.run();

	function benchmark( b ) {
		var i;
		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			b.todo( true, 'do this later' );
		}
		b.toc();
		b.end();
	}

	function onResult( result ) {
		if ( typeof result === 'object' && result.operator !== 'result' ) {
			flg = true;
			t.strictEqual( result.operator, 'todo', 'expected operator' );
			t.strictEqual( result.ok, true, 'expected `ok` status' );
			t.strictEqual( result.name, 'do this later', 'expected `name` value' );
			t.strictEqual( result.todo, true, 'expected `todo` value' );
		}
	}

	function onEnd() {
		t.ok( flg, 'generated assertion' );
		t.end();
	}
});

tape( 'calling `todo` generates an assertion which should be implemented (falsy value)', function test( t ) {
	var opts;
	var flg;
	var b;

	opts = {
		'iterations': 5,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'test', opts, benchmark );

	b.on( 'result', onResult );
	b.on( 'end', onEnd );

	b.run();

	function benchmark( b ) {
		var i;
		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			b.todo( null, 'do this later' );
		}
		b.toc();
		b.end();
	}

	function onResult( result ) {
		if ( typeof result === 'object' && result.operator !== 'result' ) {
			flg = true;
			t.strictEqual( result.operator, 'todo', 'expected operator' );
			t.strictEqual( result.ok, false, 'expected `ok` status' );
			t.strictEqual( result.name, 'do this later', 'expected `name` value' );
			t.strictEqual( result.todo, true, 'expected `todo` value' );
		}
	}

	function onEnd() {
		t.ok( flg, 'generated assertion' );
		t.end();
	}
});

tape( 'when run, if the `skip` option is `true`, the benchmark emits a comment and ends', function test( t ) {
	var count;
	var opts;
	var flg;
	var b;

	opts = {
		'iterations': 5,
		'timeout': 60000,
		'skip': true
	};
	b = new Benchmark( 'sin', opts, benchmark );

	b.on( 'result', onResult );
	b.on( 'end', onEnd );

	count = 0;
	b.run();

	function benchmark( b ) {
		var x;
		var y;
		var i;
		for ( i = 0; i < b.iterations; i++ ) {
			x = (randu()*100.0) - 50.0;
			y = sin( x );
			if ( y < -1.0 || y > 1.0 ) {
				b.fail( 'something went wrong' );
			}
		}
		b.toc();
		if ( y < -1.0 || y > 1.0 ) {
			b.fail( 'something went wrong' );
		}
		b.end();
	}

	function onResult( result ) {
		count += 1;
		if ( typeof result === 'string' ) {
			flg = true;
			t.strictEqual( result, 'SKIP sin', 'expected comment' );
		}
	}

	function onEnd() {
		t.ok( flg, 'generated comment' );
		t.strictEqual( count, 1, 'only emitted one result' );
		t.end();
	}
});

tape( 'if not provided a benchmark function, the benchmark, when run, emits a comment and then ends', function test( t ) {
	var count;
	var opts;
	var flg;
	var b;

	opts = {
		'iterations': 5,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'sin', opts );

	b.on( 'result', onResult );
	b.on( 'end', onEnd );

	count = 0;
	b.run();

	function onResult( result ) {
		count += 1;
		if ( typeof result === 'string' ) {
			flg = true;
			t.strictEqual( result, 'TODO sin', 'expected comment' );
		}
	}

	function onEnd() {
		t.ok( flg, 'generated comment' );
		t.strictEqual( count, 1, 'only 1 emitted result' );
		t.end();
	}
});

tape( 'if a benchmark exceeds a timeout, the benchmark generates a failing assertion', function test( t ) {
	var opts;
	var flg;
	var b;

	opts = {
		'iterations': 10,
		'timeout': 50,
		'skip': false
	};
	b = new Benchmark( 'test', opts, benchmark );

	b.on( 'result', onResult );
	b.on( 'end', onEnd );

	b.run();

	function benchmark( b ) {
		var i;

		i = 0;
		b.tic();

		setTimeout( next, 0 );

		function next() {
			i += 1;
			if ( i <= b.iterations ) {
				return setTimeout( next, 10 );
			}
			b.toc();
			b.end();
		}
	}

	function onResult( result ) {
		if ( typeof result === 'object' && result.operator !== 'result' ) {
			flg = true;
			t.strictEqual( result.operator, 'fail', 'expected operator' );
			t.strictEqual( result.ok, false, 'expected `ok` status' );
			t.strictEqual( result.name, 'benchmark timed out after '+opts.timeout+'ms', 'expected `name` value' );
		}
	}

	function onEnd() {
		t.ok( flg, 'generated assertion' );
		t.end();
	}
});

tape( 'if a benchmark is forced to end, the benchmark generates a failing assertion (before running)', function test( t ) {
	var opts;
	var flg;
	var b;

	opts = {
		'iterations': 10,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'test', opts, benchmark );

	b.on( 'result', onResult );
	b.on( 'end', onEnd );

	b.exit();

	function benchmark( b ) {
		var i;

		i = 0;
		b.tic();

		setTimeout( next, 0 );

		function next() {
			i += 1;
			if ( i <= b.iterations ) {
				return setTimeout( next, 10 );
			}
			b.toc();
			b.end();
		}
	}

	function onResult( result ) {
		if ( typeof result === 'object' && result.operator !== 'result' ) {
			flg = true;
			t.strictEqual( result.operator, 'fail', 'expected operator' );
			t.strictEqual( result.ok, false, 'expected `ok` status' );
			t.strictEqual( result.name, 'benchmark exited without ending', 'expected `name` value' );
		}
	}

	function onEnd() {
		t.ok( flg, 'generated assertion' );
		t.end();
	}
});

tape( 'if a benchmark is forced to end, the benchmark generates a failing assertion (while running)', function test( t ) {
	var opts;
	var flg;
	var b;

	opts = {
		'iterations': 10,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'test', opts, benchmark );

	b.on( 'result', onResult );
	b.on( 'end', onEnd );

	b.run();

	function benchmark( b ) {
		var i;

		i = 0;
		b.tic();

		setTimeout( next, 0 );

		function next() {
			i += 1;
			if ( i <= b.iterations ) {
				if ( i === 3 ) {
					// Simulate being required to exit during benchmark:
					b.exit();
				}
				return setTimeout( next, 10 );
			}
			b.toc();
			b.end();
		}
	}

	function onResult( result ) {
		if ( typeof result === 'object' && result.operator !== 'result' ) {
			flg = true;
			t.strictEqual( result.operator, 'fail', 'expected operator' );
			t.strictEqual( result.ok, false, 'expected `ok` status' );
			t.strictEqual( result.name, 'benchmark exited without ending', 'expected `name` value' );
		}
	}

	function onEnd() {
		t.ok( flg, 'generated assertion' );
		t.end();
	}
});

tape( 'if a benchmark is forced to end and the benchmark is running, a benchmark continues to run (i.e., only way to stop a running benchmark is via manual intervention; e.g., killing the process)', function test( t ) {
	var comments;
	var results;
	var opts;
	var flg;
	var b;

	opts = {
		'iterations': 10,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'test', opts, benchmark );

	b.on( 'result', onResult );
	b.on( 'end', onEnd );

	comments = 0;
	results = 0;
	b.run();

	function benchmark( b ) {
		var i;

		i = 0;
		b.tic();

		setTimeout( next, 0 );

		function next() {
			i += 1;
			if ( i <= b.iterations ) {
				if ( i === 3 ) {
					// Simulate being required to exit during benchmark:
					b.exit();
				}
				b.comment( 'still running' );
				return setTimeout( next, 10 );
			}
			b.toc();
			b.end();
		}
	}

	function onResult( result ) {
		if ( typeof result === 'object' ) {
			if ( result.operator === 'result' ) {
				results += 1;
			} else {
				flg = true;
				t.strictEqual( result.operator, 'fail', 'expected operator' );
				t.strictEqual( result.ok, false, 'expected `ok` status' );
				t.strictEqual( result.name, 'benchmark exited without ending', 'expected `name` value' );
			}
		} else {
			comments += 1;
			t.strictEqual( result, 'still running', 'expected result' );
		}
	}

	function onEnd() {
		t.ok( flg, 'generated assertion' );
		t.strictEqual( comments, 10, 'expected number of comments' );
		t.strictEqual( results, 1, 'expected number of timing results' );
		t.end();
	}
});

tape( 'a benchmark guards against attempting to forcefully end a benchmark more than once (before running)', function test( t ) {
	var count;
	var opts;
	var flg;
	var b;

	opts = {
		'iterations': 10,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'test', opts, benchmark );

	b.on( 'result', onResult );
	b.on( 'end', onEnd );

	count = 0;

	b.exit();
	b.exit();
	b.exit();
	b.exit();
	b.exit();
	b.exit();

	function benchmark( b ) {
		var i;

		i = 0;
		b.tic();

		setTimeout( next, 0 );

		function next() {
			i += 1;
			if ( i <= b.iterations ) {
				return setTimeout( next, 10 );
			}
			b.toc();
			b.end();
		}
	}

	function onResult( result ) {
		count += 1;
		if ( typeof result === 'object' && result.operator !== 'result' ) {
			flg = true;
			t.strictEqual( result.operator, 'fail', 'expected operator' );
			t.strictEqual( result.ok, false, 'expected `ok` status' );
			t.strictEqual( result.name, 'benchmark exited without ending', 'expected `name` value' );
		}
	}

	function onEnd() {
		t.ok( flg, 'generated assertion' );
		t.strictEqual( count, 1, 'generates only 1 assertion' );
		t.end();
	}
});

tape( 'a benchmark guards against attempting to forcefully end a benchmark more than once (while running)', function test( t ) {
	var count;
	var opts;
	var flg;
	var b;

	opts = {
		'iterations': 10,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'test', opts, benchmark );

	b.on( 'result', onResult );
	b.on( 'end', onEnd );

	count = 0;

	b.run();

	function benchmark( b ) {
		var i;

		i = 0;
		b.tic();

		setTimeout( next, 0 );

		function next() {
			i += 1;
			if ( i <= b.iterations ) {
				b.exit();
				return setTimeout( next, 10 );
			}
			b.toc();
			b.end();
		}
	}

	function onResult( result ) {
		if ( typeof result === 'object' && result.operator !== 'result' ) {
			count += 1;
			flg = true;
			t.strictEqual( result.operator, 'fail', 'expected operator' );
			t.strictEqual( result.ok, false, 'expected `ok` status' );
			t.strictEqual( result.name, 'benchmark exited without ending', 'expected `name` value' );
		}
	}

	function onEnd() {
		t.ok( flg, 'generated assertion' );
		t.strictEqual( count, 1, 'generates only 1 assertion' );
		t.end();
	}
});

tape( 'if a benchmark has already ended, attempting to forcefully exit a benchmark is a no-op', function test( t ) {
	var opts;
	var flg;
	var b;

	opts = {
		'iterations': 5,
		'timeout': 60000,
		'skip': false
	};
	b = new Benchmark( 'test', opts, benchmark );

	b.on( 'result', onResult );
	b.on( 'end', onEnd );

	b.run();

	function benchmark( b ) {
		var i;

		i = 0;
		b.tic();

		setTimeout( next, 0 );

		function next() {
			i += 1;
			if ( i <= b.iterations ) {
				return setTimeout( next, 0 );
			}
			b.toc();
			b.end();
		}
	}

	function onResult( result ) {
		if ( typeof result === 'object' && result.operator !== 'result' ) {
			flg = true;
		}
	}

	function onEnd() {
		t.notOk( flg, 'should not generate assertion' );
		b.exit();
		t.notOk( flg, 'should not generate assertion' );
		t.end();
	}
});
