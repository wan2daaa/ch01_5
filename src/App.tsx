import './App.css'
import * as D from './data'

function App() {
  console.log('App called.')

  return (
    <>
      <p>
        {D.randomName()}, {D.randomJobTitle()}, {D.randomDayMonthYear()}
      </p>
      <img src={D.randomAvatar()} height="50" />
      <img src={D.randomImage()} height="300" />
    </>
  )
}

export default App
