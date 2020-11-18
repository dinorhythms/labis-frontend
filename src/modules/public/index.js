import { Switch } from 'react-router-dom';
import { DefaultLayout } from '../../layouts';
import PublicRoutes from '../../routes/PublicRoutes';
import { Landing } from './views/landing';
import { Signin } from './views/signin';

const Public = () => {

	return (
		<div>
			<Switch>
				<PublicRoutes exact={true} layout={DefaultLayout} path="/" component={Landing}/>
				<PublicRoutes exact={true} layout={DefaultLayout} path="/signin" component={Signin}/>
			</Switch>
		</div>
	)
}

export default Public;
