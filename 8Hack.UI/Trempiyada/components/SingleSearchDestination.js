import React, {Component} from 'react';
import {Text, CheckBox, ListItem} from 'native-base'

export default class SingleSearchDestination extends Component {
    constructor(props) {
        super(props);
        this.state = {checked: false}
        this.onPress = this.onPress.bind(this);
    }

    componentDidMount = () => {
        this.setState({checked:this.props.checked})
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({checked:nextProps.checked})
    }

    onPress(){
        var checked = this.state.checked;
        this.setState({checked:!checked})
        this.props.onChecked(this.props.destinationData);
    }

    render() {
        var {destinationData} = this.props;
        var {checked}  = this.state;
        return (
            <ListItem>
                <CheckBox checked={checked}
                          onPress={this.onPress}/>
                <Text style={{margin:5}}>{destinationData.name}</Text>
            </ListItem>
        )
    }
}