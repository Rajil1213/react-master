import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("renders Hello World as a text", () => {
  // Arrange
  render(<Greeting />);

  // Act: Run logic

  // Assert
  const hellowWorldElement = screen.getByText("Hello World");
  expect(hellowWorldElement).toBeInTheDocument();
});
