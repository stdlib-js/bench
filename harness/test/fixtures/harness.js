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

var TransformStream = require( '@stdlib/streams/node/transform' );
var noop = require( '@stdlib/utils/noop' );
var isFunction = require( '@stdlib/assert/is-function' );


// MAIN //

/**
* Mock harness.
*
* @private
* @param {Options} options - options
* @param {Callback} clbk - callback
* @returns {Function} harness
*/
function createHarness( options, clbk ) {
	var cb;

	if ( arguments.length === 0 ) {
		cb = noop;
	} else if ( arguments.length === 1 ) {
		if ( isFunction( options ) ) {
			cb = options;
		} else {
			cb = noop;
		}
	} else {
		cb = clbk;
	}
	/**
	* Mock harness.
	*
	* @private
	*/
	function harness() {
		// No-op...
	}

	/**
	* Mock create stream.
	*
	* @private
	* @param {Options} [opts] - options
	* @returns {TransformStream} transform stream
	*/
	function createStream( opts ) {
		if ( arguments.length ) {
			return new TransformStream( opts );
		}
		return new TransformStream();
	}

	/**
	* Mock close.
	*
	* @private
	*/
	function closeHarness() {
		// No-op...
	}

	/**
	* Mock exit.
	*
	* @private
	*/
	function exit() {
		// No-op...
	}

	/**
	* Provides a hook for mock consumers to "end" a harness.
	*
	* @private
	*/
	function end() {
		setTimeout( onTimeout, 0 );
	}

	/**
	* Callback invoked upon a timeout.
	*
	* @private
	*/
	function onTimeout() {
		cb();
	}

	harness.createStream = createStream;
	harness.close = closeHarness;
	harness.exit = exit;
	harness.end = end;
	harness.exitCode = 0;

	return harness;
}


// EXPORTS //

module.exports = createHarness;
