import * as bcrypt from 'bcryptjs'

export function EncryptPassword (originalPass: string): string {
    return bcrypt.hashSync(originalPass, 10)
}