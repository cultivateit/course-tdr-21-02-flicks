import { Redirect, Route, Switch } from 'react-router-dom'
import config from '../config'
import { BUILD_INFO, ERROR, ROOT, WELCOME } from '../domain/routes'
import BuildInfo from './common/pages/BuildInfo'
import Error from './common/pages/Error'
import NotFound from './common/pages/NotFound'
import Welcome from './common/pages/Welcome'

const Routes = () => (
  <Switch>
    <Redirect exact path={ROOT} to={WELCOME} />
    <Route exact path={BUILD_INFO}><BuildInfo {...config.buildInfo} /></Route>
    <Route exact path={ERROR}><Error /></Route>
    <Route exact path={WELCOME}><Welcome /></Route>
    <Route path='*'><NotFound /></Route>
  </Switch>
)

export default Routes
