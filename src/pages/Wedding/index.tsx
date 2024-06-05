import Dropdown from "../../components/Button/Dropdown";
import FullLayout from "../../components/Layout/FullLayout";

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
      <br/>
      <div className="grid grid-cols-4 gap-4">
        {dropdownLabels.map((label, index) => (
          <div key={index}>
            <Dropdown label={label} />
          </div>
        ))}
      </div>
    </FullLayout>
  )
}