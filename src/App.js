import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PersonalWebsite from './../src/personal';
import './../src/assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" render={props => <PersonalWebsite {...props} />} />
			</Switch>
		</Router>
	);
}

export default App;
