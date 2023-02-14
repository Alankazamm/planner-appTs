import userIcon from '/src/assets/svg/icon-user.svg';
import passwordIcon from '/src/assets/svg/icon-password.svg';
import { IconWrapper } from './IconWrapper.styles';




export const Icon = (props:{icon: string, iconIsInside:boolean}) => {
  return (
    <IconWrapper iconIsInside={props.iconIsInside}>
      <img src={props.icon === 'userIcon' ? userIcon : passwordIcon} className='icon'></img>
    </IconWrapper>
  )
}

