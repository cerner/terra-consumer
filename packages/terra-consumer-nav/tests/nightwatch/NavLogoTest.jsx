import React from 'react';
import NavLogo from '../../src/components/nav-logo/NavLogo';
import I18nShell from './I18nShell';

const logoWithOutURL = {
  url: '',
  altText: 'Nike',
  isCard: true,
};

const logoWithURL = {
  url: 'http://photos.prnewswire.com/prnfull/20140210/DC61972LOGO',
  altText: 'Placeholder logo',
  isCard: true,
};

const logoWithURL2 = {
  url: 'http://therunnersflat.com/wp-content/uploads/2014/05/RF-Mark-Revs-V1.png',
  altText: 'Placeholder logo',
  isCard: false,
};

const styles = Object.assign({}, { maxWidth: '250px' });


export default () => (
  <I18nShell>
    <h2>Client wants text as logo </h2>
    <div>
      <NavLogo {...logoWithOutURL} style={styles} />
    </div>
    <h2>Client has logo</h2>
    <div>
      <NavLogo {...logoWithURL} style={styles} />
    </div>
    <div>
      <NavLogo {...logoWithURL2} style={styles} />
    </div>
  </I18nShell>
);
