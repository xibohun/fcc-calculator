import './App.css'
import React from 'react'
import ReactDOM from 'react-dom'

const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const ops= ["+","-", "*", "/", "ac", "."];
const ids = {
    7 : 'seven',
    8 : 'eight',
    9 : "nine",
    4 : "four",
    5 : "five",
    6 : "six",
    1 : "one",
    2 : "two",
    3 : "three",
    0 : "zero",

    '+': "plus",
    '-': "minus",
    '*': "multiplay",
    "/": "divide"

}
    
    


class  App  extends React.Component {

    state = {lastPressed, currentNumber, previousNumber, operation};


    handleClick =(e) => {
    //     const {lastPressed, currentNumber, previousNumber, operation} = this.state
    //     const {innerText} = e.target;
    //     alert(innerText);
    //     if(!Number.isNaN(Number(innerText))){
    //         if(currentNumber === '0'){
    //             this.setState({
    //                 currentNumber: innerText
    //             })
    //         }else{

    //             this.setState({
    //                 currentNumber: currentNumber + innerText
    //             })
    //     }
    //     return;
    // }

    //     switch(innerText){
    //         case "AC":{
    //             this.setState({
    //                 currentNumber: '0',
    //                 previousNumber: undefined,
    //                 operation: undefined
    //             })

    //             break;
    //         }
    //         case ".": {
    //             if(!currentNumber.includes('.')){
//                     this.setState({
//                         currentNumber: currentNumber + innerText
//                     })
//                     }
//                     break;
//                 }

//             default : {
//                 if(!operation){
//                     this.setState({
//                         operation: innerText,
//                         previousNumber: currentNumber,
//                         currentNumber: '0'
//                     })
//                 }else{
//                     const evalued = eval(`${previousNumber} ${operation} ${currentNumber}`)

//                     this.setState({
                        
//                         operation: innerText,
//                         previousNumber: evalued,
//                         currrentNumber: innerText === '='? currentNumber: '0'
//                     })
                
            
//             }
//         }

//     }
// } 

        const {calc, currentNumber, lastPressed} = this.state
        const {innerText} = e.target
        this.setState({
            calc: '0',
            currentNumber: currentNumber + innerText,
            lastPressed: innerText

        })

        switch(innerText){

            // case "0": {
            //     this.setState({
            //         currentNumber: innerText
            //     })

            //     break;

            
            case 'AC': {
                this.setState({
                    currentNumber: '0',
                    calc: undefined,
                    //operation: undefined
                })

                break;
                
            }
            case '=': {
                const evaluated = eval(calc)
                this.setState({
                    currentNumber: evaluated,
                    calc: evaluated
                })

                break;

            }
            case  '.':{
                const splitted = calc.split(/[\+\-\*\/]/)
                const last = splitted.slice(-1)[0]

                if(!last.includes('.')){
                    this.setState({
                    calc: calc + '.'
                    })
                }
                break;

            }

            


            default: {
                let e = undefined

                if (ops.includes(lastPressed)){
                     if(ops.includes(innerText) && innerText !== '-'){
                        const lastNumberIndex = calc.split(" ").reverse().findIndex(char => char !== ' ' && nums.includes(+char))
                    e = calc.slice(0, calc.length - lastNumberIndex ) + ` ${innerText} `
                    //const e = currentNumber === '0' ? innerText: (currentNumber + innerText)
                    //this.setState({
                        //calc: calc.slice(0, -1) + innerText,
                        //lastPressed: innerText
                     
                }else{
                    e = calc +=`${calc} {innterText} `
                }
                
                }else{
                    e = calc === '0' ? innerText: (currentNumber + innerText)
                
            }

                    this.setState({
                    calc: e,
                    currentNumber: e,
                    lastPressed: innerText

                
            })
            
        }
    }

    this.setState({
        lastPressed: innerText
    })

}









   render(){
    const {currentNumber} = this.state;

    return(
    
    <div className="calculator">
        <p style={{position: absolute, top: 0}}> {JSON.stringify(this.state, null, 2)}</p>
        <div id="display" className="display">
            {currentNumber}
            <small> {calc} </small>
        </div>
        <div className="dark-grey">
            <button className="big-h dark-grey ac" onClick={this.handleClick} id='clear'> AC </button>
        </div>
        <div className="nums-container">
            {nums.map(num =>(
                <button className={`dark-grey ${num === 0 && 'big-h'}`} key={num} onClick={this.handleClick}> {num} id={ids[num]}</button>
            ))}
            <button className="light grey" onClick={this.handleClick} id='decimal'> . </button>

        </div>
        <div className="ops-container"> 
            {ops.map(op =>(
            <button className="orange" key={op} onClick={this.handleClick} id={ids[op]}> {op}</button>
            ))}
        </div>

        <div className='equals'>
            <button id="equals"> = </button>
        </div>



        
        

     </div>
    )
        
    }
}



export default App;
