interface LandingProps {
	onClickStart: () => void
}

export function Landing({ onClickStart }: LandingProps) {
	return (
		<>
			<h1 className="text-2xl font-semibold">
				Bem-vindo(a) ao Flag Game <i className="ml-2 far fa-flag" />
			</h1>

			<button
				className="text-xl text-white bg-gray-900 py-8 px-16 rounded-lg transition-colors hover:bg-gray-700"
				onClick={onClickStart}
			>
				Iniciar Jogo <i className="ml-1 fas fa-play" />
			</button>
		</>
	)
}
