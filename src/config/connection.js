import {
    auth,
    db,
    storage,
    ref,
    getDownloadURL,
    uploadBytesResumable,
} from "./firebase";
import { collection, setDoc, doc } from "firebase/firestore";

class FirebaseConnection {
    fetchAllData(collection_name) {
        return collection(db, collection_name);
    }
    addDataWithGoogle(info) {}
    addData(info) {
        auth()
            .createUserWithEmailAndPassword(
                info.loginInfo.email,
                info.loginInfo.password
            )
            .then(() => {
                const newInfo = this.updateDict(info);
                const userRef = doc(
                    db,
                    "users",
                    auth.currentUser.uid,
                    "loginInfo"
                );
                setDoc(
                    userRef,
                    {
                        ...newInfo,
                    },
                    { merge: true }
                );
            });
    }
    updateDict(info) {
        const urls = this.uploadImage(info);
        if (urls.length > 1) {
            return {
                ...info,
                basicInfo: {
                    ...info.basicInfo,
                    profImage: urls[0],
                },
                freelanceInfo: {
                    ...info.freelanceInfo,
                    certificateImage: urls[1],
                },
            };
        }
        return {
            ...info,
            basicInfo: {
                ...info.basicInfo,
                profImage: urls[0],
            },
        };
    }
    uploadImage(info) {
        const [urls, setUrls] = [];
        const images = [
            info.basicInfo.profImage,
            info.freelanceInfo.profImage,
        ].filter((img) => {
            return img !== null;
        });

        images.map((img) => {
            const storageRef = ref(
                storage,
                `images/${auth.currentUser.uid}/profImages/${img}`
            );
            const uploadTask = uploadBytesResumable(storageRef, img);
            uploadTask.on(
                "state_changed",
                (snapshot) => {},
                (err) => console.log(err),
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                        setUrls([...urls, url]);
                    });
                }
            );
        });
        return urls;
    }
}

export const Firebase = new FirebaseConnection();
