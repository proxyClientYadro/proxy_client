import './mainPage.css'
import AppHeader from "../app-header/app-header";
import AppMain from "../app-main/app-main";


function MainPage() {
    const data = [
        {name: 'Метод запроса :', proxy: 'GET', core: 'GET'},
        {name: 'Адресс :', proxy: 'https://127.0.0.1/api/v0/bots', core: 'https://core.ru/api/v0/apps/123/bots'},
        {
            name: 'Заголовки запроса:',
            proxy: '{\n' +
                '  "Accept": "*/*",\n' +
                '  "Cookie": "csrftoken=MyHDYjyDAtYjHoU8DLWpzWRABXGxsF37",\n' +
                '  "Connection": "keep-alive",\n' +
                '  "User-Agent": "PostmanRuntime/7.36.0",\n' +
                '  "Content-Type": "text/plain",\n' +
                '  "Authorization": "Bearer e586e40e4e688f8d1d9f07eb076e09f8d9faf0ba1f83770493d703b841c609e1",\n' +
                '  "Postman-Token": "72f6ad99-a381-4be0-9bbf-0de3f6efcd35",\n' +
                '  "Content-Length": "",\n' +
                '  "Accept-Encoding": "gzip, deflate, br",\n' +
                '  "NEW_COR_REQUEST_HEADERS": "CORE_VALUE_REQUEST_HEADERS"\n' +
                '}',
            core: '{\n' +
                '  "Accept": "*/*",\n' +
                '  "Cookie": "csrftoken=MyHDYjyDAtYjHoU8DLWpzWRABXGxsF37",\n' +
                '  "Connection": "keep-alive",\n' +
                '  "User-Agent": "PostmanRuntime/7.36.0",\n' +
                '  "Content-Type": "text/plain",\n' +
                '  "Authorization": "Bearer e586e40e4e688f8d1d9f07eb076e09f8d9faf0ba1f83770493d703b841c609e1",\n' +
                '  "Postman-Token": "72f6ad99-a381-4be0-9bbf-0de3f6efcd35",\n' +
                '  "Content-Length": "",\n' +
                '  "Accept-Encoding": "gzip, deflate, br",\n' +
                '  "NEW_COR_REQUEST_HEADERS": "CORE_VALUE_REQUEST_HEADERS"\n' +
                '}'
        },
        {name: 'Тело запроса :', proxy: '{...}', core: '{...}'},
        {name: 'Заголовки ответа :', proxy: '{...}', core: '{...}'},
        {
            name: 'Тело ответа :', proxy: '{\n' +
                '    "id": 1,\n' +
                '    "name": "gpt-3.5-turbo",\n' +
                '    "author": "OpenAI",\n' +
                '    "NEW_BOT": "GPT BOT NEW",\n' +
                '    "version": 3.5,\n' +
                '    "available": true,\n' +
                '    "status_code": "active",\n' +
                '    "NEW_PROXY_RESPONSE_BODY": "PROXY_VALUE_RESPONSE_BODY"\n' +
                '  }', core: '{\n' +
                '    "id": 1,\n' +
                '    "name": "gpt-3.5-turbo",\n' +
                '    "author": "OpenAI",\n' +
                '    "NEW_BOT": "GPT BOT NEW",\n' +
                '    "version": 3.5,\n' +
                '    "available": true,\n' +
                '    "status_code": "active",\n' +
                '    "NEW_PROXY_RESPONSE_BODY": "PROXY_VALUE_RESPONSE_BODY"\n' +
                '  }'
        },
        {name: 'Статусный код ответа :', proxy: '200', core: '200'},
    ]

    return (
        <div className={'main-page'}>
            <AppHeader/>
            <AppMain data={data}/>
        </div>
    )
}

export default MainPage