import { useState } from 'react'

import { Landing } from "./screens/Landing"
import { Game } from './screens/Game'
import { Results } from './screens/Results'
import { countries } from './assets/countries'
import { Country } from './interfaces/Country'

export function App() {
	const [started, setStarted] = useState(false)
	const [finished, setFinished] = useState(false)
	const [results, setResults] = useState<{ correct: number, incorrect: number, time: string }>()
	const [filteredCountries, setFilteredCountries] = useState<Country[]>(countries)

	return (
		<div className="w-screen h-screen flex justify-center items-center">
			<div className="bg-gray-200 max-w-[960px] w-full max-h-[560px] h-full flex flex-col gap-8 justify-center items-center overflow-x-auto">
				{
					!started ?
						<Landing
							onClickStart={(region) => {
								if (['África', 'América', 'Ásia', 'Europa', 'Oceania'].includes(region)) {
									setFilteredCountries(countries.filter(country => country.continents.includes(region)))
								}

								setStarted(true)}
							}
						/> :
						!finished ?
							<Game
								started={started}
								countries={filteredCountries}
								onComplete={(correct, incorrect, time) => {
									setResults({ correct, incorrect, time })
									setFinished(true)
								}}
							/> :
							<Results correct={results!.correct} incorrect={results!.incorrect} time={results!.time} />
				}
			</div>
		</div>
	)
}
