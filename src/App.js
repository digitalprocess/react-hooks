import React, { useState, useEffect, useRef, createContext } from 'react'

import './App.css'

import Toggle from './Toggle'
import DishForm from './DishForm'

export const UserContext = createContext()

const App = () => {
	const ref = useRef()
	const [dishes, setDishes] = useState([])

	const fetchData = async () => {
		console.log('ran')
		const res = await fetch('https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes')
		const data = await res.json()
		setDishes(data)
	}

	useEffect(() => {
		fetchData();
	}, []); // this tells useEffect what to watch for when it changes

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
					React Hooks
				</h1>
				<Toggle isToggled={false}>
					<DishForm />
				</Toggle>

				{dishes.map(dish => (
					<article
						key={dish.name}
						className="dish-card dish-card--withImage"
					>
						<h3>{dish.name}</h3>
						<p>{dish.desc}</p>
						<div className="ingredients">
							{dish.ingredients.map(ingredient => (
								<span key={ingredient}>{ingredient}</span>
							))}
						</div>
					</article>
				))}
			</div>
		</UserContext.Provider>
	)
}

export default App
