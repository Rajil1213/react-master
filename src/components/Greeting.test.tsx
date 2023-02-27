import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import { fireEvent } from "@testing-library/react";

describe("Greeting Component", () => {
  test("renders Hello World as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act: Run logic

    // Assert
    const hellowWorldElement = screen.getByText("Hello World");
    expect(hellowWorldElement).toBeInTheDocument();
  });

  test("renders 'good to see you' if the button was NOT clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act: Run logic

    // Assert
    const outputElememt = screen.getByText("good to see you", { exact: false });
    expect(outputElememt).toBeInTheDocument();
  });

  test("renders 'Changed!' if the button is clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act: Run logic
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test("does not render 'Changed!' if the button is clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act: Run logic
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);

    // Assert
    // query return `null`, using `get` will cause this to fail even when it is right
    const outputElement = screen.queryByText("good to see you", { exact: false });
    expect(outputElement).not.toBeInTheDocument();
  });
});
