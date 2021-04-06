import React from 'react';
import { Touchable } from 'react-native';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class WriteStoryScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      author: '',
      story: ''
    }
  }

  submitStory = async () => {
    db.collection("title")
      .doc(this.state.title)

    db.collection("author")
      .doc(this.state.author)

    db.collection("story")
      .doc(this.state.story)

    this.setState({
      title: "",
      author: "",
      story: ""
    })
  }

  render() {
    return (
      <View>
        <Text style={styles.headerText}>Write your story...</Text>

        <TextInput
          style={styles.title}
          placeholder="Title of the story..."
          onChangeText={text => this.setState({ title: text })}
          value={this.state.title}
        />

        <TextInput
          style={styles.author}
          placeholder="Name of author..."
          onChangeText={text => this.setState({ author: text })}
          value={this.state.author}
        />

        <TextInput
          style={styles.story}
          placeholder="Write the story..."
          onChangeText={text => this.setState({ story: text })}
          value={this.state.story}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.submitStory("title","author","story")
          }}>
          <Text>Submit</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    color: '#ddddd',
    fontWeight: '700',
    fontSize: 50,
    marginLeft: 500,
  },
  title: {
    width: 600,
    height: 40,
    borderWidth: 1.5,
    fontSize: 20,
    marginTop: 20,
    marginLeft: 410
  },
  author: {
    width: 450,
    height: 40,
    borderWidth: 1.5,
    fontSize: 20,
    marginTop: 30,
    marginLeft: 490
  },
  story: {
    width: 800,
    height: 300,
    borderWidth: 1.5,
    fontSize: 20,
    marginTop: 30,
    marginLeft: 310
  },
  button: {
    width: 250,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: "#ff9800",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.30,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop: 15,
    marginLeft: 870
  },
})