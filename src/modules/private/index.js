import { Switch } from 'react-router-dom';
import PrivateRoutes from '../../routes/PrivateRoutes';
import { PrivateLayout } from '../../layouts';

const { Browse } = require("./views/browse")

const Private = () => {
	return (
		<div>
			<Switch>
				<PrivateRoutes exact={true} layout={PrivateLayout} path="/browse" component={Browse}/>
			</Switch>
		</div>
	)
}

export default Private
