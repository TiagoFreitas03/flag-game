import { useEffect, useState } from "react"

import { useStopwatch } from "../hooks/Stopwatch"
import { shuffleArray } from "../utils/shuffle-array"
import { Country } from "../interfaces/Country"

interface GameProps {
	started: boolean
	countries: Country[]
	onComplete: (correct: number, incorrect: number, time: string) => void
}

export function Game({ started, countries, onComplete }: GameProps) {
	const { start: startTime, stop: stopTime, time } = useStopwatch()

	const [current, setCurrent] = useState(0)
	const [available, setAvailable] = useState(Array.from({ length: countries.length }).map((_, i) => i))
	const [correctCountry, setCorrectCountry] = useState<typeof countries[0]>()
	const [options, setOptions] = useState<string[]>([])
	const [correct, setCorrect] = useState(0)
	const [completed, setCompleted] = useState(false)

	function drawFlagAndOptions() {
		const pos = Math.floor(Math.random() * available.length)
		const countryPos = available[pos]
		const auxOptions = [countries[countryPos].name]

		while (auxOptions.length < 4) {
			const { name } = countries[Math.floor(Math.random() * countries.length)]

			if (!auxOptions.includes(name)) {
				auxOptions.push(name)
			}
		}

		setCorrectCountry(countries[countryPos])
		setOptions(shuffleArray(auxOptions))

		const updatedAvailable = available.slice()
		updatedAvailable.splice(pos, 1)
		setAvailable(updatedAvailable)
	}

	useEffect(() => {
		if (started) {
			drawFlagAndOptions()
			startTime()
		}
	}, [started])

	useEffect(() => {
		if (completed) {
			onComplete(correct, countries.length - correct, time)
		}
	}, [completed])

	function handleAnswerClick(option: string) {
		if (option === correctCountry!.name) {
			setCorrect(state => state + 1)
		}

		if (available.length > 0) {
			setCurrent(state => state + 1)
			drawFlagAndOptions()
			return
		}

		stopTime()
		setCompleted(true)
	}

	return (
		<div className="w-full h-full">
			<div className="flex justify-between py-6 px-8 text-lg">
				<p>{ current } / { countries.length }</p>

				<p>{ time }</p>
			</div>

			<div className="flex md:flex-row flex-col my-5">
				<div className="px-20 my-auto md:w-[50%]">
					<img
						src={`https://flagcdn.com/256x192/${correctCountry?.code.toLowerCase()}.png`}
						alt="Country Flag"
						className="mx-auto"
					/>
				</div>

				<div className="md:w-[50%]">
					{
						options.map((option) => (
							<button
								key={option}
								className="block bg-gray-900 text-white rounded-lg w-[90%] p-4 my-6 mx-auto hover:bg-gray-700"
								onClick={() => handleAnswerClick(option)}
							>
								{ option }
							</button>
						))
					}
				</div>
			</div>
		</div>
	)
}
