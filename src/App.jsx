import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoList } from './components/TodoList'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Header/>
      <TodoList/>
      <Footer/>
    </>
  )
}
export default App
