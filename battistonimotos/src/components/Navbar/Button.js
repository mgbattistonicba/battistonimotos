import './Button.css'

const Button = ({handleClick, children }) => {
 

    return (
        <div>
            <button 
                className="Button"
                onClick={handleClick}
            >{children}</button>
        </div>
        
    )
}

export default Button