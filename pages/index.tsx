import React, {useState} from "react";
import {Button, Htag, P, Rating, Tag} from "../components";
import {withLayout} from "../layout/Layout";
import {GetStaticProps} from "next";
import axios from 'axios';
import {MenuItem} from "../interfaces/menu.interface";


const Home = ({menu, firstCategory}:HomeProps) => {
  console.log(menu)

  const [rating, setRating] = useState<number>(4)
  return (
    <>
      <Htag tag='h1'>qwe</Htag>
      <Button appearance='primary' className='qweqwe'>qwe</Button>
      <Button appearance='ghost' arrow='down'>qwe</Button>
      <Tag size='s' color='red'>qwe</Tag>
      <Tag size='s' color='green'>qwe</Tag>
      <Tag size='s' color='primary'>qwe</Tag>
      <Rating rating={rating} isEditable setRating={setRating}/>
    </>
  );
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0
  const {data:menu} = await axios.post<MenuItem>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  })

  return{
    props:{
      menu,
      firstCategory
    }
  }
}


interface HomeProps extends Record<string, unknown>{
  menu: MenuItem[]
  firstCategory: number
}