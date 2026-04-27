import './App.css';
import Card from './components/Card';

const App = () => {
  return (
    <div className="content-wrapper">
      <Card
        href="#"
        title="Card title"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
      >
        <img
          src="src/assets/card.png"
          className="card-img-top"
          alt="Image cap"
        />
      </Card>
      <Card
        href="#"
        title="Special title treatment"
        text="With supporting text below as a natural lead-in to additional content."
      />
    </div>
  );
};

export default App;
