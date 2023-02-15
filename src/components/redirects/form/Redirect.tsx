import React from 'react'
import {RedirectWrapper} from './RedirectWrapper'


export const Redirect = ({page, text}:{page:string, text:string}) => {
  
  return (
    <RedirectWrapper >
      <p>{text}  <a href={`/${page}`}>{page}</a></p>
    </RedirectWrapper>
  )
}
//Already have an account?