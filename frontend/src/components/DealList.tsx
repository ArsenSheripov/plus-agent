import React, { FC } from 'react'
import { IDeals } from '../types';
import DealItem from './DealItem';

interface DealsListProps {
	deals: IDeals[]
}

const DealList: FC<DealsListProps> = ({ deals }) => {
	return (
		<div className='App__deal-list deal-list'>
			{deals.map((deal, index) =>
				<DealItem deal={{ ...deal, num: index + 1 }} key={deal.id} />
			)}
		</div>
	)
}

export default DealList;