/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


import Head from 'next/head';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Button, Container, Typography } from '@mui/material';
import styles from '../styles/landing.module.scss';
import { EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const REDIRECT_PAGE = '/dashboard';

// Configure FirebaseUI
const uiConfig = {
  signInFlow: 'popup', // singIn flow with popup rather than redirect flow
  signInSuccessUrl: REDIRECT_PAGE,
  signInOptions: [
    EmailAuthProvider.PROVIDER_ID,
    GoogleAuthProvider.PROVIDER_ID,
  ]
}

export default function Home() {
  const [login, setLogin] = useState(false);

  return (
    <div>
      <Head>
        <title>Expense Tracker</title>
      </Head>

      <main>
        <Container className={styles.container}>
          <Typography variant="h1">Welcome to Expense Tracker!</Typography>
          <Typography variant="h2">Add, view, edit, and delete expenses</Typography>
          <div className={styles.buttons}>
            <Button variant="contained" color="secondary"
              onClick={() => setLogin(true)}>
              Login / Register
            </Button>
          </div>
          <Dialog open={login} onClose={() => setLogin(false)}>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth}></StyledFirebaseAuth>
          </Dialog>  
        </Container>
      </main>
    </div>);
}