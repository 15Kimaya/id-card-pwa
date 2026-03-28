import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function IDCard({ data, photo }) {

  const download = () => {
  const card = document.getElementById("card");

  html2canvas(card, { scale: 2 }).then(canvas => {
    const imgData = canvas.toDataURL("image/png");

    // ID CARD SIZE (85.6mm x 54mm)
    const pdf = new jsPDF("landscape", "mm", [85.6, 54]);

    pdf.addImage(imgData, "PNG", 0, 0, 85.6, 54);
    pdf.save("id-card.pdf");
  });
};

  return (
    <div className="center">

      <div id="card" className="real-card">

        {/* TOP */}
        <div className="top">
          <img src="/icon.png" alt="logo" />
          <h3>K C College of Engineering and Management Studies and Research</h3>
        </div>

        {/* MIDDLE */}
        <div className="middle">
          <img src={photo} className="photo" />

          <div>
            <p><b>Name:</b> {data.name}</p>
            <p><b>Division:</b> {data.division}</p>
            <p><b>Branch:</b> {data.branch}</p>
            <p><b>Roll No:</b> {data.roll}</p>
            <p><b>DOB:</b> {data.dob}</p>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="bottom">
          <p>Mobile: {data.mobile}</p>
          <p>Address: {data.address}</p>

          <b>Rules:</b>
          <ol>
            <li>Carry ID daily</li>
            <li>Non-transferable</li>
            <li>Show when asked</li>
            <li>Misuse leads to action</li>
          </ol>
        </div>

      </div>

      <button onClick={download}>Download PDF</button>
    </div>
  );
}