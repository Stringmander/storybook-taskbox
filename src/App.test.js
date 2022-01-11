import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders InboxScreen", () => {
  render(<App />);
  const linkElement = screen.getByText(/Taskbox/i || /Oh no!/i);
  expect(linkElement).toBeInTheDocument();
});
