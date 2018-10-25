import React, {Component} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { testAction } from './redux/actions';



class Main extends Component{

    
    _onPressButton(){
        this.props.testAction({title: "test title"});
    }
    

    render(){
        return(
            <View>
                <Text>Test</Text>
                <Text>Todo title : {this.props.title}</Text>

                <TouchableOpacity onPress={this._onPressButton.bind(this)}>
                    <Text>Test Action</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

mapStateToProps = state => {
    return {
        title: state.todo.title
    }
}

export default connect(mapStateToProps, {testAction})(Main);