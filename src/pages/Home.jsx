
import UserSearch from '../components/users/UserSearch';
import UserResults from './../components/users/UserResults';


const Home = () => {
  return (
    <>
      {/* {process.env.REACT_APP_GITHUB_TOKEN} */}
      <UserSearch/>
      <UserResults/>
      
    </>
  )
}

export default Home