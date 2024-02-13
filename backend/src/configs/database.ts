import mongoose, { mongo }  from "mongoose"
const mongoConnect = (url:string | undefined) =>{
    const options: any = {
        useNewUrlParser: true,
      }
    mongoose.connect(`${url}`, options)
    
    mongoose.connection.on('connected', () => {
        console.log('Database is connected');
    });
    
    mongoose.connection.on('error', (err) => {
        console.log('Error occurred in database', err);
    });
    
    mongoose.connection.on('disconnected', () => {
        console.log('Database is disconnected');
    });
    
}
export default mongoConnect