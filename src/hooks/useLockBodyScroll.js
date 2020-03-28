import { useLayoutEffect } from 'react'

export function useLockBodyScroll() {
	useLayoutEffect(() => {
		document.body.style.overflow = 'hidden'
	}, [])
}
