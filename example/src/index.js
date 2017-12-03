import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';

import { Bootstrap as theme } from 'a-theme-react';

Amplify.configure(aws_exports);

const federated = {
    google_client_id: 'replace with your client_id',
    facebook_app_id: 'replace with your app_id'
}

const app = <App theme={theme} federated={federated} />

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
