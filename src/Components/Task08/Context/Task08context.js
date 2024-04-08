import { createContext, useEffect, useState } from 'react'

import { v4 as uuidv4 } from 'uuid'

const Task08context = createContext()

export const ToDoListCotext = ({ children }) => {
	let currentDate = new Date().toISOString().slice(0, 10)

	const [inputTask, setInputTask] = useState('')

	const [priority, setPriority] = useState(false)

	const [date, setDate] = useState(currentDate)

	const [taskDoLength, setTaskDoLenght] = useState(0)

	const [error, setError] = useState('')
	const [taskLength, setTaskLength] = useState('')

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
		if (inputTask.length < 30) {
			setInputTask(e.target.value)
		} else {
			setTaskLength('osiągnąłeś maksymalną ilość znaków')
		}
	}

	const handleChangePriority = () => {
		setPriority(!priority)
	}

	const handleChangeDate = e => {
		setDate(e.target.value)
	}

	useEffect(() => {
		setTaskDoLenght(taskDo.length - 1)
	}, [taskDo.length])

	// useEffect(() => {
	// 	if (inputTask.length > 30) {
	// 		setTaskLength('osiągnąłeś maksymalną ilość znaków')
	// 	}
	// }, [inputTask.length])

	const handleAddTaskDo = () => {
		if (inputTask !== '' && priority && inputTask.length <= 30) {
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
		} else if (inputTask !== '' && !priority && inputTask.length <= 30) {
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
		}

		if (inputTask === '') {
			setError('nie wypełniłeś poprawnie formularza')
		} else {
			setError('')
		}

		setDate(currentDate)
		setInputTask('')
		setPriority(false)
		setTaskLength('')
	}

	setTimeout(() => {
		if (error !== '') {
			setError('')
		}
	}, 3000)

	const handleDeleteTask = id => {
		const deleteTask = taskDo.filter(item => item.id !== id)
		setTaskDo(deleteTask)
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
				error,
				taskLength,
				handleChangeInputTask,
				handleChangePriority,
				handleChangeDate,
				handleAddTaskDo,
				handleDeleteTask,
			}}
		>
			{children}
		</Task08context.Provider>
	)
}

export default Task08context
