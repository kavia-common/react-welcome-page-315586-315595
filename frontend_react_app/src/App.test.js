import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders finalized layout landmarks and key navigation/actions", () => {
  render(<App />);

  // Header brand link (anchor). Prefer accessible role/name queries.
  // The brand link sets aria-label="Home", which defines its accessible name.
  const brandLink = screen.getByRole("link", { name: /home/i });
  expect(brandLink).toBeInTheDocument();
  expect(brandLink).toHaveAttribute("href", "/");

  // Main landmark
  const main = screen.getByRole("main");
  expect(main).toBeInTheDocument();

  // H1 "Welcome" inside the main landmark
  expect(within(main).getByRole("heading", { name: /welcome/i, level: 1 })).toBeInTheDocument();

  // Primary action button (accessible name comes from aria-label)
  expect(screen.getByRole("button", { name: /run sample action/i })).toBeInTheDocument();

  // Footer content + link
  const footer = screen.getByRole("contentinfo");
  expect(footer).toHaveTextContent(/react welcome page/i);
  expect(within(footer).getByRole("link", { name: /back to top/i })).toBeInTheDocument();
});

test("shows a non-blocking inline success/status message after clicking the sample button", async () => {
  const user = userEvent.setup();
  render(<App />);

  // Ensure we are not using a blocking browser alert anymore.
  const alertSpy = jest.spyOn(window, "alert").mockImplementation(() => {});

  const button = screen.getByRole("button", { name: /run sample action/i });
  await user.click(button);

  // Inline status region should announce the message.
  const statusRegion = screen.getByRole("status");
  expect(statusRegion).toBeInTheDocument();

  // The success message should render after the click.
  expect(within(statusRegion).getByText(/sample action triggered successfully\./i)).toBeInTheDocument();

  expect(alertSpy).not.toHaveBeenCalled();
  alertSpy.mockRestore();
});
