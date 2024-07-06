import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App(){
  let items = [
    'Napoli',
    'Torino',
    'Milano',
    'Vienna'
  ]
  const handleSelectItem =(item:string) =>{
    console.log(item)
  }
  return (
    <div className="container">
  <div>
    <Alert>
      Hello <span className="text-danger">World!</span> 
    </Alert>
  </div>  
  <div>
    <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
  </div>
  </div>
)
}
export default App;