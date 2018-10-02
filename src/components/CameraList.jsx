import React from 'react';
import { connect } from 'react-redux';
import Camera from './Camera';

const CameraList = (props) => {
    let listOfCameras = props.cameras.map(cameras => <Camera key={cameras.id} cameras={cameras}/>)
    return (
        <React.Fragment>
        <h2>CameraList Componenet</h2>
        <p>{listOfCameras}</p>
        </React.Fragment>
    )
}

const mapStateToProps = ({ cameras }) => ({
    cameras
})

export default connect(mapStateToProps)(CameraList)