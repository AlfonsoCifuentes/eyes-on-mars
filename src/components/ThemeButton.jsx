import React from 'react';


export default function ThemeButton(props) {
  return <button className='themeButton' {...props}>{props.children}</button>;
}
