import { createContext, useState } from 'react'

import { v4 as uuidv4 } from 'uuid'

const Task08context = createContext()

export const ToDoListCotext = ({ children }) => {
	let currentDate = new Date().toISOString().slice(0, 10)

	const [inputTask, setInputTask] = useState('')

	const [priority, setPriority] = useState(false)

	const [date, setDate] = useState(currentDate)

	const [taskDo, setTaskDo] = useState([
		{
			id: uuidv4(),
			task: '',
			important: priority,
			taskDate: '',
		},
	])

	const handleChangeInputTask = e => {
		setInputTask(e.target.value)
	}

	const handleChangePriority = () => {
		setPriority(!priority)
	}

	const handleChangeDate = e => {
		setDate(e.target.value)
	}

	const handleAddTaskDo = () => {
		if (inputTask !== '' && priority && date !== currentDate) {
			setTaskDo(prevTaskDo => [
				...prevTaskDo,
				{
					id: uuidv4(),
					task: inputTask,
					important: priority,
					taskDate: date,
				},
			])
			console.log('klik')
		}
	}

	if (taskDo.length > 1) {
		console.log(taskDo.length)
	}

	return (
		<Task08context.Provider
			value={{
				inputTask,
				priority,
				date,
				taskDo,
				handleChangeInputTask,
				handleChangePriority,
				handleChangeDate,
				handleAddTaskDo,
			}}
		>
			{children}
		</Task08context.Provider>
	)
}

export default Task08context
