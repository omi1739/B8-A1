function multiplyValue(value: number, multiplier: number): number {
    const actualMultiplier: number = multiplier === undefined ? 2 : multiplier;
    return value * actualMultiplier;
}


function processInput (input: string | number | boolean ):string | number{
    if(typeof input ==='string'){
        return input.trim().toLowerCase();
    }
    if(typeof input ==='number'){
      return input * 10;
      
    }
    return input ? 'Active' : 'Inactive';
}