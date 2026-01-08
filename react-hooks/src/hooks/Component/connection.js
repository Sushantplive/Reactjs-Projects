export function connection(){
    return{
        connect(){
            console.log('connected to server')
        },
        disconnect(){
            console.log('disconnected from server')
        }
    }
}