import React, { Component } from "react";
import { store } from "./src/utils/store.js";
import { Provider } from "react-redux";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import HomeScreen from "./src/screen/home/index.js";
import CounterIncrement from "./src/screen/counterIncrement/index.js";
import counterDecrement from "./src/screen/counterDecrement/index.js";
import CustomHeader from "./src/components/customHeader.js";
import CustomDrawer from "./src/components/customDrawer.js";
import Books from "./src/screen/books/index.js";
import BooksDetail from "./src/screen/booksDetail/index.js";2
import { createStackNavigator } from "react-navigation-stack";
import { Root } from "native-base";
import BooksForm from "./src/screen/booksForm/index.js";

const HomeNavigator = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Books: { screen: Books },

    CounterIncrement: { screen: CounterIncrement },
    CounterDecrement: { screen: counterDecrement }
  },

  {
    initialRouteName: "Home",

    contentComponent: props => <CustomDrawer {...props} />
  }
);

const Navigator = createStackNavigator(
  {
    HomeNavigator,
    Home: { screen: HomeScreen },
    CounterIncrement: { screen: CounterIncrement },
    CounterDecrement: { screen: counterDecrement },
    Books: { screen: Books },
    BooksDetail: { screen: BooksDetail },
    BooksForm: { screen: BooksForm }
  },

  { initialRouteName: "HomeNavigator", headerMode: "none" }
);

const AppContainer = createAppContainer(Navigator);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      // <Root>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      // </Root>
    );
  }
}
