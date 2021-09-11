import{ buttonSizes, buttonTypes } from "./ButtonInfo"
function Button(props) {
    const getStyles = () => {
        let { type = buttonTypes.PRIMARY, size = buttonSizes.MEDIUM } = props;
        return `button button--${type} button--${size}`
    }

    return (
        <button onClick={props.onClickHandler} className={getStyles()} disabled={props.disabled}>{props.label || 'button'}</button>
    )
}
export default Button;