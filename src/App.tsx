import './App.css'
import Header from './components/header/Header';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GOOGLE_CLIENT_ID } from './config';
import Posts from './components/posts/Posts';
import useTypedSelector from './hooks/useTypedSelector';
import LoginButton from './components/LoginButton';

function App() {
  const user = useTypedSelector((state) => state.user);
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <Header />
      {user.name === '' ?
        <section className='section'>
          <h2>Please login to see the posts 😀</h2>
          <LoginButton />
        </section> :
        <Posts />}
    </GoogleOAuthProvider>
  )
}

export default App
