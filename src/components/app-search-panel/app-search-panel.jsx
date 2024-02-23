import SearchIcon from '@mui/icons-material/Search'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import React, { useState } from 'react'
import './app-search-panel.css'

const AppSearchPanel = () => {
	const [input1, setInput1] = useState('')
	const [input2, setInput2] = useState('')
	const [input3, setInput3] = useState('')
	const [inputCheckBox, setCheckBox] = useState('')

	const handleSearch = () => {
		console.log('Вывод:', input1, input2, input3, inputCheckBox)
	}

	const handleInputChange = setInputFunction => (event, newInputValue) => {
		if (newInputValue !== null && newInputValue !== undefined) {
			setInputFunction(newInputValue)
		} else {
			setInputFunction('')
		}
	}

	return (
		<div className={'d-flex align-items-center search-panel'}>
			<Autocomplete
				className={'search-filter me-1 search-input'}
				value={input1}
				onChange={handleInputChange(setInput1)}
				inputValue={input1}
				onInputChange={handleInputChange(setInput1)}
				options={[]}
				renderInput={params => <TextField {...params} />}
			/>
			<Autocomplete
				className={'search-filter me-1 search-input'}
				value={input2}
				onChange={handleInputChange(setInput2)}
				inputValue={input2}
				onInputChange={handleInputChange(setInput2)}
				options={[]}
				renderInput={params => <TextField {...params} />}
			/>
			<Autocomplete
				className={'search-filter me-1 search-input'}
				value={input3}
				onChange={handleInputChange(setInput3)}
				inputValue={input3}
				onInputChange={handleInputChange(setInput3)}
				options={[]}
				renderInput={params => <TextField {...params} />}
			/>
			<input
				className='form-check-input checkbox ms-4'
				id='flexCheckDefault'
				type='checkbox'
				value={inputCheckBox}
				onChange={e => setCheckBox(e.target.checked)}
			></input>
			<label
				className='form-check-label checkbox-text ms-4 '
				htmlFor='flexCheckDefault'
			>
				Точное совпадение
			</label>
			<button onClick={handleSearch}>
				<SearchIcon className={'search-icon'} />
			</button>
		</div>
	)
}

export default AppSearchPanel
