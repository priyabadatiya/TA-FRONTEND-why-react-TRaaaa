function handleClick() {
    alert('To learn React use https://reactjs.org');
    alert('React and ReactDOM works together');
    alert('Babel helps in writing JSX')
}

function HelpButton() {
    return (
        <button onClick={handleClick} className="p-2 bg-green-400 text-white font-bold rounded hover:bg-green-800 mb-10">How can I help you?</button>
    )
}

export default HelpButton;