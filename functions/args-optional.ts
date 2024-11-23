(()=>{
    const fullName = (firstName:string, lastName?:string):string => {
        return `${firstName} ${lastName || 'No last Name'}`
    }

    const name = fullName('Tony')
    console.log({name})
})()