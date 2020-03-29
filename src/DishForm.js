import React from 'react'
import { useLockBodyScroll } from './hooks/useLockBodyScroll'
import { useTitleInput } from './hooks/useTitleInput'

const DishForm = () => {
	useLockBodyScroll()
	const [name, setName] = useTitleInput('')

	return (
		<div className="dish-card">
			<form onSubmit={ev => {
				ev.preventDefault()
			}}>
				<div className="form-row">
					<label htmlFor="name">Name: </label>
					<input type="text" id="name" onChange={ev => setName(ev.target.value)} value={name} />
				</div>
			</form>
		</div>
	)
}

export default DishForm
