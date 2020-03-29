import React, { Component } from "react";
import Header from "./components/Header/Header";
import Headline from "./components/Headline/index";
import SharedButton from "./components/Button/index";
import ListItem from "./components/ListItem/index";
import { connect } from "react-redux";
import { fetchPosts } from "./actions/index";
import "./app.scss";

const tempArray = [
  {
    fname: "Joe",
    lname: "Andrew",
    email: "Joe11@gmail.com",
    age: 25,
    onlineStatus: false
  }
];
class App extends Component {

  // constructor(props){
  //     super(props)
  //     this.fetch=this.fetch.bind(this)
  // }  
  fetch=()=> {
     
    this.props.fetchPosts();
   
  }
  render() {
    const { posts } = this.props;
    const configButton = {
      buttonText: "Get Posts",
      emitEvent: this.fetch
    };
    return (
      <div className="App" data-test="appComponent"> 
        <Header />
        <section className="main">
          <Headline
            header="Posts"
            desc="Click on this button to render Post"
            tempArray={tempArray}
          />
          <SharedButton {...configButton} />
          {posts.length > 0 &&
            posts.map((post, index) => {
              const { title, body } = post;
              const configItem = {
                title,
                desc: body
              };
              return <ListItem key={index} {...configItem} />;
            })}
        </section>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    posts: state.Posts
  };
};

export default connect(mapStatetoProps,{fetchPosts})(App);
