import './app-main-list-item.css'


const AppMainListItem = ({name, proxy, core}) => {
    return (
        <>
        <div className="item d-flex">
            <span>{name}</span>
            <div className={'form-control inputValue'} placeholder={'Proxy'}
            ><pre>{proxy}</pre></div>
            <div className={'form-control inputValue'} placeholder={'Proxy'}
            ><pre>{core}</pre></div>
        </div>
        </>
    )
}

export default AppMainListItem