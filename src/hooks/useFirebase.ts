import { initializeApp } from '@firebase/app'
import axios from 'axios'
import { apiUrl } from '../types/defaults'

export default async function useFirebase() {
  const key = await axios.get(`${apiUrl}/keys/firebase`)
  initializeApp({
    apiKey: String(key),
    authDomain: 'onlinestore-dd493.firebaseapp.com',
    projectId: 'onlinestore-dd493',
    storageBucket: 'onlinestore-dd493.appspot.com',
    messagingSenderId: '315093080873',
    appId: '1:315093080873:web:2bfd222171152ca9a43538',
  })
}
