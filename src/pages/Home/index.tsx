// import AppButton from "../../components/Button/AppButton";
import Dropdown from "../../components/Button/Dropdown";
import DatePicker from "./components/DatePicker";
import FullLayout from "../../components/Layout/FullLayout";
import EventSection from "./components/Event";
// import { useState } from 'react';

export default function HomePage() {
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // const toggleTheme = () => {
  //   setIsDarkMode(!isDarkMode);
  // };

  const dropdownLabels = ["Category", "Location", "Classes", "Level"];

  return (
    <FullLayout>
      <h2 className="text-white text-3xl font-extrabold">Timetable</h2>
      <br/>
      <DatePicker />
      <br/>
      <div className="grid grid-cols-4 gap-4">
        {dropdownLabels.map((label, index) => (
          <div key={index}>
            <Dropdown label={label} />
          </div>
        ))}
      </div>
      <br/>
      <EventSection />
      <br />
      {/* <AppButton className="text-green-500" label="From Home"></AppButton>
      <br/> */}
      {/* <div className={`bg-${isDarkMode ? 'gray-900' : 'white'} text-${isDarkMode ? 'white' : 'black'} p-4`}>
        <button onClick={toggleTheme}>Toggle Dark Mode</button>
        <h1 className={`text-${isDarkMode ? 'yellow-300' : 'blue-500'} font-bold text-2xl`}>Hello World</h1>
      </div> */}
    </FullLayout>
  )
}