import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import ErrorBoundary from "./Error/errorboundary";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<ErrorBoundary>
					<App />
				</ErrorBoundary>
			</PersistGate>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
// reportWebVitals(console.log);
