import React, {useRef} from 'react'
import './App.css'
import Toggle from './Toggle'
import {useTitleInput} from './hooks/useTitleInput'

const App = () => {
	const [name, setName] = useTitleInput('')
	const ref = useRef()

	return (
		<div className="main-wrapper" ref={ref}>
			<h1 onClick={() => ref.current.classList.toggle('new-class')}>React Hooks</h1>
			<Toggle>
				<h2>Hello!</h2>
			</Toggle>
			<form onSubmit={ev => {
				ev.preventDefault()
			}}>
				<input type="text" onChange={ev => setName(ev.target.value)} value={name} />
				<button type="submit">Submit</button>
			</form>
		</div>
	)
}

export default App
