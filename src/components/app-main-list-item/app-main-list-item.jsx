import React from 'react'
import './app-main-list-item.css'

const AppMainListItem = ({ data }) => {
	const { name, proxy, core } = data

	return (
		<div className='item d-flex'>
			<span>{name}</span>
			<div className={'form-control inputValue'} placeholder={'Proxy'}>
				<pre>{formatData(proxy)}</pre>
			</div>
			<div className={'form-control inputValue'} placeholder={'Proxy'}>
				<pre>{formatData(core)}</pre>
			</div>
		</div>
	)
}

// Функция для форматирования данных
const formatData = data => {
	if (typeof data === 'object') {
		// Если данные являются объектом, преобразуем их в строку JSON
		return JSON.stringify(data, null, 2)
	} else {
		// Если данные не являются объектом, оставим их как есть
		return data
	}
}

export default AppMainListItem
