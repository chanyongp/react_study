import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

// function result(num1, opr, num2) {
//     return eval(num1 + opr + num2)
// }
function Calculator0() {

    const [inputs, setInputs] = useState({
        num1: '',
        opr: '',
        num2: ''
    });
    const { num1, opr, num2 } = inputs;
    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    }

    let calculate = (n1, operator, n2) => {
        let result = 0;
        switch (operator) {
            case '+':
                result = Number(n1) + Number(n2);
                break;
            case '-':
                result = Number(n1) - Number(n2);
                break;
            case 'x':
                result = Number(n1) * Number(n2);
                break;
            case '/':
                result = Number(n1) / Number(n2);
                break;
            default:
                break;
        }
        return String(result);
    };

    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <b>Get Inputs</b>
                    <br /><br />
                </div>
                <div>
                    <input name="num1" onChange={onChange} value={num1} />
                    <input name="opr" onChange={onChange} value={opr} />
                    <input name="num2" onChange={onChange} value={num2} />
                </div>
                <div>
                    <br />
                    <b>Rendered</b>
                    <br />
                    <br />
                    {num1}{opr}{num2}={calculate(num1, opr, num2)}

                </div>
                <br />
                <div>
                    <Link to="/">Go Back</Link>
                </div>

            </header>
        </div>
    );
}

export default Calculator0;
