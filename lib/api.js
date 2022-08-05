import axios from "axios"
import { CookieJar } from "tough-cookie"
import { wrapper } from "axios-cookiejar-support"

import routes from './routes'

const jar = new CookieJar();
const client = wrapper(axios.create({ jar }));

export const login = async (email, username, password) => {
    try {
        const initConfig = { withCredentials }
        await client.get(routes.login.init[0], initConfig)
        await client.get(routes.login.init[1], initConfig)
        await client.get(routes.login.init[2], initConfig)
        const initFourResponse = await client.get(routes.login.init[3], initConfig)

        await jar.setCookie('AADSSO=NA|NoExtension', 'https://login.microsoftonline.com/')
        await jar.setCookie('SSOCOOKIEPULLED=1', 'https://login.microsoftonline.com./')

        const ssoReloadResponse = await client.get(`${routes.login.init[3]}&sso_reload=true`, initConfig)

        

    }
}