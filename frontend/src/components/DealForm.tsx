import React, { FC, useState } from 'react';

interface DealsFormProps {
	create: any
}

const DealForm: FC<DealsFormProps> = ({ create }) => {
	const [deal, setDeal] = useState({ title: '', time: '' });

	const addNewDeal = (e: any) => {
		e.preventDefault()
		const newDeal = {
			...deal, id: Date.now()
		}
		create(newDeal)
		setDeal({ title: '', time: '' })
	}


	return (
		<form className='App__form form'>
			<input
				className='form__input'
				value={deal.title}
				onChange={e => setDeal({ ...deal, title: e.target.value })}
				type="text"
				placeholder="Описание действия"
			/>
			<input
				className='form__input_time'
				value={deal.time}
				onChange={e => setDeal({ ...deal, time: e.target.value })}
				type="time"
				placeholder="Время действия"
			/>
			<button className='form__btn' onClick={addNewDeal}>Добавить действие</button>
		</form>
	)
}

export default DealForm;