import React, { Component, createContext } from 'react'
import cardBackgroundBlack from "../asset/cardBackground.jpg"
import cardBackgroundLight from "../asset/cardbackgroundLight.jpg"
import profile from "../asset/crop.jpg"
import profilePS from "../asset/ProfilePS.jpg"


export const ThemeContext = createContext()

export default class ThemeContextProvider extends Component {
    state = {
        isLightTheme: true,
        light: {
          profile:profilePS,
          profileDesign: {
            zIndex: "1",
            width: "320px",
            height: "320px",
            position: "relative",
            marginTop: "-75px",
            marginBottom: "50px",
            transitionDuration: "0.5s",
          },
          color: "#050505",
          backgroundColor: "#ffff",
          skillBorder: "1px solid #050505",
          cardBackgroundImg: cardBackgroundLight,
          border: "1px solid white",
          projectColor: "#ff9900",
        },
        dark :{
          profile: profile,
          profileDesign: {
            zIndex: "1",
            width: "320px",
            height: "320px",
            position: "relative",
            borderRadius: "50%",
            border: "3px solid white",
            marginTop: "-75px",
            marginBottom: "50px",
            transitionDuration: "0.5s",
            boxShadow: "0 0 10px 0 black",
          },
          color: "#ffff",
          skillBorder: "1px solid #ffff",
          projectColor: "#050505",
          backgroundColor: "#27374D",
          cardBackgroundImg: cardBackgroundBlack,
          border: "1px solid black"
        }
    }
  toogleTheme = () => {
    this.setState({
      isLightTheme: !this.state.isLightTheme
    })
  }
  render() {
    return (
      <ThemeContext.Provider value={{...this.state, toogleTheme:this.toogleTheme}}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}
