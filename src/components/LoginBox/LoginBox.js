import React from 'react';

import LoginForm from './LoginForm/LoginForm';
import styles from './LoginBox.module.css';
import { Container, Header } from 'semantic-ui-react';

const LoginBox = (props) => {
  return (
    <Container>
      <div className={styles.LoginBox}>
        <LoginForm />
      </div>
    </Container>
  )
}

export default LoginBox;