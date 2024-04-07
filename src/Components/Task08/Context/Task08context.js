import { createContext, useState } from 'react'

import { v4 as uuidv4 } from 'uuid'

const Task08context = createContext()

export const ToDoListCotext = ({ children }) => {
	let currentDate = new Date().toISOString().slice(0, 10)

	const [inputTask, setInputTask] = useState('')

	const [priority, setPriority] = useState(false)

	const [date, setDate] = useState(currentDate)

	const [taskDoLength, setTaskDoLenght] = useState(0)

	const [taskDo, setTaskDo] = useState([
		{
			id: uuidv4(),
			task: '',
			important: false,
			taskDate: '',
			button: false,
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
					important: true,
					taskDate: date,
					button: true,
				},
			])
			setTaskDoLenght(taskDo.length)
		} else if (inputTask !== '' && !priority && date !== currentDate) {
			setTaskDo(prevTaskDo => [
				...prevTaskDo,
				{
					id: uuidv4(),
					task: inputTask,
					important: false,
					taskDate: date,
					button: true,
				},
			])
			setTaskDoLenght(taskDo.length)
		}

		setDate(currentDate)
		setInputTask('')
		setPriority(false)
	}

	console.log(taskDo)

	return (
		<Task08context.Provider
			value={{
				inputTask,
				priority,
				date,
				taskDoLength,
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
