import userIcon from '/src/assets/svg/icon-user.svg';
import passwordIcon from '/src/assets/svg/icon-password.svg';
import userErrorIcon from '/src/assets/svg/icon-user-yellow.svg';
import passworErrordIcon from '/src/assets/svg/icon-password-yellow.svg';
import { IconWrapper } from './styles';
import * as React from "react";
export const Icon = (props) => {
    return (React.createElement(IconWrapper, { iconIsInside: props.iconIsInside },
        React.createElement("img", { alt: "icon", src: props.icon === 'userIcon' ? (props.hasError === true ? userErrorIcon : userIcon) : (props.hasError === true ? passworErrordIcon : passwordIcon), className: 'icon' })));
};
//# sourceMappingURL=Icon.js.map