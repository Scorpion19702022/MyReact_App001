import { createContext, useState } from 'react'

const Task05Context02 = createContext()

export const ActionTaskContext02 = ({ children }) => {
	const [celsius, setCelsius] = useState('℃')
	const [fare, setFare] = useState('℉')

	return <Task05Context02.Provider value={{ celsius, fare }}>{children}</Task05Context02.Provider>
}

export default Task05Context02
