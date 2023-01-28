import { Component, ErrorInfo } from "react";

type ErrorState = {
  hasError: boolean;
};

class ErrorBoundary extends Component<any, ErrorState> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log("An error occurred!");
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong!</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
