import './App.css'
import Card from './Components/Card'

function App() {

  return (
    
     <div className='cards'>
      <Card img="/img/resim1.jpg" title="Title 1" desc="Description 1" />
      <Card img="/img/resim2.jpg" title="Title 2" desc="Description 2" />
      <Card img="/img/resim3.jpg" title="Title 3" desc="Description 3" />
      <Card img="/img/resim4.jpg" title="Title 4" desc="Description 4" />
     </div>
    
  )
}

export default App
