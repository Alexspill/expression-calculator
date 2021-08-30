function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {

    let exprX = expr.split(' ').join('').split('');
    let lastSymbol = '';
    let stack = [];
    let result = [];
    const actions = {
        '+' : (a, b) => (b + a),
        '-' : (a, b) => (b - a),
        '*' : (a, b) => (b * a),
        '/' : (a, b) => (b / a),  
    }
    exprX.forEach(item => {
        
    });
}

function identSymbol(lastSymbol, symbol){
    if (isAction(symbol)) {



        lastSymbol += symbol;
        lastSymbol = lastSymbol + symbol;
}

function isAction(symbol) {
    return (symbol === ('+' || '-' || '*' || '/' || '(' || ')' || ' '));
}




    // expr.split('').reduce((lastSymbol, item) => {
    //     if (item !== ('+' || '-' || '*' || '/' || '(' || ')' || ' ')) {
    //         lastSymbol = lastSymbol + item;
    //         console.log(1, lastSymbol, item, exprn);
    //     }  else if (item !== ' ') {            
    //         exprn.push(lastSymbol);
    //         exprn.push(item);
    //         lastSymbol = '';
    //     }
    //     else {
    //         exprn.push(item);
    //         lastSymbol = '';
    //     }
    // });

    let result = [];
    let itog = [];
    let stack = [];
    let stack2 = [];

    const actions = {
        '+' : (a, b) => (b + a),
        '-' : (a, b) => (b - a),
        '*' : (a, b) => (b * a),
        '/' : (a, b) => (b / a),  
    }
    exprn.forEach((el) => {
        if (el !== ('+' || '-' || '*' || '/' || '(' || ')' || ' ')) {
            result.push(el);
        }
        else if (el === '(') {
            stack.push(el);
        }
        else if (el === ')') {

            for (let i=stack.length; i >= stack.lastIndexOf('('); i--) {
                if (i !== stack.lastIndexOf('(')) {
                    result.push(stack.pop());
                    }
                    else {
                        stack.pop();
                        if (stack[stack.length - 1] === '+' || '-' || '*' || '/') {
                            result.push(stack[stack.length - 1]);
                        }
                    }  
                }          
            }
        else if(el === '+' || '-' || '*' || '/') {
            if (el === '*' || '/') {
                while(stack[stack.length - 1] !== '(') {
                    result.push(stack.pop());
                }
                stack.push(el);
            }
            else {
                while(stack[stack.length - 1] !== '(' || '*' || '/') {
                    result.push(stack.pop());
                }
                stack.push(el);
            }
        }
    });

    // while(stack.length > 0){
    //     result.push(stack.pop());
    // }

    // result.forEach(elem => {
    //     if (elem === Number){
    //         itog.push(elem);
    //     }
    //     else if(elem === '+' || '-' || '*' || '/'){
    //         stack2.push(actions[elem](stack2.pop(), stack2.pop()));
    //     }
    // })
    // return itog;

}


module.exports = {
    expressionCalculator
}