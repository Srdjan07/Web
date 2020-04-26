import React from 'react';
import BackgroundImgComponent from '../Images/CPU.jpg';
import MainFrame from '../Components/MainFrame';
import Axios from 'axios';

export default class GpuPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cpus: []
        }
    }
    UNSAFE_componentWillMount() {
        this.ListFetch();
    }
    ListFetch = () => {
        Axios.get('http://localhost:9000/gpureach', {
            headers: { 'Access-Control-Allow-Origin': '*' }
        })
            .then(response => this.setState({ cpus: response.data }))
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    render() {
        return (<MainFrame cpu={this.state.cpus} backgroundImage={BackgroundImgComponent}>
        </MainFrame>
        );
    }
}