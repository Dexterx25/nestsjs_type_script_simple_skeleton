import enviroments from './environments'
import * as dotenv from 'dotenv';
dotenv.config();
const ENVIRONMENT = enviroments[process.env.NODE_ENV!];
const config = {
    integrations: {
        generic_implementation: {
            envs: {
                apiKey: process.env.APIKEY_G_IMP,
                privateKey: process.env.PRIVATEKEY_G_IMP,
                lang: process.env.LANG_EPAYCO || 'ES',
                test: process.env.NODE_ENV === 'dev',
                publicKey: process.env.PUBLIC_KEY
            },
            url: process.env.URL_EPAYCO
        },
    },
    ENV_license_key_new_relic: process.env.ENV_license_key_new_relic,
    app_name_new_relic: process.env.app_name_new_relic,
    url_selft_api: process.env.URL_SELFT_API,
    environment: ENVIRONMENT.configEnvironment,
    name_app: process.env.NAME_APP,
    type_db: process.env.TYPE_DB || 'mongodb',
    swagger: {
        user: process.env.SWAGGER_USER,
        password: process.env.SWAGGER_PASS,
        enable_security_swagger: process.env.ENABLE_SWAGGER_SECURITY
    }
}




export {config}