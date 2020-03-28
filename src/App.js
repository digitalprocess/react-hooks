import React, {useState} from 'react'
import './App.css'
import Toggle from './Toggle'

const App = () => {
	const [name, setName] = useState('')

	return (
		<div className="main-wrapper">
			<h1>React Hooks</h1>

			<Toggle>
				<h2>Hello!</h2>
			</Toggle>
			<form onSubmit={ev => {
				ev.preventDefault()
				formSubmt(name, setName)
			}}>
				<input type="text" onChange={ev => setName(ev.target.value)} value={name} />
				<button>Submit</button>
			</form>
		</div>
	)
}

const formSubmt = (value, setValue) => {
	console.log('email sent to ' + value + '!')
	setValue('')
}

export default App
