(() => {
    const error = (message:string): never => { //La funcion nunca va ser exitosa
        throw new Error(message)
    }

    error('Auxilio !!!')
})()