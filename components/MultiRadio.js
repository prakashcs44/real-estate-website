import React, { useState } from 'react';

function MultiRadio({value, options, label ,...props}) {
  

  

  return (
  
      <div className="flex items-center gap-32 pl-4">
        {options.map((option) => (
          <div key={option.value} className="flex gap-3 items-center">
            <input
             {...props}
              type="radio"
              value={option.value}
              checked={value === option.value}
              
              className="size-6"
            />
            <label>{option.text}</label>
          </div>
        ))}
      </div>
    
  );
}

export default MultiRadio;
