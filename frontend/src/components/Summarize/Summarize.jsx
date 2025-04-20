import React, { useState, useEffect } from 'react';
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

  const total = califications.length;

  const getWidth = (count) => {
    return total > 0 ? `${(count / total) * 100}%` : '0%';
  };

  return (
    <div className="summarize-container">
      <div className="summary-header">
        <div className="average-score">{average}</div>
        <div className="comment-count">{comment} comments</div>
      </div>
        
      <div className="rating-row">
        <span>Excellent ({excelent})</span>
        <div className="bar-background">
          <div className="bar-fill" style={{ width: getWidth(excelent) }}></div>
        </div>
      </div>

      <div className="rating-row">
        <span>Very Good ({veryGood})</span>
        <div className="bar-background">
          <div className="bar-fill" style={{ width: getWidth(veryGood) }}></div>
        </div>
      </div>

      <div className="rating-row">
        <span>Normal ({normal})</span>
        <div className="bar-background">
          <div className="bar-fill" style={{ width: getWidth(normal) }}></div>
        </div>
      </div>

      <div className="rating-row">
        <span>Bad ({bad})</span>
        <div className="bar-background">
          <div className="bar-fill" style={{ width: getWidth(bad) }}></div>
        </div>
      </div>

      <div className="rating-row">
        <span>Terrible ({terrible})</span>
        <div className="bar-background">
          <div className="bar-fill" style={{ width: getWidth(terrible) }}></div>
        </div>
      </div>
    </div>
  );
};

export default Summarize;
