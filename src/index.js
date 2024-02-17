import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App/App'
import reportWebVitals from './reportWebVitals'
import { AddFunctionsTask01Provider } from './Components/Task01/Context/Task01Context'
import Task01 from './Components/Task01/Task01'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<App>
			<AddFunctionsTask01Provider>
				<Task01></Task01>
			</AddFunctionsTask01Provider>
		</App>
	</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
