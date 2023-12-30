import {
  auth,
  db,
  storage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "./firebase";
import { doc, setDoc, collection } from "firebase/firestore";

class FirebaseConnection {
  addData(uid, info) {
    this.updateDict(info).then((newInfo) => {
      const collRef = collection(db, "users");
      const docRef = doc(collRef, uid);
      setDoc(docRef, newInfo);
    });
  }
  async updateDict(info) {
    const urls = this.uploadImage(info);
    alert(urls);
    if (urls.length > 1) {
      return {
        ...info,
        basicInfo: {
          ...info.basicInfo,
          profImage: null,
        },
        freelanceInfo: {
          ...info.freelanceInfo,
          certificateImage: urls.length !== 0 ? urls[1] : null,
        },
      };
    } else if (info.basicInfo.isFreelance) {
      return {
        ...info,
        basicInfo: {
          ...info.basicInfo,
          profImage: urls.length !== 0 ? urls[0] : null,
        },
      };
    } else {
      return {
        ...info,
        basicInfo: {
          ...info.basicInfo,
        },
      };
    }
  }
  uploadImage(info) {
    const urls = [];
    const images = [
      info.basicInfo.profImage,
      info.freelanceInfo.profImage,
    ].filter((img) => img !== null);

    images.map((img) => {
      const storageRef = ref(storage, `images/${auth.currentUser.uid}/profImg`);
      uploadBytesResumable(storageRef, img);
    });

    return urls;
  }
}

export const Firebase = new FirebaseConnection();
