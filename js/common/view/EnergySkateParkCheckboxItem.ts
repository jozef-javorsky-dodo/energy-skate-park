// Copyright 2018-2025, University of Colorado Boulder

/**
 * A Checkbox in EnergySkatePark, which includes a label and an icon. Icons are generally aligned with other checkboxes
 * in the group, and this is handled by collecting all icons into a shared AlignGroup.
 *
 * @author Jesse Greenberg (PhET Interactive Simulations)
 */

import BooleanProperty from '../../../../axon/js/BooleanProperty.js';
import PhetioProperty from '../../../../axon/js/PhetioProperty.js';
import Property from '../../../../axon/js/Property.js';
import Range from '../../../../dot/js/Range.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import { Shape } from '../../../../kite/js/imports.js';
import merge from '../../../../phet-core/js/merge.js';
import optionize from '../../../../phet-core/js/optionize.js';
import IntentionalAny from '../../../../phet-core/js/types/IntentionalAny.js';
import GaugeNode from '../../../../scenery-phet/js/GaugeNode.js';
import { Circle, Line, Node, Path, PressListener, Rectangle } from '../../../../scenery/js/imports.js';
import Checkbox, { CheckboxOptions } from '../../../../sun/js/Checkbox.js';
import Tandem from '../../../../tandem/js/Tandem.js';
import energySkatePark from '../../energySkatePark.js';
import EnergySkateParkStrings from '../../EnergySkateParkStrings.js';
import EnergySkateParkColorScheme from './EnergySkateParkColorScheme.js';

const propertiesSpeedStringProperty = EnergySkateParkStrings.speedometer.labelStringProperty;

type SelfOptions = {

  // whether or not the user has controlled this checkbox
  // we set to true if we detect input on this control. The simulation has
  // different behavior for when the user directly controls the Checkbox Property
  // vs whether the Property gets set internally by the simulation
  userControlledProperty?: BooleanProperty | null;
};

type EnergySkateParkCheckboxItemOptions = SelfOptions & CheckboxOptions;

export default class EnergySkateParkCheckboxItem extends Checkbox {

  public constructor( property: PhetioProperty<boolean>, icon: Node, tandem: Tandem, providedOptions?: EnergySkateParkCheckboxItemOptions ) {

    const options = optionize<EnergySkateParkCheckboxItemOptions, SelfOptions, CheckboxOptions>()( {
      userControlledProperty: null,
      tandem: tandem
    }, providedOptions );

    super( property, icon, options );

    if ( options.userControlledProperty ) {

      // add a listener to the Checkbox that resets the data upon user interaction
      const userControlledListener = new PressListener( {
        press: () => options.userControlledProperty!.set( true ),
        release: () => options.userControlledProperty!.set( false )
      } );
      this.addInputListener( userControlledListener );
    }
  }

  public static createPieChartIcon( tandem: Tandem, options?: IntentionalAny ): Node {
    // eslint-disable-next-line phet/bad-typescript-text
    options = merge( {
      scale: 1
    }, options );

    const radius = 10;
    const arc = new Shape().moveTo( 0, 0 ).ellipticalArc( 0, 0, radius, radius, 0, -Math.PI / 2, 0, false ).lineTo( 0, 0 );
    return new Node( {
      tandem: tandem,
      children: [
        new Circle( radius, { fill: EnergySkateParkColorScheme.potentialEnergy, lineWidth: 0.5, stroke: 'black' } ),
        new Path( arc, {
          tandem: tandem.createTandem( 'kineticEnergyArc' ),
          fill: EnergySkateParkColorScheme.kineticEnergy, lineWidth: 0.5, stroke: 'black'
        } )
      ],
      scale: options.scale
    } );
  }

  /**
   * An icon for the grid.
   */
  public static createGridIcon( tandem: Tandem, options?: IntentionalAny ): Node {
    // eslint-disable-next-line phet/bad-typescript-text
    options = merge( {
      scale: 1
    }, options );
    return new Node( {
      tandem: tandem,
      children: [
        new Rectangle( 0, 0, 20, 20, { fill: 'white', stroke: 'black', lineWidth: 0.5 } ),
        new Line( 0, 10, 20, 10, { stroke: 'black', lineWidth: 1 } ),
        new Line( 0, 5, 20, 5, { stroke: 'black', lineWidth: 0.5 } ),
        new Line( 0, 15, 20, 15, { stroke: 'black', lineWidth: 0.5 } ),
        new Line( 10, 0, 10, 20, { stroke: 'black', lineWidth: 1 } ),
        new Line( 5, 0, 5, 20, { stroke: 'black', lineWidth: 0.5 } ),
        new Line( 15, 0, 15, 20, { stroke: 'black', lineWidth: 0.5 } )
      ],
      scale: options.scale
    } );
  }

