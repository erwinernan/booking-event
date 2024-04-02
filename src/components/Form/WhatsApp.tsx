interface AppButtonProps {
  label: string;
  onClick?: (e: any) => void;
  className?: string
}

export default function WhatsAppForm() {
  return (

    <form className="max-w-sm mx-auto">
        <div className="flex items-center">
            <button id="dropdown-phone-button" data-dropdown-toggle="dropdown-phone" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900  border border-gray-300 rounded-s-full hover:bg-gray-200 focus:border-gray-300" type="button">
                +1 <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/></svg>
            </button>
            <div id="dropdown-phone" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-52 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-phone-button">
                    {/* Dropdown options */}
                </ul>
            </div>
            <label htmlFor="phone-input" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Phone number:</label>
            <div className="relative w-full">
                <input type="text" id="phone-input" className="block p-2.5 w-full z-20 text-sm text-gray-900 rounded-e-full border-s-0 border border-gray-300 focus-visible:border-gray-300 focus-visible:ring-gray-300" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required />
            </div>
        </div>
    </form>

  )
}