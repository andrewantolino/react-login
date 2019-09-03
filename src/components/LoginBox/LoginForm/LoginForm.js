import React, { Component } from 'react';

import { 
  Header,
  Grid,
  Form,
  Button,
  Checkbox } from 'semantic-ui-react';
import styles from './LoginForm.module.css';
import { FormField } from 'semantic-ui-react';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Grid centered columns={3}>
        <Grid.Column className={styles.LoginForm}>
          <Header as="h2" className={styles.Header}>Login</Header>
          <Form>
            <Form.Field>
              <label>Username</label>
              <input placeholder="Username" />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input placeholder="Password" type="password" />
            </Form.Field>
            <Form.Field>
              <Checkbox label="Remember me for next time" />
            </Form.Field>
            <Button type="submit">Login</Button>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

export default LoginForm;