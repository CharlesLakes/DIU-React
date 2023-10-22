import React from 'react';
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SoundPlayer from '../components/sound_player';

const NotificationsTitleStyles = {
  borderBottom: "solid 1px black",
  width: "300px",
  textAlign: "center",
  padding: "5px 0px",
  margin: "0"
};

const NotificationsListItemStyles = {
  border: "solid 1px black",
  width: "300px",
  padding: "10px",
  boxSizing: "border-box",
  textAlign: "center"
};

const RecordingStyles = {
  margin: "10px 0",
};

function Recordings() {
  const navigate = useNavigate();

  return (
    <div className='page'>
      <ArrowBackIcon fontSize='large' style={{ cursor: "pointer" }} onClick={() => navigate('/')} />
      <div className='menu'>
        <h2 style={NotificationsTitleStyles}>Grabaciones</h2>
        <div>
          <div style={RecordingStyles}>
            <h3>Reunion 10/10/23</h3>
            <SoundPlayer audioFile= 'https://ia600508.us.archive.org/4/items/reunion1_202310/reunion1.mp3' />
          </div>
          <div style={RecordingStyles}>
            <h3>Reunion 15/10/23</h3>
            <SoundPlayer audioFile='https://ia804704.us.archive.org/24/items/reunion2_202310/reunion2.mp3' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recordings;
