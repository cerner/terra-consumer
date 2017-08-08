/* eslint-disable import/no-extraneous-dependencies */
import shell from 'shelljs';
import { IconPathDetails } from '../config';

const removeMakeDirectories = () => {
  // Delete destination directory
  shell.rm('-rf', IconPathDetails.iconDir);

  // Create destination directories
  shell.mkdir(IconPathDetails.iconDir);
};

module.exports = removeMakeDirectories;
