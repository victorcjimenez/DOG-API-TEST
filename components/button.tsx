import { forwardRef, ReactNode } from "react";
import clsx from "clsx";

export interface BttnProps {
  id?: string;
  text: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = forwardRef<HTMLButtonElement & HTMLAnchorElement, BttnProps>(function Button(
  { className, text, onClick = () => null, disabled = false },
  ref
) {
  const cls = clsx(
    className,
    "uppercase px-3 py-4 text-sm font-bold flex items-center justify-center overflow-hidden text-gray-900 rounded-lg group bg-gradient-to-br from-[#3AADA8] to-[#A2D5AC] group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-[#006BB9] dark:focus:ring-[#006BB9]"
  );

  return (
    <button ref={ref} type={"button"} onClick={onClick} disabled={disabled} className={cls}>
      <span>{text}</span>
    </button>
  );
});
