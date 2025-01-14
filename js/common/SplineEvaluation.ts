// Copyright 2013-2025, University of Colorado Boulder

/**
 * Use these modified variants of numeric.js spline code because they are much faster!
 * Code copied from numeric.js and hence licensed under MIT
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import energySkatePark from '../energySkatePark.js';

// https://github.com/sloisel/numeric/blob/master/src/numeric.js#L2423
export type Spline = {
  x: number[];
  yl: number[];
  yr: number[];
  kl: number[];
  kr: number[];
  diff(): Spline;
};

// The most important function for this sim in numeric.js is just too slow because it uses tensor versions of all functions.
// This version inlines everything.
const _at = ( spline: Spline, x1: number, p: number ) => {
  const x = spline.x;
  const yl = spline.yl;
  const yr = spline.yr;
  const kl = spline.kl;
  const kr = spline.kr;
  const a = ( kl[ p ] * ( x[ p + 1 ] - x[ p ] ) ) - ( yr[ p + 1 ] - yl[ p ] );
  const b = kr[ p + 1 ] * ( x[ p ] - x[ p + 1 ] ) + yr[ p + 1 ] - yl[ p ];
  const t = ( x1 - x[ p ] ) / ( x[ p + 1 ] - x[ p ] );
  const s = t * ( 1 - t );
  return ( ( 1 - t ) * yl[ p ] + t * yr[ p + 1 ] +
         a * s * ( 1 - t ) ) +
         b * s * t;
};

const atNumber = ( spline: Spline, x0: number ): number => {
  const x = spline.x;
  const n = x.length;
  let p;
  let q;
  let mid;
  const floor = Math.floor;
  p = 0;
  q = n - 1;
  while ( q - p > 1 ) {
    mid = floor( ( p + q ) / 2 );
    if ( x[ mid ] <= x0 ) {
      p = mid;
    }
    else {
      q = mid;
    }
  }
  return _at( spline, x0, p );
};

const atArray = ( spline: Spline, x0: number[] ): Float64Array => {
  const n = x0.length;
  let i;
  const ret = new Float64Array( n );
  for ( i = n - 1; i !== -1; --i ) {
    ret[ i ] = atNumber( spline, x0[ i ] );
  }
  return ret;
};

const SplineEvaluation = { atNumber: atNumber, atArray: atArray };

energySkatePark.register( 'SplineEvaluation', SplineEvaluation );

export default SplineEvaluation;