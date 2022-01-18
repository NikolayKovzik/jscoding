
function Calculator() {

    this.operators = [];
    this.functions = [];

    this.calculate = function(str) {

        let arr = [];

        if(str.includes("+")) {
             arr=str.split(" + ");
             return +arr[0] + +arr[1];
        }

        if(str.includes("-")) {
            arr = str.split(" - ");
            return +arr[0] - +arr[1];
        }
        
        for(let i=0; i<this.operators.length; i++) {
             if(str.includes(this.operators[i])) {
                arr = str.split(this.operators[i]);
                return this.functions[i](arr[0], arr[1]);
             }
        }
    }

    this.addMethod = function(name,func) {
        this.functions.push(func);
        this.operators.push(name);
    }
}


let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result ); 