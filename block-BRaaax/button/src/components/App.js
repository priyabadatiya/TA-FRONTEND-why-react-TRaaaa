import '../styles/main.css';
import Button from './Button';
import{ buttonSizes, buttonTypes } from "./ButtonInfo"

function App(){
    return (
      <div>
          <Button label="Click me"/>
          <Button label="Click me" type={buttonTypes.SECONDARY} size={buttonSizes.LARGE}/>
          <Button label="ClickMe" type="tertiary" size="medium"/>
          <Button onClickHandler={()=> alert(`You clicked me`)}/>
          <Button disabled />
          </div>
    )
}
export default App;
