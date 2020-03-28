import React from 'react'
import { useLockBodyScroll } from './hooks/useLockBodyScroll'

const DishForm = () => {
	useLockBodyScroll();
	return (
		<div className="dish-card">
			<form action="">
				<div className="form-row">
					<label htmlFor="name">Name: </label>
					<input type="text" id="name" />
				</div>
			</form>
		</div>
	)
}

export default DishForm
