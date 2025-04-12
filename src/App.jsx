import React, { useState } from "react";
import MapOverlay from "./components/MapOverlay";
import YearSelector from "./components/YearSelector";
import PresenceChart from "./components/PresenceChart";
import mapImage from "../public/map.png";

const emptyData = {
  2016: { R1: "", R2: "", R3: "", R4: "", R5: "" },
  2017: { R1: "", R2: "", R3: "", R4: "", R5: "" },
  2018: { R1: "", R2: "", R3: "", R4: "", R5: "" },
  2019: { R1: "", R2: "", R3: "", R4: "", R5: "" },
  2020: { R1: "", R2: "", R3: "", R4: "", R5: "" },
  2021: { R1: "", R2: "", R3: "", R4: "", R5: "" },
  2022: { R1: "", R2: "", R3: "", R4: "", R5: "" },
  2023: { R1: "", R2: "", R3: "", R4: "", R5: "" },
  2024: { R1: "", R2: "", R3: "", R4: "", R5: "" },
  2025: { R1: "", R2: "", R3: "", R4: "", R5: "" },
};

function App() {
  const [currentYear, setCurrentYear] = useState(2016);
  const [data, setData] = useState(emptyData);

  const handleInputChange = (year, region, value) => {
    if (["Y", "N", ""].includes(value.toUpperCase())) {
      setData((prev) => ({
        ...prev,
        [year]: { ...prev[year], [region]: value.toUpperCase() },
      }));
    }
  };

  return (
    <div className="flex flex-col p-4 gap-4">
      <h1 className="text-2xl font-bold text-center">Invasive Carp Presence Map</h1>
      <YearSelector
        currentYear={currentYear}
        setCurrentYear={setCurrentYear}
      />
      <div className="flex flex-row gap-4">
        <div className="relative w-[500px] h-[700px]">
          <img
            src="/map.png"
            alt="Map"
            className="w-full h-full object-cover"
          />
          <MapOverlay year={currentYear} data={data[currentYear]} />
        </div>
        <PresenceChart data={data} onChange={handleInputChange} />
      </div>
    </div>
  );
}

export default App;