  /**
   * An icon for the speedometer.
   */
  public static createSpeedometerIcon( tandem: Tandem, options?: IntentionalAny ): Node {
    // eslint-disable-next-line phet/bad-typescript-text
    options = merge( {
      scale: 1
    }, options );
    const gaugeNode = new GaugeNode( new Property( 0 ), propertiesSpeedStringProperty, new Range( 0, 10 ),
      {
        pickable: false,
        tandem: tandem.createTandem( 'gaugeNode' )
      } );
    gaugeNode.scale( ( 20 / gaugeNode.width ) * options.scale );
    return gaugeNode;
  }

  /**
   * An icon for the reference height control.
   */
  public static createReferenceHeightIcon( tandem: Tandem ): Node {

    // a dashed, stroked line will be drawn with overlapping rectangles, the background rectangle is slightly taller
    // to mimic stroke
    const width = 19.65;
    const height = 3.7;
    const lineDash = [ width / 5, width / 5 ]; // produces 3 segments
    const lineShape = Shape.lineSegment( 0, 0, width, 0 );
    const backgroundLine = new Path( lineShape, {
      lineDash: lineDash,
      lineWidth: height,
      stroke: EnergySkateParkColorScheme.referenceLineStroke
    } );
    const foregroundLine = new Path( lineShape, {
      lineDash: lineDash,
      lineWidth: height * 0.8,
      stroke: EnergySkateParkColorScheme.referenceLineFill
    } );

    return new Node( { children: [ backgroundLine, foregroundLine ] } );
  }

  /**
   * An icon for the "Path" control.
   */
  public static createSamplesIcon( tandem: Tandem ): Node {

    const circleRadius = 3;

    // positions of circles, for circles and path
    const pointDistance = 3 * circleRadius;
    const firstCenter = new Vector2( -pointDistance, -pointDistance );
    const secondCenter = new Vector2( 0, 0 );
    const thirdCenter = new Vector2( pointDistance, -pointDistance );

    // create three circles
    const circleShape = new Shape();
    circleShape.circle( firstCenter, circleRadius ).newSubpath()
      .circle( secondCenter, circleRadius ).newSubpath()
      .circle( thirdCenter, circleRadius );
    const circlesPath = new Path( circleShape, {
      fill: EnergySkateParkColorScheme.pathFill,
      stroke: EnergySkateParkColorScheme.pathStroke
    } );

    // line connecting each circle
    const lineShape = new Shape().moveToPoint( firstCenter )
      .quadraticCurveToPoint( firstCenter.plusXY( 0, pointDistance ), secondCenter )
      .quadraticCurveToPoint( thirdCenter.plusXY( 0, pointDistance ), thirdCenter );
    const linePath = new Path( lineShape, {
      stroke: EnergySkateParkColorScheme.pathStroke,
      lineWidth: 1
    } );

    return new Node( { children: [ linePath, circlesPath ] } );
  }

  /**
   * Create an icon for the "Sticking to Track" checkbox, a small section of track with the skater's center of
   * mass dot on it.
   */
  public static createStickingToTrackIcon(): Node {
    const iconWidth = 19;

    const trackRectangle = new Rectangle( 0, 0, iconWidth, 6.8, {
      fill: EnergySkateParkColorScheme.roadFill
    } );

    const trackDashes = new Line( 0, 0, iconWidth, 0, {
      fill: EnergySkateParkColorScheme.roadLine,
      stroke: EnergySkateParkColorScheme.roadLine,
      center: trackRectangle.center,
      lineWidth: 1,
      lineDash: [ 2.5, 1.8 ]
    } );

    const centerOfMassCircle = new Circle( 2, {
      fill: EnergySkateParkColorScheme.particleCircle,
      opacity: 0.7,
      center: trackRectangle.center
    } );

    return new Node( { children: [ trackRectangle, trackDashes, centerOfMassCircle ] } );
  }
}

energySkatePark.register( 'EnergySkateParkCheckboxItem', EnergySkateParkCheckboxItem );