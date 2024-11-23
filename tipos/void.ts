(() => {
    function callBatman(): void {
        return;
    }
    const a = callBatman();
    console.log(a);

    const callSuperMan = (): void => {
        return;
    }
    const b = callSuperMan();
    console.log(b);
})()