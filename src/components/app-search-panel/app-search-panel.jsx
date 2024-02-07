import {
	ChevronDownIcon,
	MagnifyingGlassCircleIcon,
} from '@heroicons/react/24/solid'
import { default as Add } from '@mui/icons-material/Add'
import './app-search-panel.css'

const AppSearchPanel = () => {
	return (
		<div className={'d-flex align-items-center search-panel'}>
			<button>
				<ChevronDownIcon className={'downOne'} />
			</button>
			<input
				type={'text'}
				className={'form-control search-filter me-5 search-input'}
				placeholder={'...'}
			/>
			<ChevronDownIcon className={'downTwo'} />
			<input
				type={'text'}
				className={'form-control me-5 search-input'}
				placeholder={'...'}
			/>
			<input
				type={'text'}
				className={'form-control search-input'}
				placeholder={'/127.0.0.1'}
			/>
			<input
				className='form-check-input checkbox ms-4'
				type='checkbox'
				value=''
				id='flexCheckDefault'
			></input>
			<label
				className='form-check-label checkbox-text ms-4 '
				htmlFor='flexCheckDefault'
			>
				Точное совпадение
			</label>
			<button>
				<MagnifyingGlassCircleIcon className={'search-icon'} />
			</button>
			<button>
				<Add size='medium' className={'addFilter'} />
			</button>
			<div className='search-action'>
				<div className='search-action-item'>
					<button className='button-menu-action-item'>Method</button>
				</div>
				<div className='search-action-item'>
					<button className='button-menu-action-item'>Method</button>
				</div>
			</div>
		</div>
	)
}
export default AppSearchPanel
