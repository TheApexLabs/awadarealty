import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Button = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        `bg-black text-white px-5 py-2 rounded-lg font-bold flex items-center gap-2`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Button;
