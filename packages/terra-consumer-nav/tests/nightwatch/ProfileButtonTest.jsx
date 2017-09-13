import React from 'react';
import UserProfile from '../../src/components/user-profile/UserProfile';
import I18nShell from './I18nShell';

/* eslint-disable no-alert */
const defaultProps = {
  userName: 'Aegon Targaryen',
  signoutUrl: 'http://www.google.com',
  profileLinks: [],
  handleClick: () => { alert('callback to open popup'); },
};

const signinProps = {
  signinUrl: 'http://www.google.com',
  signoutUrl: 'http://www.google.com',
  handleClick: () => {},
};

const signoutProps = {
  signoutUrl: 'http://www.google.com',
  handleClick: () => {},
};

export default () => (
  <I18nShell>
    <div style={{ width: '320px' }}>
      <p>A default user profile:</p>
      <UserProfile {...defaultProps} />
      <p>A sign in link when no user info is given, but a sign in link is:</p>
      <UserProfile {...signinProps} />
      <p>A sign out link when no user info or a sign in link is given:</p>
      <UserProfile {...signoutProps} />
    </div>
  </I18nShell>
);
