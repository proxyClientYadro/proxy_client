import {default as Add} from '@mui/icons-material/Add'
import {default as DeleteIcon} from '@mui/icons-material/Delete'
import logo from '../../assets/images/icon/BOT_X.png'
import AppSearchPanel from '../app-search-panel/app-search-panel'
import './app-header.css'
import {useState} from 'react'

const AppHeader = () => {
    const [searchPanels, setSearchPanels] = useState([1])

    const addSearchPanel = () => {
        setSearchPanels(itemSearchPanels => [
            ...itemSearchPanels,
            itemSearchPanels.length + 1,
        ])
    }

    const closeSearchPanel = () => {
        setSearchPanels(itemSearchPanels => {
            if (itemSearchPanels.length > 1) {
                return itemSearchPanels.slice(0, itemSearchPanels.length - 1)
            }
            return itemSearchPanels
        })
    }

    return (
        <div className='header'>
            {searchPanels.map(index => (
                <AppSearchPanel key={index}/>
            ))}
            <button className='button' onClick={addSearchPanel}>
                <Add size='medium' className={'addFilter'}/>
            </button>
            {searchPanels.length > 1 && (
                <button className='button' onClick={closeSearchPanel}>
                    <DeleteIcon size='medium' className={'closeFilter'}/>
                </button>

            )}
            <img src={logo} alt='logo'/>
        </div>
    )
}
export default AppHeader
