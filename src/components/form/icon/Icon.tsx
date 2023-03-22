import userIcon from '/src/assets/svg/icon-user.svg'
import passwordIcon from '/src/assets/svg/icon-password.svg'
import userErrorIcon from '/src/assets/svg/icon-user-yellow.svg'
import passworErrordIcon from '/src/assets/svg/icon-password-yellow.svg'
import { IconWrapper } from './IconWrapper.styles';

export const Icon = (props:{icon: string, hasError:boolean, iconIsInside:boolean}) => {
  return (
    <IconWrapper iconIsInside={props.iconIsInside}>
      <img alt="icon" src={props.icon === 'userIcon' ? (props.hasError === true ? userErrorIcon: userIcon) : (props.hasError === true ? passworErrordIcon: passwordIcon)} className='icon'></img>
    </IconWrapper>
  )
}

