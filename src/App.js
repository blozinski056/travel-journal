import './App.css';
import Header from "./components/Header.js"
import Card from "./components/Card.js"
import data from "./components/data.js"

export default function App() {
  const cards = data.map(item => {
    return (
      <Card 
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div>
      <Header />
      <section className="card-container">
        {cards}
      </section>
    </div>
  )
}