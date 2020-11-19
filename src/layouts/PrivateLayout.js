import React from 'react';
import { Footer, PrivateHeader } from '../components';

const PrivateLayout = ({children}) => {
	
	return (
		<div>
			<PrivateHeader/>
        {children}
      <Footer/>
		</div>
	)
}

export default PrivateLayout

