import React, {Component} from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { todosFetch } from './redux/actions';
import _ from 'lodash';



class Main extends Component{
    componentWillMount(){
        this.props.todosFetch();   
    }
    
    _onPressButton(){
        this.props.testAction({title: "test title"});
    }
    

    renderListItem(item){
        return(
            <View style={{height:30, borderBottomColor: '#c3c3c3', borderBottomWidth:1, marginBottom: 5, fontSize: 15, lineHeight:30}}>
                <Text>{item.title}</Text>
            </View>
        )
        
    }

    _keyExtractor = (item, index) => item.uid;


    render(){
       
        return(
            // <View>
            //     <Text>tt</Text>
            // </View>
           
            <FlatList
                data={this.props.todos}
                renderItem={({item}) => this.renderListItem(item)}
                keyExtractor={this._keyExtractor}
          />
           
        )
    }
}

mapStateToProps = state => {
    

    const todos = _.map(state.todo.todos, (val, uid) => {
        return {...val, uid}
    }); 

    console.log(todos);

    return {
        title: state.todo.title,
        todos
    }
}

export default connect(mapStateToProps, {todosFetch})(Main);