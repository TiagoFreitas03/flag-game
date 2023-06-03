interface ResultsProps {
	correct: number
	incorrect: number
	time: string
}

export function Results({ correct, incorrect, time }: ResultsProps) {
	return (
		<div className="leading-loose">
			<h1 className="text-4xl font-bold mb-8">Estatisticas do jogo</h1>

			<div className="text-xl leading-10 text-center">
				<p>Corretas: {correct}</p>
				<p>Incorretas: {incorrect}</p>
				<p>Tempo: {time}</p>
			</div>

			<button
				onClick={() => window.location.reload()}
				className="bg-gray-900 hover:bg-gray-700 text-white p-4 rounded-lg w-full mt-8"
			>
				Jogar Novamente
			</button>
		</div>
	)
}
