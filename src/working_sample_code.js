import { useState } from "react";
import jsPDF from "jspdf";

function App() {
  const [bike, setBike] = useState("bike");
  const [car, setCar] = useState("car");
  const [cycle, setCycle] = useState("cycle");

  function handleDownloadPDF() {
    const bikeModal = `This is a dummy modal for ${bike} bike`;
    const carModal = `This is a dummy modal for ${car} car`;
    const cycleModal = `This is a dummy modal for ${cycle} cycle`;
    const content = `${bikeModal} \n\n ${carModal} \n\n ${cycleModal}`;
    const fileName = `${bike}-${car}-${cycle}.pdf`;

    // Generate the PDF document using jsPDF
    const doc = new jsPDF();
    doc.text(content, 10, 10);

    // Download the file
    doc.save(fileName);
  }

  return (
    <div>
      <div>
        <label htmlFor="bike">Bike:</label>
        <select id="bike" value={bike} onChange={(e) => setBike(e.target.value)}>
          <option value="bike1">Bike 1</option>
          <option value="bike2">Bike 2</option>
          <option value="bike3">Bike 3</option>
        </select>
      </div>
      <div>
        <label htmlFor="car">Car:</label>
        <select id="car" value={car} onChange={(e) => setCar(e.target.value)}>
          <option value="car1">Car 1</option>
          <option value="car2">Car 2</option>
          <option value="car3">Car 3</option>
        </select>
      </div>
      <div>
        <label htmlFor="cycle">Cycle:</label>
        <select id="cycle" value={cycle} onChange={(e) => setCycle(e.target.value)}>
          <option value="cycle1">Cycle 1</option>
          <option value="cycle2">Cycle 2</option>
          <option value="cycle3">Cycle 3</option>
        </select>
      </div>
      <button onClick={handleDownloadPDF}>Download PDF</button>
    </div>
  );
}

export default App;
