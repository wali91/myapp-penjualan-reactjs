import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// komponen halaman
import Registrasi from './pages/registrasi';
import Login from './pages/login';
import LupaPassword from './pages/lupa-password';
import NotFound from './pages/404';
import Private from './pages/private';
import PrivateRoute from './components/PrivateRoute';

// firebase context provider
import FirebaseProvider from './components/FirebaseProvider';

// import komponen material-ui
import CssBaseline from '@material-ui/core/CssBaseline';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import theme from './config/theme';

// notistack

import {SnackbarProvider} from 'notistack';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
        <FirebaseProvider >
          <Router>
            <Switch>
              <PrivateRoute path="/" exact component={Private} />
              <PrivateRoute path="/pengaturan" component={Private} />
              <PrivateRoute path="/produk" component={Private} />
              <PrivateRoute path="/transaksi" component={Private} />
              <Route path="/registrasi" component={Registrasi} />
              <Route path="/login" component={Login} />
              <Route path="/lupa-password" component={LupaPassword} />
              <Route component={NotFound} />
            </Switch>

          </Router>
        </FirebaseProvider>
        </SnackbarProvider>

      </ThemeProvider>
      </React.Fragment>
  );
}

export default App;
