import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";


function App(){
  const [alertVisible, setAlertVisibility] = useState(false);
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
      {
        alertVisible && 
        <Alert onClose={()=> setAlertVisibility(false)}>
          Hello <span className="text-danger">World!</span> 
        </Alert>
      }
      <Button onClick={() => setAlertVisibility(true)}>
        Do not Click
      </Button>
    </div>  
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
    </div>
  </div>
)
}
export default App;