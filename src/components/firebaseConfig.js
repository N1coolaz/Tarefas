import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth'; 

const firebaseConfig = {
  apiKey: "AIzaSyA4Iv7yjX52a3Cq5mHmA0_2wfw8KQBCy40",
  authDomain: "tarefas-1d0fa.firebaseapp.com",
  projectId: "tarefas-1d0fa",
  storageBucket: "tarefas-1d0fa.appspot.com",
  messagingSenderId: "495180001570",
  appId: "1:495180001570:web:28050671ceb9706caab57b",
  measurementId: "G-FTE2117MXP",
  databaseURL:"https://tarefas-1d0fa-default-rtdb.firebaseio.com/"
};

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
