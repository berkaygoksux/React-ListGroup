import ListGroup from "./components/ListGroup";


function App(){
  const items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Istanbul'
];

const handSelectedItem = (item: string) => {

  console.log(item);

}
  return (
  <div><ListGroup items={items} heading={"Cities"}  onSelectItem={handSelectedItem}/></div>
  );
}

export default App;