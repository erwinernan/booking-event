import AppButton from "../../components/Button/AppButton";
import DatePicker from "../../components/Button/DatePicker";
import FullLayout from "../../components/Layout/FullLayout";
import { useState } from 'react';

export default function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <FullLayout>
      <h2>This is Home!</h2>
      <DatePicker />
      <AppButton className="text-green-500" label="From Home"></AppButton>
      <div className={`bg-${isDarkMode ? 'gray-900' : 'white'} text-${isDarkMode ? 'white' : 'black'} p-4`}>
        <button onClick={toggleTheme}>Toggle Dark Mode</button>
        <h1 className={`text-${isDarkMode ? 'yellow-300' : 'blue-500'} font-bold text-2xl`}>Hello World</h1>
        {/* Other components */}
      </div>
    </FullLayout>
  )
}