import React from "react";
import { buttonTheme } from "../theme/buttontheme";
import { ThemeProvider } from "@mui/material";
import Button from '@mui/material/Button';

export class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      console.log(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        return (
            <div>
                <h1>Något har blivit fel!</h1>
                <ThemeProvider theme={buttonTheme}>
                <Button color="neutral" variant="contained" type="button" onClick={() => this.setState({ hasError: false })}>
                Gå Tillbaka
                </Button>
                </ThemeProvider>
            </div>
        )
      }
      return this.props.children;
    }
  }