import Check from "../icons/Check";

interface CheckboxProps {
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function Checkbox({ label, checked, onChange }: CheckboxProps) {
  return (
    <div 
      onClick={() => onChange(!checked)}
      className="flex flex-row py-[8px] pr-[8px] pl-[10px] items-center justify-between cursor-pointer group select-none"
    >
      <p className="text-sm text-black-main">{label}</p>
      
      {/* Checkbox Box */}
      <div 
        className={`
          w-[23px] h-[23px] 
          flex items-center justify-center 
          rounded-[4px] border transition-all duration-200 ease-in-out
          
          ${checked 
            /* CHECKED STATE */
            ? `
                bg-blue-checkbox border-blue-checkbox 
                
                /* HOVER: */
                group-hover:bg-blue-press group-hover:border-blue-press
                
                /* ACTIVE */
                active:bg-blue-checkbox active:border-blue-checkbox active:ring-[3px] active:ring-blue-100
              `
            
            /* UNCHECKED STATE*/
            : `
                bg-white border-gray-300 

                /* HOVER: */  
                group-hover:border-gray-400 

                /* ACTIVE */
                active:border-blue-checkbox active:ring-[3px] active:ring-blue-100
              `
          }
        `}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault(); 
            onChange(!checked);
          }
        }}
      >
        {!checked && <Check className="hidden group-hover:block p-0.5 text-gray-300" />}
        {checked && <Check className="text-white p-0.5" />}
      </div>
    </div>
  );
};