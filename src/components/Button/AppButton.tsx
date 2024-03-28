interface AppButtonProps {
  label: string;
  onClick?: (e: any) => void;
  className?: string
}

export default function AppButton({ label, onClick, className}: AppButtonProps) {
  return (
    <button className={className} onClick={onClick}>{label}</button>
  )
}