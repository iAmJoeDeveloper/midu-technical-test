import React, { useEffect, useState } from 'react'

const App = () => {
	const [catFact, setCatFact] = useState('')

	const apiCat = () => {
		fetch('https://catfact.ninja/fact')
			.then((response) => response.json())
			.then((data) => {
				setCatFact(data.fact.split(' ').slice(0, 3).join(' '))
				console.log(data.fact)
			})
	}

	useEffect(() => {
		apiCat()
	}, [])

	return <h1>{catFact}</h1>
}

export default App
