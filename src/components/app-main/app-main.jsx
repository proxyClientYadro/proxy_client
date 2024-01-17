import './app-main.css'
import AppMainHeader from "../app-main-header/app-main-header";
import AppMainListItem from "../app-main-list-item/app-main-list-item";
import {ChevronDoubleLeftIcon, ChevronDoubleRightIcon} from "@heroicons/react/24/outline";

const AppMain = ({data}) => {
    const rows = data.map(item => {
        const {id, ...itemProps} = item

        return (
            <AppMainListItem key={id} {...itemProps}/>
        )
    })

    return (
        <div>
            <div className={'mb-5'}>
                <AppMainHeader/>
            </div>
            <div className={'main'}>
                {rows}
                <button><ChevronDoubleRightIcon className={'right'}/></button>
                <button><ChevronDoubleLeftIcon className={'left'}/></button>
            </div>
        </div>
    )
}
export default AppMain