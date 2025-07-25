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
var proxyquire = require( 'proxyquire' );
var TransformStream = require( '@stdlib/streams/node/transform' );
var string2buffer = require( '@stdlib/buffer/from-string' );
var createStream = require( './../lib/log' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof createStream, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a transform stream', function test( t ) {
	var stream = createStream();
	t.strictEqual( stream instanceof TransformStream, true, 'returns a transform stream' );
	t.end();
});

tape( 'the returned stream writes lines to the console (buffer)', function test( t ) {
	var createStream;
	var expected;
	var values;
	var stream;
	var i;
	var j;

	createStream = proxyquire( './../lib/log', {
		'./log.js': log
	});

	stream = createStream();

	values = [
		string2buffer( 'beep\n' ),
		string2buffer( 'bo\nop\n' ),
		string2buffer( 'foo' ),
		string2buffer( 'bar' ),
		string2buffer( '\nbaz\nbop' ),
		string2buffer( '\n' )
	];

	expected = [
		'beep',
		'bo',
		'op',
		'foobar',
		'baz',
		'bop',
		''
	];

	j = -1;
	for ( i = 0; i < values.length; i++ ) {
		stream.write( values[ i ] );
	}
	stream.end();
	t.end();

	function log( str ) {
		j += 1;
		t.strictEqual( str, expected[ j ], 'logs expected value' );
	}
});

tape( 'the returned stream writes lines to the console (strings)', function test( t ) {
	var createStream;
	var expected;
	var values;
	var stream;
	var i;
	var j;

	createStream = proxyquire( './../lib/log', {
		'./log.js': log
	});

	stream = createStream();

	values = [
		'beep\n',
		'bo\nop\n',
		'foo',
		'bar',
		'\nbaz\nbop',
		'\n'
	];

	expected = [
		'beep',
		'bo',
		'op',
		'foobar',
		'baz',
		'bop',
		''
	];

	j = -1;
	for ( i = 0; i < values.length; i++ ) {
		stream.write( values[ i ] );
	}
	stream.end();
	t.end();

	function log( str ) {
		j += 1;
		t.strictEqual( str, expected[ j ], 'logs expected value' );
	}
});

tape( 'the returned stream emits an error if unable to write a line to the console', function test( t ) {
	var createStream;
	var stream;

	createStream = proxyquire( './../lib/log', {
		'./log.js': log
	});

	stream = createStream();
	stream.on( 'error', onError );
	stream.on( 'close', onClose );
	stream.write( '\nbo\nop\n' );

	function log() {
		throw new Error( 'beep' );
	}

	function onError( err ) {
		t.strictEqual( err.message, 'beep', 'emits an error' );
		stream.destroy();
	}

	function onClose() {
		t.end();
	}
});
