import './app-main-header.css'


const AppMainHeader = () => {
    return (
        <div>
            <div className="main-header d-flex">
                <div className="alert alert-light span-title" role="alert">
                    Proxy
                </div>
                <div className="alert alert-light span-title" role="alert">
                    Core
                </div>
            </div>
        </div>
    )
}

export default AppMainHeader