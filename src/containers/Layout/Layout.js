import React from 'react';
import LoginBox from '../../components/LoginBox/LoginBox';

import { Container, Header } from 'semantic-ui-react';
import styles from './Layout.module.css';

const Layout = (props) => {
  return (
    <div className={styles.Layout}>
      <LoginBox />
    </div>
  );
}

export default Layout;