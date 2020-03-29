import React, { useState, useRef } from "react";
import { useOnClickOutside } from './hooks/useOnClickOutside'

const Toggle = ({children}) => {
	const [isToggled, setIsToggled] = useState(false)
	const ref = useRef()
	useOnClickOutside(ref, () => setIsToggled(false))

	return (
		<div>
			{isToggled ?
				<div ref={ref} className="Toggle-body">
					<button onClick={() => setIsToggled(!setIsToggled)}>Close</button>
					{children}
				</div>
				:
				<button onClick={() => setIsToggled(!isToggled)}>Open</button>
			}
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


