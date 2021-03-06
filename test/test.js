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
var harness = require( './../harness' );
var bench = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof bench, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function is an alias for benchmark harness', function test( t ) {
	t.strictEqual( bench, harness, 'is alias' );
	t.end();
});

tape( 'attached to the main export is a method to create a harness', function test( t ) {
	t.strictEqual( typeof bench.createHarness, 'function', 'has method' );
	t.end();
});

tape( 'attached to the main export is a method to create a stream', function test( t ) {
	t.strictEqual( typeof bench.createStream, 'function', 'has method' );
	t.end();
});

tape( 'attached to the main export is a method to add a listener for when a harness has finished running all benchmarks', function test( t ) {
	t.strictEqual( typeof bench.onFinish, 'function', 'has method' );
	t.end();
});
