import {SidebarProps} from "./Sidebar.props";
import React from "react";
import {Menu} from "../Menu/menu";
import Logo from '../logo.svg';
import cn from 'classnames';
import styles from './Sidebar.module.css';
import {Search} from "../../components/Search/Search";

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return(
    <div className={cn(className, styles.sidebar)} {...props}>
      <Logo className={styles.logo} />
      <Search/>
      <Menu />
    </div>
  )
}