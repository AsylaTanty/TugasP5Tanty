Kalkulator
const calculator = (...args) => {
    let result = {
        sum: 0,
        difference: 0,
        product: 1,
        quotient: args[0]   
    }

     //Menghitung Pertambahan dan Perkalian
    for (let num of args) {
    result.sum += num;
    result.product *= num;
    }

    //Menghitung Pengurangan dan Pembagian
    result.difference = args.reduce((acc, num) => acc - num);
    for (let i = 1;  i < args.length; i++){
        result.quotient /= args[i];
    }

    //Hasil
    return result;
    console.log(calculator);

}