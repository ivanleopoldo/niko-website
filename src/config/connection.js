import { useState } from "react";
import { db } from "./firebase";
import {
  doc,
  setDoc,
  collection,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

function FirebaseConnection() {
  return {
    fetchAllFreelancerData: function () {
      return query(
        collection(db, "users"),
        where("basicInfo.isFreelancer", "==", true)
      );
    },
    getUserData: async function (uid) {
      const collRef = collection(db, "users");
      const docRef = doc(collRef, uid);
      const data = await getDoc(docRef);
      return data;
    },
    addData: function (uid, info) {
      const collRef = collection(db, "users");
      const docRef = doc(collRef, uid);
      setDoc(docRef, info);
    },
  };
}

export const Firebase = new FirebaseConnection();
