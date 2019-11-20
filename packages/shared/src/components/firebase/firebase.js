import app from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: '<apiKey>',
  authDomain: '<authDomain>',
  databaseURL: '<databaseURL>',
  projectId: '<projectId>',
  storageBucket: '<storageBucket>',
  messagingSenderId: '<messagingSenderId>',
  appId: '<appId>',
  measurementId: '<measurementId>',
};

class Firebase {
  constructor(props) {
    app.initializeApp(firebaseConfig);

    this.props = props;
    this.auth = app.auth();
    this.auth.onAuthStateChanged(this.onAuthStateChanged);
  }

  onAuthStateChanged = user => {
    if (user) {
      this.props.signinUser(user);
    } else {
      this.props.signoutUser();
    }
  };

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;
