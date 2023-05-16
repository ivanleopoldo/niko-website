import React from 'react';

function Range({ value, onChange }) {
  return (
    <div>
      <input type="range" min="500" max="2500" value={value} className="range range-primary" step="15" onChange={onChange} />
      <div className="w-full flex justify-between text-xs">
        <span>500</span>
        <span>1000</span>
        <span>1,500</span>
        <span>2000</span>
        <span>2,500</span>
      </div>
    </div>
  );
}

export default Range;