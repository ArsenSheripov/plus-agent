import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DealForm from './components/DealForm';
import DealList from './components/DealList';
import { IDeals } from './types';

function App() {
	const [deals, setDeals] = useState<IDeals[]>([]);

	useEffect(() => {
		fetchDeals()
	}, [])

	async function fetchDeals() {
		try {
			const response = await axios.get<IDeals[]>('https://jsonplaceholder.typicode.com/todos?_limit=20')
			setDeals(response.data)
		} catch (e) {
			alert(e)
		}
	}


	const createDeal = (newDeal: any) => {
		setDeals([...deals, newDeal])
	}

	return (
		<div className='App'>
			<DealForm create={createDeal} />
			<DealList deals={deals} />
		</div>
	)
}

export default App
