import { useState, createContext } from 'react';


const Notification = ({ message }) => {

    const notificationStyle = {
      position: 'absolute',
      top: 70,
      right: 50,
    }
  
    return (
      <div style={notificationStyle} >
        {message}
      </div>
    )
  
  }


export const NotificationContext = createContext()

export const NotificationProvider = ({children}) => {
    const [message, setMessaje] = useState()
    const setNotification = (message) => {
        setMessaje(message)
    
        setTimeout(() => {
          setMessaje('')
        }, 2000)
    
      }
    return(
        <NotificationContext.Provider value={setNotification}>
            <Notification message={message} />
            { children }
        </NotificationContext.Provider>
    )
}
