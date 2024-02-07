import {
	ChevronDoubleLeftIcon,
	ChevronDoubleRightIcon,
} from '@heroicons/react/24/outline'
import axios from 'axios'
import { useEffect, useState } from 'react'
import AppMainHeader from '../app-main-header/app-main-header'
import AppMainListItem from '../app-main-list-item/app-main-list-item'
import './app-main.css'

const AppMain = () => {
	const [data, setData] = useState([])
	const [page, setPage] = useState(1)
	const MAX_PAGES = 3

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`https://0a3de8e25f2eb0f8.mokky.dev/items${page}`
				)

				setData(response.data)
			} catch (error) {
				console.error('Error fetching:', error.message)
			}
		}
		fetchData()
	}, [page])

	const pageHandler = index => {
		if (index > 0 && index <= MAX_PAGES) {
			setPage(index)
		}
	}

	const dataArray = Array.isArray(data) ? data : []

	const rows = dataArray.map((item, index) => (
		<AppMainListItem key={index} data={item} />
	))

	return (
		<div>
			<div className={'mb-5'}>
				<AppMainHeader />
			</div>
			<div className={'main'}>
				{rows}
				<button
					onClick={() => {
						pageHandler(page - 1)
					}}
				>
					<ChevronDoubleLeftIcon className={'left'} />
				</button>
				<button
					onClick={() => {
						pageHandler(page + 1)
					}}
				>
					<ChevronDoubleRightIcon className={'right'} />
				</button>
			</div>
		</div>
	)
}

export default AppMain
