import React, { useEffect, useState } from "react";
import { doc, getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase-config";

const Retrieve = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getAll = async () => {
      const ref = collection(db, "cfg");
      const q = query(ref, where("name", "==", "manav"));
      const snap = await getDocs(q);
      setData([]);
      snap.forEach((docc) => {
        setData((d) => [...d, docc.data()]);
      });
      console.log(data);
    };
    getAll();
  }, []);
  return <div>{data && data.map((d) => <h1>{d.email}</h1>)}</div>;
};

export default Retrieve;
