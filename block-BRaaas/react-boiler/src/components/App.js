import ClickmeButton from "./ClickmeButton";
import HelpButton from "./HelpButton";
import GotButton from "./GotButton";
import FruitsButton from "./FruitsButton";

function App() {
    return (
        <div className="m-20 flex items-center flex-col">
        <ClickmeButton />
        <HelpButton />
        <GotButton />
        <FruitsButton />
        </div>
    )
}

export default App;
