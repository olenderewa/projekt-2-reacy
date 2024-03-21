import { useState } from "react";
import "./Form.css";
import axios from "axios";

function Form() {
  const [finalResult, setFinalResult] = useState();
  const getCurrencyValue = (event) => {
    event.preventDefault();
    const currency = event.target.currencies.value;
    const url = `https://api.nbp.pl/api/exchangerates/rates/a/${currency}/`;

    axios
      .get(url)
      .then((response) => {
        const mid = response.data.rates[0].mid;
        const amount = event.target.amount.value;
        const result = mid * amount;
        setFinalResult(`${result.toFixed(2)} PLN`);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form onSubmit={getCurrencyValue}>
      <input type="number" name="amount" required min="0.01" step="0.01" />
      <select name="currencies">
        <option value="eur">EUR</option>
        <option value="usd">USD</option>
        <option value="chf">CHF</option>
      </select>
      <button className="btn">przelicz</button>
      <span>{finalResult}</span>
    </form>
  );
}

export default Form;
