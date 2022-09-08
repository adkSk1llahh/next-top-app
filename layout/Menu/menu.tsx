import React, {useContext} from "react";
import {AppContext} from "../../context/app.context";
import {FirstLevelMenuItem, PageItem} from "../../interfaces/menu.interface";
import {TopLevelCategory} from "../../interfaces/page.interface";

import CoursesIcon from '../../helpers/icons/courses.svg'
import ServicesIcon from '../../helpers/icons/services.svg'
import BooksIcon from '../../helpers/icons/books.svg'
import ProductsIcon from '../../helpers/icons/products.svg'
import {inspect} from "util";
import cn from 'classnames';
import styles from './menu.module.css'



const firstLevelMenu:FirstLevelMenuItem[] = [
  {route: 'courses', name: 'Курсы', icon: <CoursesIcon/>, id:TopLevelCategory.Courses},
  {route: 'services', name: 'Сервисы', icon: <ServicesIcon/>, id:TopLevelCategory.Services},
  {route: 'books', name: 'Книги', icon: <BooksIcon/>, id:TopLevelCategory.Books},
  {route: 'products', name: 'Продукты', icon: <ProductsIcon/>, id:TopLevelCategory.Products},
]

export const Menu = (): JSX.Element => {
  const {menu, setMenu, firstCategory} = useContext(AppContext)

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map(item => (
          <div key={item.route}>
            <a href={`/${item.route}`}>
              <div className={cn(styles.firstLevel, {
                [styles.firstLevelActive]: item.id == firstCategory
              })}>
                {item.icon}
                <span>{item.name}</span>
              </div>
            </a>
            {item.id == firstCategory && buildSecondLevel(item)}
          </div>
        ))}
      </>
    )
  }

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map(item => (
          <div key={item._id.secondCategory}>
            <div className={styles.secondLevel}>
              {item._id.secondCategory}
            </div>
            <div className={cn(styles.secondLevelBlock, {
              [styles.secondLevelBlockOpened]: item.idOpened
            })}>
              {buildThirdLevel(item.pages, menuItem.route)}
            </div>
          </div>
        ))}
      </div>
    )
  }

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return(
      pages.map(page => (
        <a href={`/${route}/${page.alias}`} className={cn(styles.thirdLevel, {
          [styles.thirdLevelActive]: true
        })}>
          {page.category}
        </a>
      ))
    )
  }

  return(
    <div className={styles.menu}>
      {buildFirstLevel()}
    </div>
  )
}