import React from 'react';

const DateSelector = ({ startDate, endDate, setStartDate, setEndDate }) => {
  return (
    <div className="date-selector">
      <label>
        Start Date:
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </label>
      <label>
        End Date:
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </label>
    </div>
  );
};

export default DateSelector;
