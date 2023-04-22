
import {RedirectWrapper} from './RedirectWrapper'
import React from "react";


export const Redirect = ({page, text}:{page:string, text:string}) => {
  
  return (
    <RedirectWrapper  >
      <p>{text}  <a href={`/${page}`}>{page}</a></p>
    </RedirectWrapper>
  )
}
//Already have an account?