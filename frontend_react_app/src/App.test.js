import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders header brand link, welcome heading, sample button, and footer content", () => {
  render(<App />);

  // Header brand link (anchor). Prefer accessible role/name queries.
  // The brand link sets aria-label="Home", which defines its accessible name.
  const brandLink = screen.getByRole("link", { name: /home/i });
  expect(brandLink).toBeInTheDocument();
  expect(brandLink).toHaveAttribute("href", "/");

  // Main heading
  expect(screen.getByRole("heading", { name: /welcome/i, level: 1 })).toBeInTheDocument();

  // Primary action button
  // Note: aria-label overrides the visible text for accessible name computation.
  expect(screen.getByRole("button", { name: /run sample action/i })).toBeInTheDocument();

  // Footer content
  expect(screen.getByRole("contentinfo")).toHaveTextContent(/react welcome page/i);

  // Footer link
  expect(screen.getByRole("link", { name: /back to top/i })).toBeInTheDocument();
});
