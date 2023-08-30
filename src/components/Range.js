import React from 'react';

function Range({ name, value, onChange }) {
  return (
    <div>
      <label className="label">
          <span className="label-text">Base Price in (₱)</span>
          <input type="number" onChange={onChange} value={value} className="input h-6 label-text-alt text-right" />
      </label>
      <input name={name} defaultValue={value} type="range" min="500" max="2500"  className="range range-primary" onChange={onChange} required/>
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