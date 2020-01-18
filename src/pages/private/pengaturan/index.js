import React from 'react';

//material-ui
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';

import { Switch, Route, Redirect } from 'react-router-dom';
// komponen halaman pengguna
import Pengguna from './pengguna';
import Toko from './toko';

// styles
import useStyles from './styles';

function Pengaturan(props) {

    const { location, history } = props;
    const classes = useStyles();
    const handleChangeTab = (event, value) => {

        history.push(value);
    }

    return (
        <Paper square>
            <Tabs
                value={location.pathname}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChangeTab}
            >
                <Tab label="Pengguna" value="/pengaturan/pengguna" />
                <Tab label="Toko" value="/pengaturan/toko" />
            </Tabs>
            <div className={classes.tabContent}>
                <Switch>
                    <Route path="/pengaturan/pengguna" component={Pengguna} />
                    <Route path="/pengaturan/toko" component={Toko} />
                    <Redirect to="/pengaturan/pengguna" />
                </Switch>
            </div>
        </Paper>
    )
}

export default Pengaturan;