import { IconPathDetails } from '../config';

class csvObject {
  constructor(name, filepath, themeable, bidi) {
    this.name = name;
    // use current directory svg path
    this.svgSrc = `../../../tmp/svg/${filepath}`;
    this.svgDest = `${IconPathDetails.svgDir}${name}.svg`;
    this.isThemeable = !!themeable;
    this.isBidi = (bidi === 'bi-directional');
    this.isSpin = (name === 'spinner');
  }
}

export default csvObject;
