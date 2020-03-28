import React, {useState} from 'react'
import './App.css'

const App = () => {
	const [name, setName] = useState('')

	return (
		<div className="main-wrapper">
			<h1>React Hooks</h1>
			<input type="text" onChange={ev => setName(ev.target.value)} value={name} />
		</div>
	)
}

export default App
