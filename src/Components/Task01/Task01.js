import React from 'react'
import FirstTask01 from './FirstTask01'
import { AddFunctionsTask01Provider } from './Context/Task01Context'

const Task01 = () => {
	return (
		<AddFunctionsTask01Provider>
			<FirstTask01 />
		</AddFunctionsTask01Provider>
	)
}

export default Task01
