import data from '../data';
function handleClick(name) {
    alert(name);
  }
  
  function Button(props) {
        return (
          <button onClick={() =>  handleClick(props.id)} className="p-2 bg-blue-400 text-white font-bold rounded hover:bg-blue-700 mb-10 mr-5">{props.value}</button>
        )
    }
  
  function FruitsButton() {
      return (
        <div>
          {data.map((fruit, i) => <Button key={i} {...fruit}/>
          )}        
        </div>
  
      )
  } 
  
  export default FruitsButton;