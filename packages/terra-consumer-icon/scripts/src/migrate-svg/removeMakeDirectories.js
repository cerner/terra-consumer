/* eslint-disable import/no-extraneous-dependencies */
import shell from 'shelljs';
import { IconPathDetails } from '../config';

const removeMakeDirectories = () => {
  // Delete destination directory
  shell.rm('-rf', IconPathDetails.svgDir);

  // Create destination directories
  shell.mkdir(IconPathDetails.svgDir);
};

module.exports = removeMakeDirectories;
