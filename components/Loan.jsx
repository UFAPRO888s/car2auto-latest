import React, { useId, Fragment, useEffect, useRef, useState } from "react";
import { TextField, SelectField } from "./Fields";
import CurrencyFormat from "react-currency-format";

export default function Loan(props) {
  const [PriceCar, setPriceCar] = useState("");
  const [YearsCar, setYears] = useState("");
  const [RateCar, setRate] = useState("");
  const [PriceADDCar, setPriceADDCar] = useState("");

  function handlePriceCar(event) {
    setPriceCar(event.target.value);
    setPriceADDCar(
      parseInt((event.target.value * 0.7) / 100) + parseInt(event.target.value)
    );
  }
  function handleYearsCar(event) {
    setYears(event.target.value * 12);
  }
  function handleRate(event) {
    setRate(parseInt(event.target.value) / 100 / 12);
  }

  //console.log(LoanCarM);

  return (
    <div className="grid grid-cols-4 gap-4 py-8 px-8">
      <TextField
        label={"ราคารถ (รวมภาษี " + parseInt(PriceADDCar) + ")"}
        type={"number"}
        onChange={handlePriceCar}
      />
      <TextField
        label={"จำนวนปี (" + parseInt(YearsCar) + "เดือน)"}
        type={"number"}
        onChange={handleYearsCar}
      />
      <TextField label={"ดอกเบี้ย%"} type={"number"} onChange={handleRate} />
      {PriceCar > 0 && RateCar > 0 && YearsCar > 0 ? (
        <div className="text-2xl font-bold">
          <CurrencyFormat
            value={((PriceCar * RateCar) / (1 - (1 + RateCar) ** -Math.floor(YearsCar))).toFixed(2)}
            displayType={"text"}
            thousandSeparator={true}
            //prefix={""}
            renderText={(value) => (
              <p>
                <span className="text-xs"> ค่างวด/เดือน</span>
                <br />
                {value}
                <br />
                <span className="text-xs">บาท</span>
              </p>
            )}
          />
        </div>
      ) : null}
    </div>
  );
}
