import './app-header.css'
import AppSearchPanel from "../app-search-panel/app-search-panel";
import logo  from '../../assets/images/icon/BOT_X.png'


const AppHeader = () => {
    return (
        <div className='header'>
            <AppSearchPanel />
            <img src={logo} alt="logo"/>
        </div>
    )
}
export default AppHeader