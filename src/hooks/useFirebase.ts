import { initializeApp } from '@firebase/app'

export default function useFirebase() {
  initializeApp({
    apiKey: 'AIzaSyCKnfZPDYkZ94ck8S928kTSUfK7yMWEk60',
    authDomain: 'onlinestore-dd493.firebaseapp.com',
    projectId: 'onlinestore-dd493',
    storageBucket: 'onlinestore-dd493.appspot.com',
    messagingSenderId: '315093080873',
    appId: '1:315093080873:web:2bfd222171152ca9a43538',
  })
}
