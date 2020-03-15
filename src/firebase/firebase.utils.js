import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyA5rV023sBNuS5lfLOy6QPgJ1Rda33Cn7k',
  authDomain: 'crow-db-f5fbd.firebaseapp.com',
  databaseURL: 'https://crow-db-f5fbd.firebaseio.com',
  projectId: 'crow-db-f5fbd',
  storageBucket: 'crow-db-f5fbd.appspot.com',
  messagingSenderId: '229092873939',
  appId: '1:229092873939:web:d5f35610f91a7e6616a626',
  measurementId: 'G-XSXLL256HV'
}

export const creatUserpropfiledocument = async (userAuth, additionaldata) => {
  if (!userAuth) return
  const userref = firestore.doc(`users/${userAuth.uid}`)

  // const usercollection = firestore.collection("users");

  const snapshot = await userref.get()
  // const usercollectionsnapshot = await usercollection.get();

  // console.log({
  //   collection: usercollectionsnapshot.docs.map(doc => doc.data())
  // });

  if (!snapshot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userref.set({
        displayName,
        email,
        createdAt,
        ...additionaldata
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userref

  // console.log(firestore.doc("users/156suvrajit"));
}

export const addcollectionAnddocument = async (collectionkey, objecttoadd) => {
  const collectionref = firestore.collection(collectionkey)

  const batch = firestore.batch()

  objecttoadd.forEach(obj => {
    const newdocref = collectionref.doc()

    batch.set(newdocref, obj)
  })

  return await batch.commit()
}

export const convertCollectionSnapshotTomap = collections => {
  const transformdcollection = collections.docs.map(doc => {
    const { title, items } = doc.data()

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })

  return transformdcollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection

    return accumulator
  }, {})
}

firebase.initializeApp(config)

export const auth = firebase.auth()

export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const singInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
