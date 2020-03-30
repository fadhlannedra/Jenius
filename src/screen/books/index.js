import React, { Component } from "react";
import  {getAllBooks, deleteBooks}  from "../../actions/books.js";
import {
  Container,
  Content,
  Text,
  Body,
  ListItem,
  Icon,
  Fab,
  Right,
  Left,
  Toast,
  Button,

} from "native-base";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import CustomHeader from "../../components/customHeader.js";
import { RefreshControl, Alert } from "react-native";

class Books extends Component {
  
  componentDidMount() {
    this.reload();
}

reload() {
    this.props.getAllBooks();
}

showDetail(id) {
    this.props.navigation.navigate("BooksDetail", {id})
}

form() {
    this.props.navigation.navigate("BooksForm")
}

delete(id,title) {
    Alert.alert(
        "Confirmation",
        "Hapus " + title + "?",
    [
        {
            text: "cancel",
            style: "cancel"
        },

        {
            text: "delete",
            onPress: () => {
                this.props.deleteBooks(id);
                this.reload()
            }
        },
    ]

    );
}

renderListItem(data, index) {
    return (
        <ListItem key={'item-' + index} onPress={() =>
            this.showDetail(data.book_id) 
            // data.book_id untuk manggil di database
        }>
            <Left>
                    <Icon type="Ionicons" name="md-bookmarks"></Icon>
            </Left>
            <Body>
                <Text style={{left: -75}}>{data.title}</Text>
                <Icon type="FontAwesome5" name="list-ul" style={{ color:'#401209', padding :10, right: -75, fontSize: 15}}></Icon>
            </Body>

            <Right>
            <Icon type="Feather" name='trash-2' style={{ color:'#ff5261', padding: 10}}  onPress={() => this.delete(data.book_id,data.title)}></Icon>
            </Right>
        </ListItem>
    );
}

render() {

    
    // console.log('dataa ' + JSON.stringify(this.props.books));
    return (
        <Container>
            <CustomHeader navigation={this.props.navigation} title="Books" disableBackButton={true}/>
            <Content refreshControl={
                    <RefreshControl refreshing={this.props.loading}
                                    onRefresh={() => this.reload()}/>}>
               
                {this.props.books.map((data, index) => this.renderListItem(data, index))}
            </Content>
          
          <Fab
            
            style={{ backgroundColor: '#5067FF'}}
            direction="up"
            position="bottomRight"
            onPress={() => this.form()}>
            <Icon name="add" />
          </Fab>
        
              {/* {
                  error && Toast.show({
                      text: error.message,
                      buttonText: "ok",
                      type: "danger",
                      duration : 5000
                  })
              } */}
        </Container>
    );
}
}

function mapStateToProps(state) {
return {
    loading: state.books.loading || state.deleteBooks.loading,
    books: state.books.data,
    deleteBooks: state.deleteBooks.data,
    
   
    
};
}

function matchDispatchToProps(dispatch) {
return bindActionCreators({getAllBooks, deleteBooks}, dispatch);
}

export default connect(
mapStateToProps,
matchDispatchToProps,
)(Books);