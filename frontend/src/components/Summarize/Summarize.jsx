import { React, useState, useEffect } from 'react';
import './Summarize.css';

const Summarize = ({ average, comment, califications }) => {
  const [excelent, setExcelent] = useState(0);
  const [veryGood, setVeryGood] = useState(0);
  const [normal, setNormal] = useState(0);
  const [bad, setBad] = useState(0);
  const [terrible, setTerrible] = useState(0);

  useEffect(() => {
    let count5 = 0, count4 = 0, count3 = 0, count2 = 0, count1 = 0;

    for (let i = 0; i < califications.length; i++) {
      if (califications[i] === 5) count5++;
      else if (califications[i] === 4) count4++;
      else if (califications[i] === 3) count3++;
      else if (califications[i] === 2) count2++;
      else if (califications[i] === 1) count1++;
    }

    setExcelent(count5);
    setVeryGood(count4);
    setNormal(count3);
    setBad(count2);
    setTerrible(count1);
  }, [califications]);
  function publish(){
    console.log("Perick")
  }

  return (
    <div className="summarize-container">
      <div>
        <div>{average} </div>
        <div>{comment} comments</div>
      </div>
      <span>Excelent {excelent}</span>
      <span>Very Good {veryGood}</span>
      <span>Normal {normal}</span>
      <span>Bad {bad}</span>
      <span>Terrible {terrible}</span>
      <button onClick={publish()}>Publish a comment!</button>
    </div>
  );
};

export default Summarize;
