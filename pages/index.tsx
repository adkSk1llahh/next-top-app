import React from "react";
import {Button, Htag, P, Rating, Tag} from "../components";


export default function Home() {
  return (
    <div>
    <Htag tag='h1'>qwe</Htag>
    <Button appearance='primary' className='qweqwe'>qwe</Button>
    <Button appearance='ghost' arrow='down'>qwe</Button>
    <Tag size='s' color='red'>qwe</Tag>
    <Tag size='s' color='green'>qwe</Tag>
    <Tag size='s' color='primary'>qwe</Tag>
      <Rating rating={3}/>
    </div>
  );
}
