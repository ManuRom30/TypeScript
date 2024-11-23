(()=>{
    const addNumber = (a:number, b:number) => {
        return a + b;
    }
    const greet = (name:string) => {
        return `Hello ${name}`
    }
    const saveTheWorld = () => {
        return 'The world is saved'
    }

    let myFunction: Function

    myFunction = saveTheWorld;
    console.log(myFunction());

    myFunction = greet;
    console.log(myFunction('Hugo'));
    myFunction = addNumber;
    console.log(myFunction(1,2));
})()