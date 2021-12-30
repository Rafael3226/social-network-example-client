import { initializeApp } from '@firebase/app'
import FirebaseKey from '../api/keys'

export default async function useFirebase() {
  const key = await FirebaseKey()
  initializeApp({
    apiKey: key,
    authDomain: 'onlinestore-dd493.firebaseapp.com',
    projectId: 'onlinestore-dd493',
    storageBucket: 'onlinestore-dd493.appspot.com',
    messagingSenderId: '315093080873',
    appId: '1:315093080873:web:2bfd222171152ca9a43538',
  })
}
