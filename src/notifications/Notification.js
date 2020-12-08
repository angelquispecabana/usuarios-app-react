import React, { useState } from "react";
import { REMOVE_NOTIFICATION, SUCCESS } from "../actions/notificationsActions";
import './Notification.css';

const Notification = (props) => {
    const [exit, setExit] = useState(false);
    const [width, setWidth] = useState(0);
    //const [intervalID, setIntervalID] = useState(null);

    const handleStartTimer = () => {
        const id = setInterval(() => {
          setWidth(prev => {
            if (prev < 100) {
              return prev + 0.5;
            }
    
            clearInterval(id);
            return prev;
          });
        }, 30);
    
        //setIntervalID(id);
    };
    
    const handleCloseNotification = () => {
        setExit(true);
        setTimeout(() => {
          props.dispatch({
            type: REMOVE_NOTIFICATION,
            id: props.id
          })
        }, 400)
    };

    React.useEffect(() => {
        if (width === 100) {
          // Close notification
          handleCloseNotification()
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [width])
    
    React.useEffect(() => {
        handleStartTimer();
    }, []);

    return (
        <div className={`notification-item ${
            props.type === SUCCESS ? "success" : "error"} ${exit ? "exit" : ""}`}>
            <p>{props.message}</p>
            <div className={"bar"} style={{ width: `${width}%` }} />
        </div>
    )
}

export default Notification;