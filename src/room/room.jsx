import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
const Room = () => {
    const {roomid} = useParams();

    const myMeeting = async (element) => {

        // generate Kit Token
        const appID =246718069 ;
        const serverSecret = "b91c26222cf5fcf3b5da8f355c5bbb61";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomid,
            Date.now().toString(),
            "adarsh gurjar"
            );

        const zp = ZegoUIKitPrebuilt.create(kitToken);
 // start the call
 zp.joinRoom({
        container: element,
       
        scenario: {
         mode: ZegoUIKitPrebuilt.VideoConference,
        },
   });
  };
  return (
    <div className='room-page'>
        <div ref={myMeeting}/> 
        
    </div>
  )
}

export default Room