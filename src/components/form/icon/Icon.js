import { jsx as _jsx } from "react/jsx-runtime";
const userIcon = require('/src/assets/svg/icon-user.svg');
const passwordIcon = require('/src/assets/svg/icon-password.svg');
const userErrorIcon = require('/src/assets/svg/icon-user-yellow.svg');
const passworErrordIcon = require('/src/assets/svg/icon-password-yellow.svg');
import { IconWrapper } from './IconWrapper.styles';
// import passwordIcon from '/src/assets/svg/icon-password.svg';
// import userErrorIcon from '/src/assets/svg/icon-user-yellow.svg';
// import passworErrordIcon from '/src/assets/svg/icon-password-yellow.svg';
// import { IconWrapper } from './IconWrapper.styles';
export const Icon = (props) => {
    return (_jsx(IconWrapper, { iconIsInside: props.iconIsInside, children: _jsx("img", { src: props.icon === 'userIcon' ? (props.hasError === true ? userErrorIcon : userIcon) : (props.hasError === true ? passworErrordIcon : passwordIcon), className: 'icon' }) }));
};
