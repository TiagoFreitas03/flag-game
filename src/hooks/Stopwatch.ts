import { useEffect, useState } from "react"

export function useStopwatch() {
	const [time, setTime] = useState(0)
	const [timeoutId, setTimeoutId] = useState<number>()
	const [running, setRunning] = useState(false)

	const minutes = Math.floor(time / 60)
	const seconds = String(time % 60).padStart(2, '0')

	const start = () => setRunning(true)

	function stop() {
		setRunning(false)

		if (timeoutId)
		clearTimeout(timeoutId)
	}

	useEffect(() => {
		if (running) {
			const id = setTimeout(() => setTime(state => state + 1), 1000)
			setTimeoutId(id)
		}
	}, [running, time])

	return {
		start,
		stop,
		time: `${minutes}:${seconds}`
	}
}
