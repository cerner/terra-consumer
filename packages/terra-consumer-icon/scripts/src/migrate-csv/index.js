/* eslint-disable import/no-extraneous-dependencies */
import fs from 'fs';
import shell from 'shelljs';
import { IconRepo, IconPathDetails } from '../config';
// TODO: TerraConsumerIcon and new csv path instead of CernerOneIcons

/* eslint-enable import/no-extraneous-dependencies */

// remove current csv file
// TODO replace csvFile with the new mapping file
shell.rm('-r', IconPathDetails.csvFile);

fs.createReadStream(IconRepo.csvFile).pipe(fs.createWriteStream(IconPathDetails.csvFile));

// eslint-disable-next-line no-console
console.log(`Copied ${IconRepo.csvFile} to ${IconPathDetails.csvFile}`);
