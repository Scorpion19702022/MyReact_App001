import { createContext, useState } from 'react'

const Task08context = createContext()

export const ToDoListCotext = ({ children }) => {
	let currentDate = new Date().toISOString().slice(0, 10)

	const [inputTask, setInputTask] = useState('')

	const [priority, setPriority] = useState(false)

	const [date, setDate] = useState(currentDate)

	const handleChangeInputTask = e => {
		setInputTask(e.target.value)
	}

	const handleChangePriority = () => {
		setPriority(!priority)
	}

	const handleChangeDate = e => {
		setDate(e.target.value)
	}

	return (
		<Task08context.Provider
			value={{ inputTask, priority, date, handleChangeInputTask, handleChangePriority, handleChangeDate }}
		>
			{children}
		</Task08context.Provider>
	)
}

export default Task08context
