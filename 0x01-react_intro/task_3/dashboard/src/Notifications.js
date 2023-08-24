import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "./utils";

function Notifications(){
    return (
        <div className="Notifications">
            <p>
                Here is the list of notifications
            </p>

            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority='urgent' dangerouslySetInnerHTML={{ __html: getLatestNotification() }}>

                </li>
            </ul>

            <button aria-label="Close" onClick={console.log('Close button has been clicked')} style={{float: "right", border: 'none', background: 'transparent', position: 'absolute', right: '2em', top: '2em'}}>
                <img src="./close-icon.png" alt=""/>
            </button>
        </div>
    )
}

export default Notifications;