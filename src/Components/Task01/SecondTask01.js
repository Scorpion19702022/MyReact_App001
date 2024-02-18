import { useContext } from 'react'
import Task01Context from './Context/Task01Context'

const SecondTask01 = () => {
	const { test } = useContext(Task01Context)

	return (
		<div className={StyleSheet.wrapper_second_task01}>
			<h1>{test}</h1>
		</div>
	)
}

export default SecondTask01
