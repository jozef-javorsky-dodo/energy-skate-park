// Copyright 2020, University of Colorado Boulder

/**
 * @author Jesse Greenberg
 */

import merge from '../../../../../phet-core/js/merge.js';
import energySkatePark from '../../../energySkatePark.js';
import EnergySkateParkScreenView from '../../common/view/EnergySkateParkScreenView.js';
import SamplesCanvasNode from '../../measure/view/SamplesCanvasNode.js';

class EnergySkateParkSaveSampleScreenView extends EnergySkateParkScreenView {
  constructor( model, tandem, options ) {

    options = merge( {

      // {boolean} - true if
      drawSkaterPath: true
    }, options );
    super( model, tandem, options );

    // @private {SamplesCanvasNode|null}
    this.skaterSamplesNode = null;

    if ( options.drawSkaterPath ) {
      this.skaterSamplesNode = new SamplesCanvasNode( model, this.modelViewTransform );
      this.topLayer.addChild( this.skaterSamplesNode );
    }
  }

  /**
   * @public
   * @param {number} dt - in seconds
   */
  step( dt ) {
    if ( this.skaterSamplesNode ) {
      this.skaterSamplesNode.step( dt );
    }
  }
}


energySkatePark.register( 'EnergySkateParkSaveSampleScreenView', EnergySkateParkSaveSampleScreenView );

export default EnergySkateParkSaveSampleScreenView;