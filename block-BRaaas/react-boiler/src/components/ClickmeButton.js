function handleClick() {
    alert('Hello React Event')
}
function ClickmeButton(){
    return (
        <button onClick={handleClick} className="p-2 bg-purple-400 text-white font-bold rounded hover:bg-blue-700 mb-10">Click Me</button>
    )
}
export default ClickmeButton;
