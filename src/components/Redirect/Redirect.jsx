import { RedirectWrapper } from './styles';
export const Redirect = ({ page, text }) => {
    return (<RedirectWrapper>
      <p>{text}  <a href={`/${page}`}>{page}</a></p>
    </RedirectWrapper>);
};
//Already have an account?
