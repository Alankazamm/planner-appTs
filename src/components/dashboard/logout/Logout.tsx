//description: logout component
//when clicked, its removes the user token from the local storage and redirects the user to the login page

//hooks
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
//contexts
import { UserContext } from '../../../contexts/userContext';
import { LogoutContainer } from './LogoutContainer';
//styles

//assets
import logoIcon from '/src/assets/svg/icon-logo.svg';
import logoutIcon from '/src/assets/svg/btn-logout.svg';



const Logout = () => {
    const { signout } = useContext(UserContext);
    const navigate = useNavigate();
    const logoutHandler = () => {
        signout();
        navigate("/login");
    }
  return (
    <LogoutContainer onClick={logoutHandler}>
       <img src={logoIcon} alt=''></img>
            <div >
                <img src={logoutIcon} alt=''></img>
                <span >Logout</span>
            </div>
    </LogoutContainer>
  )
}

export default Logout
