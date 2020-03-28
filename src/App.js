import React, {useRef, createContext, useMemo} from 'react'
import {useTitleInput} from './hooks/useTitleInput'

import './App.css'

import Toggle from './Toggle'
import Counter from './Counter'

export const UserContext = createContext()

const App = () => {
	const [name, setName] = useTitleInput('')
	const ref = useRef()

	const reverseWord = word => {
		return word
			.split('')
			.reverse()
			.join('')
	}

	const title = 'React Hooks'
	const TitleReversed = useMemo(() => reverseWord(title), [title])

	return (
		<UserContext.Provider
			value={{
				user: true
			}}
		>
			<div className="main-wrapper" ref={ref}>
				<h1
					onClick={() => ref.current.classList.toggle('new-class')}
				>
					{TitleReversed}
				</h1>
				<Toggle>
					<h2>Hello!</h2>
				</Toggle>
				<Counter />
				<form onSubmit={ev => {
					ev.preventDefault()
				}}>
					<input type="text" onChange={ev => setName(ev.target.value)} value={name} />
					<button type="submit">Submit</button>
				</form>
			</div>
		</UserContext.Provider>
	)
}

export default App
