import Header from './components/Header.jsx'
import Card from './components/Card.jsx'

import data from './data.js'

function App() {
  
  const cardElements = data.map(item => {
    return <Card 
              key={item.id}
              {...item}
            />
  })
  return (
    <>
      <Header />
      {cardElements}
    </>
  )
}

export default App
