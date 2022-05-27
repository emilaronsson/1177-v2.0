import React from "react";
import Button from '@mui/material/Button';
import { buttonTheme } from "../theme/buttontheme";
import { ThemeProvider } from "@mui/material";
import PropTypes from "prop-types"

//Detta är min återanvändningsbara komponent!
//Det är en knapp som när man trycker på den visar eller gömmer en komponent, komponenten skickas via props.

export class Toggle extends React.Component {
  constructor(props) {
    super(props);
    //I state sätter jag att komponenten alltid ska visas från början.
    this.state = { show: true };
  }

  //Toggle-funktion som visar/gömmer komponenten beroende på nuvarande state.
  toggleHeader = () => {
    if (this.state.show == true) {

      this.setState({ show: false });
    }
    else {
      this.setState({ show: true });
    }
  }

  render() {
    let toggleItem;
    if (this.state.show) {
      //Här sätter jag komponenten som jag vill visa/gömma till den komponent som skickas via props.
      toggleItem = this.props.toggleComponent;
    };
    return (
      <div>
        {toggleItem}
        <ThemeProvider theme={buttonTheme}>
          <Button color="neutral" variant="contained" type="button" onClick={this.toggleHeader}>{this.state.show ? "Unmount" : "Mount"}</Button>
        </ThemeProvider>
        <b>Tryck på knappen för att toggla av/på item-tabs!</b>
      </div>
    );
  }
}

Toggle.propTypes = {
  toggleComponent: PropTypes.object
}