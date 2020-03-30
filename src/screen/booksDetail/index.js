import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Card,
  CardItem,
  Thumbnail,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Form,
  Item,
  Input,
  Label
} from "native-base";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Image, StyleSheet } from "react-native";
import CustomHeader from "../../components/customHeader";
// import { StyleSheet } from 'react-native';
import { getAllBooks, getBooksDetail, updateBooks } from "../../actions/books.js";
import { RefreshControl } from "react-native";

class BooksDetail extends Component {
  constructor(props) {
    super(props);

    const { navigation } = this.props;
    this.state = {
      id: navigation.getParam("id"),
      title: null,
      author: null,
      price: null,
      stock: null
    };
    // console.log("id yang di state " + this.state.bookId);
  }

  componentDidMount() {
    this.reload();
  }

  componentDidUpdate(prevProps, prevState){
    const {books} = this.props;
    if (prevProps.books !== books){
      this.setState(books);
    }
  }

  reload() {
    this.props.getBooksDetail(this.state.id);
  }
  

 

  updateBooks(){
    const data = {
      book_id: this.state.id,
      title: this.state.title,
      author: this.state.author,
      price: this.state.price,
      stock: this.state.stock
    }
    this.props.updateBooks(data.book_id, data);
    this.props.getAllBooks();
    this.props.navigation.goBack();

    
    
  }

  render() {
    // console.log("Idnya adalah " + this.props.id);

    const { navigation } = this.props;
    

    
    

    return (
      <Container>
        <CustomHeader navigation={navigation} title="Book Detail" />
        <Content
          refreshControl={
            <RefreshControl
              refreshing={this.props.loading}
              onRefresh={() => this.reload()}
            />
          }
        >
          <Form>
            
            
            <Item floatingLabel>
              <Label>Title</Label>
              <Input
              onChangeText={(title) => this.setState({ title })}  
              value={this.state.title} />
            </Item>
            
            <Item floatingLabel>
              <Label>Author</Label>
              <Input
              onChangeText={(author) => this.setState({ author })}
              value={this.state.author} />
            </Item>

            <Item floatingLabel>
              <Label>Price</Label>
              <Input 
              onChangeText={(price) => this.setState({ price })} 
              value={this.state.price} />
            </Item>

            <Item floatingLabel>
              <Label>Stock</Label>
              <Input
              onChangeText={(stock) => this.setState({ stock })}
              value={" " + this.state.stock} />
            </Item>
          </Form>

          <Button onPress = {() => this.updateBooks()} block primary>
            <Text>Update</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

// const styles = StyleSheet.create({

// })

function mapStateToProps(state) {
  return {
    loading: state.detail.loading || state.updateBooks.loading,
    books: state.detail.data,
    updateBooks: state.updateBooks.data,
    // error: state.detail.error || state.updateBooks.error

  

    // loading: state.update.loading,
    // update: state.update.data,
    // error: state.update.error
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ getAllBooks, getBooksDetail, updateBooks }, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(BooksDetail);
