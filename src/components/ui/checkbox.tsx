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
      className="flex -top-1px w-full flex-row py-[8px] pr-[15px] pl-[22px] items-center justify-between cursor-pointer group select-none"
    >
      <p className="text-sm text-black-main leading-[26px]">{label}</p>
      
      {/* Checkbox Box */}
      <div 
        className={`
          w-[25px] h-[25px] 
          flex items-center justify-center 
          rounded-[6px] border transition-all duration-200 ease-in-out
          
          ${checked 
            /* CHECKED STATE */
            ? `
                bg-blue-checkbox border-blue-checkbox 
                
                /* HOVER: */
                group-hover:bg-blue-press group-hover:border-blue-press
                
                /* ACTIVE */
                group-active:bg-blue-checkbox group-active:border-blue-checkbox group-active:ring-[3px] active:ring-blue-checkbox/10
              `
            
            /* UNCHECKED STATE*/
            : `
                bg-white border-gray-300 

                /* HOVER: */  
                group-hover:border-gray-hover

                /* ACTIVE */
                group-active:border-gray-hover group-active:ring-[3px] group-active:ring-blue-checkbox/10
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
        {!checked && <Check className="hidden group-hover:block group-active:block p-0.5 text-check-hover group-active:text-check-press" />}
        {checked && <Check className="text-white p-0.5" />}
      </div>
    </div>
  );
};