import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders header brand link, welcome heading, sample button, and footer content", () => {
  render(<App />);

  // Header brand link (anchor). Prefer accessible role/name queries.
  const brandLink = screen.getByRole("link", { name: /react welcome/i });
  expect(brandLink).toBeInTheDocument();
  expect(brandLink).toHaveAttribute("href", "/");

  // Main heading
  expect(screen.getByRole("heading", { name: /welcome/i, level: 1 })).toBeInTheDocument();

  // Primary action button (query by visible accessible name)
  expect(screen.getByRole("button", { name: /sample button/i })).toBeInTheDocument();

  // Footer content
  expect(screen.getByRole("contentinfo")).toHaveTextContent(/react welcome page/i);

  // Footer link
  expect(screen.getByRole("link", { name: /back to top/i })).toBeInTheDocument();
});
