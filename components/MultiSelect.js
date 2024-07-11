import React from "react";

const WithLogo = ({ text, logo, value,...props }) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <label className="flex flex-col gap-1 items-center">
      {logo}
        <span className="text-slate-500">{text}</span>
       
      </label>
      <input {...props} type="checkbox" className="size-5" value={value} />
    </div>
  );
};

const WithoutLogo = ({ text, value,...props }) => {
  return (
    <div className={`flex  gap-4 items-center`}>
      <input {...props} type="checkbox" className="size-5" value={value} />
      <label>{text}</label>
    </div>
  );
};

function MultiSelect({ isLogo, required, options,...props}) {

  

  return (
    
      <div className={`flex items-center flex-wrap ${isLogo?"gap-32 px-20":"gap-10 pl-3"} `}>
        {options.map((option) =>
          isLogo ? <WithLogo {...option} {...props} /> : <WithoutLogo {...option} {...props} />
        )}
      </div>
    
  );
}

export default MultiSelect;
