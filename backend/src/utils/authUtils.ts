import bcrypt from 'bcrypt'
export const hashedPassword = async(password:string) =>{
    try {
        const saltRound = 10
        const hashpassword = await bcrypt.hash(password, saltRound)
        return hashpassword
    } catch (error) {
       console.log(error)
    }
} 
export const comparePssword = async(password:string, hashePassword:string) =>{
    const comparePassword = await bcrypt.compare(password, hashePassword)
    return comparePassword
} 