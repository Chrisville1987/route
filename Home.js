import React from 'react'
import Button from '../components/Button/Button'


const HomePage = () => {
  const name = "Emmanuel";
  const age = 43;
  const presido = "Buhari"

  let counter = 1
  return (
    <main>
   <h2>Home Page</h2> 
   <Button text="SIGN UP"
    color="blue" size="sm"/>
   <Hello name="Wealth" age = "22" />
    <Hello name = {name} age = {age} />
    <Greetings name = "ike" status = "Evening" />
    <Greetings name = "Oniselyanu" status = "afternoon" />
    <Greetings cute = {presido} />
    <countdown count = {counter} />
    <countdown down = {counter += 1} />
    </main>
  )
}

export default HomePage

const Hello = (props) => {
  return(
    <div>
      <p>Hello {props.name},you are {props.age} years old</p>
    </div>
  )
}

const Greetings = ({name,status}) => {
  return (
    <h3>Hello {name},Good </h3>
  )
}

const Countdown = () => {
  return (
    <h1></h1>
  )
}

