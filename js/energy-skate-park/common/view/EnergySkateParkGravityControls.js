// Copyright 2020, University of Colorado Boulder

/**
 * A collection of controls for EnergySkateParkControlPanel that pertain to gravity.
 *
 * @author Jesse Greenberg
 */

define( require => {
  'use strict';

  // modules
  const merge = require( 'PHET_CORE/merge' );
  const energySkatePark = require( 'ENERGY_SKATE_PARK/energySkatePark' );
  const GravityComboBox = require( 'ENERGY_SKATE_PARK/energy-skate-park/common/view/GravityComboBox' );
  const GravitySlider = require( 'ENERGY_SKATE_PARK/energy-skate-park/common/view/GravitySlider' );
  const GravityNumberControl = require( 'ENERGY_SKATE_PARK/energy-skate-park/common/view/GravityNumberControl' );
  const VBox = require( 'SCENERY/nodes/VBox' );

  // constants

  class EnergySkateParkGravityControls extends VBox {

    /**
     * @param {NumberProperty} gravityProperty
     * @param {Emitter} resetEmitter - broadcasts a message when the EnergySkateParkModel is reset
     * @param {Node} listParent - parent Node for the ComboBox, if one is included
     * @param {Tandem} tandem
     * @param {Object} [options]
     */
    constructor( gravityProperty, resetEmitter, listParent, tandem, options ) {

      options = merge( {

        // {boolean} - whether or not a GravitySlider is included in this set of controls, only GravitySlider or
        // GravityNumberControl can be used at one time
        includeGravitySlider: false,

        // {boolean} - whether or not a GravityNumberControl is included in this set of controls, only GravitySlider
        // or GravityNumberControl can be used at one time
        includeGravityNumberControl: true,

        // {boolean} - whether or not a GravityComboBox is included in this set of controls
        includeGravityComboBox: false,

        // {Object} - options passed to the GravityNumberControl, if one is included
        gravityNumberControlOptions: null,

        // {Object} - options passed to the GravityComboBox, if one is included
        gravityComboBoxOptions: null,

        // {Object} - options passed to the GravitySlider, if one is included
        gravitySliderOptions: null
      }, options );
      assert && assert( !( options.includeGravitySlider && options.includeGravityNumberControl ), 'only GravitySlider OR GravityNumberControl can be used at one time' );

      const children = [];

      let gravityNumberControl = null;
      if ( options.includeGravityNumberControl ) {
        gravityNumberControl = new GravityNumberControl( gravityProperty, tandem, options.gravityComboBoxOptions );
        children.push( gravityNumberControl );
      }

      let gravitySlider = null;
      if ( options.includeGravitySlider ) {
        gravitySlider = new GravitySlider( gravityProperty, tandem.createTandem( 'gravitySlider' ) );
        children.push( gravitySlider );
      }

      let gravityComboBox = null;
      if ( options.includeGravityComboBox ) {
        gravityComboBox = new GravityComboBox( gravityProperty, resetEmitter, listParent, tandem, options );
        children.push( gravityComboBox );
      }

      super( { resize: false, spacing: 8, children: children } );
    }
  }

  return energySkatePark.register( 'EnergySkateParkGravityControls', EnergySkateParkGravityControls );
} );