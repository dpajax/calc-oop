class Calculator{
    expression = ''
    result = ''
    equal = false

    clear () {
       this.expression =''
       this.result = ''   
    }

    //append()

    
    append (val = '',prepend = false){
        if (prepend){
            // this.expression = `-${this.expression}`
            if (this.expression[0] === '-') {
                this.expression = this.expression.slice(1)
            }else {
                this.expression = `${val}${this.expression}`
            }
        }else {
            if (this.equal && isNaN(val)) {
                this.expression = this.result + val
                this.equal = false
            }else if (this.equal && !isNaN (val)) {
                this.expression = val 
                this.equal = false
            }else {
                this.expression += val
            }
        }
      
    }

    //delete

    delete () {
     this.expression = this.expression.slice(0, -1)
    }

    // compute()
    compute () {
        this.equal = true
        try {
            this.result = eval(this.expression)
            
            
        }catch (e) {
            this.result = 'synthax Error'
        }
    } 
}
const calculator = new Calculator()
const numBtn = document.querySelectorAll('.numpad button')
const display = document.querySelector('.screen')


numBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.innerText === '='){
            calculator.compute()
            display.innerText = calculator.result
        }else if (btn.innerText === 'C'){
            calculator.clear()
            display.innerText = ''
        }else if (btn.innerText === '+/-'){
            //do something here
            calculator.append('-',true)
            display.innerHTML = calculator.expression

        }else if (btn.innerText === 'x'){
            calculator.append('*')
            display.innerHTML = calculator.expression
        }else{
            calculator.append(btn.innerText)
            display.innerText = calculator.expression
        }
    })
})



