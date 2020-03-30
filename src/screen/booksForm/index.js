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
import { getAllBooks, getBooksDetail, addBooks} from "../../actions/books.js";
import { RefreshControl } from "react-native";

class BooksForm extends Component {
  constructor(props) {
    super(props);

    const { navigation } = this.props;
    this.state = {
      id: null,
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

  
  reload() {
    this.props.getBooksDetail(this.state.id);
  }

 

  add(){
    const data = {
      book_id: this.state.id,
      title: this.state.title,
      author: this.state.author,
      price: this.state.price,
      stock: this.state.stock
    }
    this.props.addBooks(data);
    this.props.getAllBooks();
    this.props.navigation.goBack();
  }

  render() {
    // console.log("Idnya adalah " + this.props.id);

    const { navigation } = this.props;
    

    
    

    return (
      <Container>
        <CustomHeader navigation={navigation} title="Add Book" />
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
              <Label>Book ID</Label>
              <Input
              onChangeText={(id) => this.setState({ id })}  
              value={this.state.id} />
            </Item>
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
              value={this.state.stock} />
            </Item>
          </Form>

          <Button onPress = {() => this.add()} block primary>
            <Text>ADD</Text>
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
    addBooks: state.addBooks.data,
    error: state.detail.error || state.updateBooks.error,

  

    // loading: state.update.loading,
    // update: state.update.data,
    // error: state.update.error
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({getAllBooks, getBooksDetail, addBooks }, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(BooksForm);
