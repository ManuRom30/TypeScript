(() => {
    const batman: string = 'Batman';
    const linternaVerde: string = "Linterna Verde";
    const volcanNegro: string = `Heroe: Volcan Negro`;


    console.log(`I'm ${batman}`);
    const villians = 20;
    console.log(batman[10]?.toUpperCase() || 'No esta presente'); // Null check 
})()