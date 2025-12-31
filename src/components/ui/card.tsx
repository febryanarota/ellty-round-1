interface CardProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div className={`shadow-card px-[15px] py-[10px] bg-white rounded-[6px] ${className}`}>
      {children}
    </div>
  )
};
