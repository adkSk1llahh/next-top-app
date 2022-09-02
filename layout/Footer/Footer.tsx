import {FooterProps} from "./Footer.props";
import React from "react";
import cn from 'classnames';
import styles from './Footer.module.css'
import {format} from 'date-fns'


export const Footer = ({className,...props}: FooterProps):JSX.Element => {
  return(
    <footer className={cn(className, styles.footer)} {...props}>
      <div>
        OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
      </div>

      <div>
        Пользовательское соглашение
      </div>

      <div>
        Политика конфиденциальности
      </div>
    </footer>
  )
}