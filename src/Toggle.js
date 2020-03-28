import React, { useState, useContext } from "react";
import {UserContext} from './App'

const Toggle = ({children}) => {
	const [isToggled, setIsToggled] = useState(false)
	const userInfo = useContext(UserContext)
	console.log('userInfo: ', userInfo)
	if (!userInfo.user) return null

	return (
		<div>
			<button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
			{isToggled && children}
		</div>
	)
}

export default Toggle


// export default class Refactor extends Component {
// 	state = {
// 		isToggled: false
// 	};

// 	toggle = () => {
// 		this.setState(state => {
// 			return { isToggled: !state.isToggled };
// 		});
// 	};

// 	render() {
// 		return (
// 			<div>
// 				<button onClick={this.toggle}>Toggle</button>
// 				{this.state.isToggled && <h2>Hello!</h2>}
// 			</div>
// 		);
// 	}
// }


