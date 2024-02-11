import enviroments from './environments'
import * as dotenv from 'dotenv';
dotenv.config();
const ENVIRONMENT = enviroments[process.env.NODE_ENV!];
const config = {
    integrations: {
        generic_implementation: {
            envs: {
                apiKey: process.env.GENERIC_KEY,
                privateKey: process.env.GENERIC_PRIVATE_KEY,
                lang: process.env.GENERIC_LANG || 'ES',
                test: process.env.NODE_ENV === 'dev',
                publicKey: process.env.GENERIC_PUBLIC_KEY
            },
            url: process.env.GENERIC_URL_IMPLEMENTATION
        },
    },
    ENV_license_key: process.env.ENV_license_key,
    url_selft_api: process.env.URL_SELFT_API,
    environment: ENVIRONMENT.configEnvironment,
    name_app: process.env.NAME_APP,
    swagger: {
        user: process.env.SWAGGER_USER,
        password: process.env.SWAGGER_PASS,
        enable_security_swagger: process.env.ENABLE_SWAGGER_SECURITY
    }
}




export {config}