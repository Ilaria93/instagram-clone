import React from 'react'
import Card from '../components/Card'
import Stories from '../components/Stories'

//images
import goku from '../assets/Profile/goku.jpeg'
import trunks from '../assets/Profile/trunks-future.jpeg'
import pencilTrunks from '../assets/trunks/drawing.png'
import trunksS from '../assets/trunks/trunks.jpg'
import bulma from '../assets/Profile/Bulma&V.jpeg'
import Bra from '../assets/Profile/bra.png'
import battleBU from '../assets/goku/gokuVsBu.jpeg'
import gokuVsBu from '../assets/goku/GokuvsBu2.jpeg'
import gokuBU from '../assets/goku/gokuvsBu3.jpeg'
import babyBra from '../assets/bra/babybra.jpeg'

const arrayOfObjects = [
  {
    image: Bra,
    name: 'Bra',
    number: 150,
    comment_number: 9,
    pubblicetion: `${2} ${' '} ${'ore fa'}`,
    images: [babyBra],
  },
  {
    image: goku,
    name: 'Goku',
    number: 580,
    comment_number: 13,
    pubblicetion: `${5} ${' '} ${'ore fa'}`,
    images: [battleBU, gokuVsBu, gokuBU],
  },
  {
    image: bulma,
    name: 'Bulma',
    number: 789,
    comment_number: 65,
    pubblicetion: `${1} ${' '} ${'Giorno fa'}`,
    images: [bulma],
  },
  {
    image: trunks,
    name: 'Trunks',
    number: 200,
    comment_number: 7,
    pubblicetion: `${3} ${' '} ${'ore fa'}`,
    images: [pencilTrunks, trunksS],
  },
]

export default function LeftSidebar() {
  return (
    <div>
      <Stories />
      {arrayOfObjects.map((element, index) => (
        <Card
          key={index}
          image={element.image}
          name={element.name}
          number={element.number}
          comment_number={element.comment_number}
          pubblicetion={element.pubblicetion}
          background={element.images}
          className="menuItem"
        ></Card>
      ))}
    </div>
  )
}
