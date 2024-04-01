interface AppButtonProps {
  label: string;
  onClick?: (e: any) => void;
  className?: string
}

export default function AppButton({ label, onClick, className}: AppButtonProps) {
  return (
    <button className={`flex items-center justify-center ring-1 ring-white focus:outline-none p-2 rounded-full bg-transparent ${className}`} onClick={onClick}>{label}</button>
  )
}