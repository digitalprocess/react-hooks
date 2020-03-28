import { useLayoutEffect } from 'react'

export function useLockBodyScroll() {
	useLayoutEffect(() => {
		const originalOverflow = window.getComputedStyle(document.body).overflow
		console.log(originalOverflow)
		document.body.style.overflow = 'hidden'

		//cleanup
		return () => {
			document.body.style.overflow = originalOverflow
		};
	}, [])
}
