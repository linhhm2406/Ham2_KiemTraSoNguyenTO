function isPrime(number) {
    if (number <= 2) {
        return false;
    } else {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % 2 === 0) {
                return false;
            }
        } return  true;
    }
}

let input_number = parseInt(prompt('Nhập vào số để kiểm tra'));
let result = isPrime(input_number);
if (result===true){
    alert('Số đã nhập là số nguyên tố');
}else {
    alert('Số đã nhập không phải số nguyên tố');
}