import React, { FC } from 'react'
import { IDeals } from '../types';

interface DealItemProps {
	deal: IDeals
}

const DealItem: FC<DealItemProps> = ({ deal }) => {
	return (
		<div className='deal-list__deal-item deal-item'>
			<h2 className='deal-item__title'>{deal.num}.{deal.title}</h2>
			<p className='deal-item__time'>{deal.time}</p>
		</div>
	)
}

export default DealItem;