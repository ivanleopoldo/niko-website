import React, { useEffect, useState } from "react";
import { Updateprof } from ".";
import { auth } from "../config";
import {
  onSnapshot,
  query,
  collection,
  where,
  getDoc,
  doc,
} from "firebase/firestore";
import { db } from "../config/firebase";

export function Uprofile() {
  const [data, setData] = useState({});
  useEffect(() => {
    getDoc(doc(collection(db, "users"), auth.currentUser.uid)).then((doc) => {
      setData(doc.data());
    });
  }, [data]);

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={auth.currentUser.photoURL}
          alt="UserProfile"
          className="rounded-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{auth.currentUser.displayName}</h2>
        <div className="card-actions justify-start">
          <div class>
            <label>
              <h1>Date joined</h1>
              <div className="badge badge-outline">
                {auth.currentUser.metadata.creationTime}
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Uprofile;
