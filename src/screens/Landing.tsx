import { useState } from "react"

interface LandingProps {
	onClickStart: (region: string) => void
}

export function Landing({ onClickStart }: LandingProps) {
	const [region, setRegion] = useState('')

	return (
		<>
			<h1 className="text-2xl font-semibold">
				Bem-vindo(a) ao Flag Game <i className="ml-2 far fa-flag" />
			</h1>

			<label>Selecione uma região:</label>

			<select
				value={region}
				onChange={e => setRegion(e.target.value)}
				className="rounded p-4 w-full max-w-xs"
			>
				<option value="">Todos os países</option>
				<option value="África">África</option>
				<option value="América">América</option>
				<option value="Ásia">Ásia</option>
				<option value="Europa">Europa</option>
				<option value="Oceania">Oceania</option>
			</select>

			<button
				className="text-xl text-white bg-gray-900 py-8 px-16 rounded-lg transition-colors hover:bg-gray-700"
				onClick={() => onClickStart(region)}
			>
				Iniciar Jogo <i className="ml-1 fas fa-play" />
			</button>
		</>
	)
}
