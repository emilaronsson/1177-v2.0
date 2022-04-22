import React from "react";
import {Tabs} from "./tabs.js"

export class LifeCycle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {show: true};
    }
    toggleHeader = () => {
        if(this.state.show == true){

            this.setState({show: false});
        }
        else {
            this.setState({show: true});
        }
    }
    render() {
      let toggleItem;
      if (this.state.show) {
        toggleItem = <Tabs />;
      };
      return (
        <div>
        {toggleItem}
         <button type="button" onClick={this.toggleHeader}>{this.state.show ? "Unmount" : "Mount"}</button>
        <b>Tryck på knappen för att toggla av/på item-tabs!</b>
        </div>
      );
    }
  }
  
//   export class Header extends React.Component {
//     render() {
//       return (
//         <h1>Hello World!</h1>
//       );
//     }
//   }