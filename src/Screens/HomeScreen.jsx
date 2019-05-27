import React from 'react';
import Toolbar from '../Components/Toolbar/Toolbar';
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