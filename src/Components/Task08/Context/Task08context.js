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
	const [textLength, setTextLength] = useState('')
	const [infoTaskDoLength, setInfoTasdDoLength] = useState('')

	const [taskDone, setTaskDone] = useState([])

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
			setTextLength('osiągnąłeś maksymalną ilość znaków')
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
		if (taskDo.length <= 6) {
			setInfoTasdDoLength('')
		}
	}, [taskDo.length])

	const handleAddTaskDo = () => {
		if (inputTask !== '' && priority && taskDo.length <= 6) {
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
		} else if (inputTask !== '' && !priority && taskDo.length <= 6) {
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
		} else if (taskDo.length > 6) {
			setInfoTasdDoLength('masz za dużo zadań. Musisz je zrealizować bo możesz nie podołać')
			setError('')
		}

		if (inputTask === '') {
			setError('nie wypełniłeś poprawnie formularza')
		} else {
			setError('')
		}

		if (taskDo.length !== 7) {
			setDate(currentDate)
			setInputTask('')
			setPriority(false)
			setTextLength('')
		}
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

	const handleTaskDone = id => {
		const addToDone = taskDo.filter(item => item.id !== id)
		setTaskDone(prevState => [...prevState, addToDone])
		setTaskDo(addToDone)
	}

	return (
		<Task08context.Provider
			value={{
				inputTask,
				priority,
				date,
				taskDoLength,
				taskDo,
				error,
				textLength,
				infoTaskDoLength,
				taskDone,
				handleChangeInputTask,
				handleChangePriority,
				handleChangeDate,
				handleAddTaskDo,
				handleDeleteTask,
				handleTaskDone,
			}}
		>
			{children}
		</Task08context.Provider>
	)
}

export default Task08context
