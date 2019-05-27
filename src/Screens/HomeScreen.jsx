import React from 'react';
import Toolbar from '../Components/Toolbar/Toolbar';
import {getOrganizationData} from '../services/api';
class HomeScreen extends React.Component {

    state = {
        selectValue: 'polish'
    }

    handleSelectChange = (event) => {
        console.log(event.target.value)
        this.setState({selectValue: event.target.value});
    }

    showOrganizationDetails = async e => {
        console.log("SHOW DETARILS")
        const token = await getOrganizationData();
    }

    render() {
        return (
            <div>
                <Toolbar value={this.state.selectValue} onChange={this.handleSelectChange} 
                    homepage={true} onButtonClick={this.showOrganizationDetails}/>
            </div>
        );
    }
}

export default HomeScreen;