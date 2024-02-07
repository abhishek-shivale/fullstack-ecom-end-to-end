import mongoose from "mongoose"
const mongoConnect = (url:string | undefined) =>{
    mongoose.connect(`${url}`)
        .then(()=>{
            console.log('Database is connected')
        })
        .catch(()=>{
            console.error('Database is Not connected')
        })
}
export default mongoConnect