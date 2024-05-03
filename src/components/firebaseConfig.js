import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth'; 


const firebaseConfig = {
  apiKey: "AIzaSyDJY96sp1APTuSKTUcOc2KF5VOBaxG9lzc",
  authDomain: "pw3vercel.firebaseapp.com",
  projectId: "pw3vercel",
  databaseURL: "https://pw3vercel-default-rtdb.firebaseio.com/",
  storageBucket: "pw3vercel.appspot.com",
  messagingSenderId: "1095045771441",
  appId: "1:1095045771441:web:f4db8b801321d1183eb290",
  measurementId: "G-V00GS84SJE"
};

// Inicialize o Firebase
// Delete o Firebase App existente, se existir
if (firebase.apps.length) {
  firebase.apps[0].delete()
    .then(() => {
      console.log('Firebase App excluído com sucesso');
      // Inicialize o Firebase com a nova configuração
      firebase.initializeApp(firebaseConfig);
    })
    .catch(error => {
      console.error('Erro ao excluir o Firebase App:', error);
    });
} else {
  console.log('Nenhum Firebase App encontrado para excluir');
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
