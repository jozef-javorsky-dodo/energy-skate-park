// Copyright 2023, University of Colorado Boulder

/**
 * Artwork representing characters from the USA.
 *
 * @author Marla Schulz (PhET Interactive Simulations)
 *
 */

import cat_headshot_png from '../../../images/cat_headshot_png.js';
import cat_left_png from '../../../images/cat_left_png.js';
import cat_right_png from '../../../images/cat_right_png.js';
import dog_headshot_png from '../../../images/dog_headshot_png.js';
import dog_left_png from '../../../images/dog_left_png.js';
import dog_right_png from '../../../images/dog_right_png.js';
import skater1_set1_headshot_png from '../../../images/skater1_set1_headshot_png.js';
import skater1_set1_left_png from '../../../images/skater1_set1_left_png.js';
import skater1_set1_right_png from '../../../images/skater1_set1_right_png.js';
import skater2_set1_headshot_png from '../../../images/skater2_set1_headshot_png.js';
import skater2_set1_left_png from '../../../images/skater2_set1_left_png.js';
import skater2_set1_right_png from '../../../images/skater2_set1_right_png.js';
import skater3_set1_headshot_png from '../../../images/skater3_set1_headshot_png.js';
import skater3_set1_left_png from '../../../images/skater3_set1_left_png.js';
import skater3_set1_right_png from '../../../images/skater3_set1_right_png.js';
import skater4_set1_headshot_png from '../../../images/skater4_set1_headshot_png.js';
import skater4_set1_left_png from '../../../images/skater4_set1_left_png.js';
import skater4_set1_right_png from '../../../images/skater4_set1_right_png.js';
import skater5_set1_headshot_png from '../../../images/skater5_set1_headshot_png.js';
import skater5_set1_left_png from '../../../images/skater5_set1_left_png.js';
import skater5_set1_right_png from '../../../images/skater5_set1_right_png.js';
import skater6_set1_headshot_png from '../../../images/skater6_set1_headshot_png.js';
import skater6_set1_left_png from '../../../images/skater6_set1_left_png.js';
import skater6_set1_right_png from '../../../images/skater6_set1_right_png.js';
import EnergySkateParkStrings from '../../EnergySkateParkStrings.js';
import { portrayalsTandem } from '../model/EnergySkateParkPreferencesModel.js';
import SkaterCharacterSet from './SkaterCharacterSet.js';
import SkaterImageSet from './SkaterImageSet.js';

const unitedStatesOfAmericaString = EnergySkateParkStrings.characterSet.unitedStatesOfAmericaStringProperty;

const SkaterCharacterSetUSA = new SkaterCharacterSet(
  unitedStatesOfAmericaString,
  new SkaterImageSet( skater1_set1_left_png, skater1_set1_right_png, skater1_set1_headshot_png ),
  new SkaterImageSet( skater2_set1_left_png, skater2_set1_right_png, skater2_set1_headshot_png ),
  new SkaterImageSet( skater3_set1_left_png, skater3_set1_right_png, skater3_set1_headshot_png ),
  new SkaterImageSet( skater4_set1_left_png, skater4_set1_right_png, skater4_set1_headshot_png ),
  new SkaterImageSet( skater5_set1_left_png, skater5_set1_right_png, skater5_set1_headshot_png ),
  new SkaterImageSet( skater6_set1_left_png, skater6_set1_right_png, skater6_set1_headshot_png ),
  new SkaterImageSet( cat_left_png, cat_right_png, cat_headshot_png ),
  new SkaterImageSet( dog_left_png, dog_right_png, dog_headshot_png ),
  {
    tandem: portrayalsTandem.createTandem( 'skaterPortrayalUSA' ),
    phetioState: false
  } );

export default SkaterCharacterSetUSA;