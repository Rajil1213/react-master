import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders posts if requests succeeds", async () => {
    // overwrite browser's `fetch`
    window.fetch = jest.fn() as jest.MockedFunction<typeof fetch>;
    (window.fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => [{ id: "1", title: "Dummy Title", body: "", userId: "1" }],
    });
    render(<Async />);

    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
