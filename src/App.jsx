import { useState } from 'react'
import { Button } from "@material-tailwind/react";
import {Header} from "./component/Header"

function App() {
  

  return (
    <>
    <Header/>
      <h1  className="text-3xl  font-bold underline">
    Hello world!
  </h1>
  <Button>Button</Button>
    </>
  )
}

export default App
