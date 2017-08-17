import { IconPathDetails } from '../config';

class ReactIcon {
  constructor(name, component) {
    this.name = name;
    this.file = `${IconPathDetails.iconDir}${name}.jsx`;
    this.component = component;
  }
}

export default ReactIcon;
