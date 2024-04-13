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

	const [taskDoList, setTaskDoList] = useState([])
	const [taskDoneList, setTaskDoneList] = useState([])

	const [taskDo, setTaskDo] = useState([
		{
			id: uuidv4(),
			task: '',
			important: priority,
			taskDate: '',
		},
	])

	const handleChangeInputTask = e => {
		if (inputTask.length < 28) {
			setInputTask(e.target.value)
		}
	}

	const handleChangePriority = () => {
		setPriority(!priority)
	}

	const handleChangeDate = e => {
		setDate(e.target.value)
	}

	useEffect(() => {
		if (inputTask.length === 28) {
			setTextLength('osiągnąłeś maksymalną ilość znaków')
		} else {
			setTextLength('')
		}
	}, [inputTask.length])

	useEffect(() => {
		setTaskDoLenght(taskDoList.length)
		if (taskDoList.length <= 6) {
			setInfoTasdDoLength('')
		}
	}, [taskDoList.length])

	useEffect(() => {
		setTaskDo({
			id: uuidv4(),
			task: inputTask,
			important: priority,
			taskDate: date,
		})
	}, [date, inputTask, priority])

	useEffect(() => {
		if (taskDoList.length >= 6) {
			setInfoTasdDoLength('masz za dużo zadań. Musisz je zrealizować bo możesz nie podołać')
			setError('')
		}
	}, [taskDoList.length])

	const handleAddTaskDo = () => {
		if (inputTask !== '' && priority && taskDoList.length < 6) {
			setTaskDoList(prevTaskDo => [...prevTaskDo, taskDo])
		} else if (inputTask !== '' && !priority && taskDoList.length < 6) {
			setTaskDoList(prevTaskDo => [...prevTaskDo, taskDo])
		}

		if (inputTask === '') {
			setError('nie wypełniłeś poprawnie formularza')
		} else {
			setError('')
		}

		if (taskDoList.length !== 6) {
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
		const deleteTask = taskDoList.filter(item => item.id !== id)
		setTaskDoList(deleteTask)
	}

	const handleTaskDone = id => {
		const addToDone = taskDoList.filter(item => item.id === id)
		setTaskDoneList([...taskDoneList, ...addToDone])
		const deleteTask = taskDoList.filter(item => item.id !== id)
		setTaskDoList(deleteTask)
	}

	const handleDeleteTaskDone = id => {
		const deleteTaskDone = taskDoneList.filter(item => item.id !== id)
		setTaskDoneList(deleteTaskDone)
	}

	return (
		<Task08context.Provider
			value={{
				inputTask,
				priority,
				date,
				taskDoLength,
				taskDoList,
				error,
				textLength,
				infoTaskDoLength,
				taskDoneList,
				handleChangeInputTask,
				handleChangePriority,
				handleChangeDate,
				handleAddTaskDo,
				handleDeleteTask,
				handleTaskDone,
				handleDeleteTaskDone,
			}}
		>
			{children}
		</Task08context.Provider>
	)
}

export default Task08context
