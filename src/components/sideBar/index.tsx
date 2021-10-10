import React, { useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import menuConfig from '../../route'
import Styles from  './index.less'
const SideBar = () => {
  const location = useLocation();
  useEffect(() => {
    window.scroll({
      top: 0
    });
  }, [location]);
  return (
    <div className={Styles.sidebar} >
      {
        menuConfig.map(menu => {
          const menuRoutePath = `/demos/${menu.component.toLocaleLowerCase()}`;
          return (
            <NavLink
              key={menu.component}
					);
        })
      }
    </div>
  )

}

export default SideBar