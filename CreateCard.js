import { useState } from "react";
import IDCard from "../components/IDCard";

export default function CreateCard() {
  const [data, setData] = useState({});
  const [photo, setPhoto] = useState(null);
  const [showCard, setShowCard] = useState(false);

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    setPhoto(URL.createObjectURL(file));
  };

  if (showCard) {
    return <IDCard data={data} photo={photo} />;
  }

  return (
    <div className="center">
      <h2>Fill ID Details</h2>

      <input placeholder="Name" onChange={e=>setData({...data,name:e.target.value})}/>
      <input placeholder="Division" onChange={e=>setData({...data,division:e.target.value})}/>
      <input placeholder="Branch" onChange={e=>setData({...data,branch:e.target.value})}/>
      <input placeholder="Roll No" onChange={e=>setData({...data,roll:e.target.value})}/>
      <input type="date" onChange={e=>setData({...data,dob:e.target.value})}/>
      <input
  placeholder="Mobile (10 digits)"
  maxLength="10"
  onChange={(e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 10) {
      setData({ ...data, mobile: value });
    }
  }}
/>
      <input placeholder="Address" onChange={e=>setData({...data,address:e.target.value})}/>

      <input type="file" onChange={handlePhoto} />

      <button onClick={()=>setShowCard(true)}>Generate ID Card</button>
    </div>
  );
}