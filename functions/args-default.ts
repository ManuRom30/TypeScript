(()=>{
    const fullName = (firstName:string, lastName?:string, upper: boolean = false):string => {

        if (upper){
            return `${firstName} ${lastName || 'No last Name'}`.toUpperCase()
        }
        return `${firstName} ${lastName || 'No last Name'}`
    }

    const name = fullName('Tony', 'stark', false)
    console.log({name})
})()