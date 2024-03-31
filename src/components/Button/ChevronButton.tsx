interface ChevronButtonProps {
  onClick?: (e: any) => void;
  className?: string
  disabled?: boolean
  sign?: string
}

export default function ChevronButton({ onClick, className, disabled, sign}: ChevronButtonProps) {
  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled} // Disable if start date is before today
    >
      {sign === 'left' ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
        </svg>
      )}
    </button>
  )
}