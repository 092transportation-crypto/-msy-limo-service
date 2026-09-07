/**
 * Address autocomplete: typing fetches suggestions (Photon fallback when no
 * Google Maps key is configured), picking one fills the formatted address.
 */
import React from "react";
import { render, screen, fireEvent, act, waitFor } from "@testing-library/react";
import AddressAutocomplete from "./AddressAutocomplete";

const PHOTON = {"features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-76.6682,39.1754]},"properties":{"name":"Test Plaza","housenumber":"100","street":"Main St","city":"Laurel","state":"Maryland","postcode":"20723","countrycode":"US"}}]};

beforeEach(() => {
  jest.useFakeTimers();
  global.fetch = jest.fn(() => Promise.resolve({ ok: true, json: () => Promise.resolve(PHOTON) }));
});
afterEach(() => {
  jest.useRealTimers();
});

test("selecting a suggestion fills the address", async () => {
  const onChange = jest.fn();
  let value = "";
  const Wrapper = () => {
    const [v, setV] = React.useState("");
    value = v;
    return <div className="relative"><AddressAutocomplete id="pickup" testId="pickup" label="Pickup Location" value={v} inputClassName="" labelClassName="" onChange={(x) => { setV(x); onChange(x); }} /></div>;
  };
  render(<Wrapper />);
  const input = screen.getByTestId("pickup");
  fireEvent.focus(input);
  fireEvent.change(input, { target: { value: "100 Main" } });
  await act(async () => {
    jest.advanceTimersByTime(300);
  });
  await waitFor(() => expect(global.fetch).toHaveBeenCalled());
  expect(global.fetch.mock.calls[0][0]).toContain("photon.komoot.io");
  const option = await screen.findByText("Test Plaza");
  await act(async () => {
    fireEvent.pointerDown(option.closest("li, button"));
    fireEvent.mouseDown(option.closest("li, button"));
  });
  await waitFor(() => expect(onChange).toHaveBeenLastCalledWith(expect.stringContaining("Test Plaza")));
  expect(value).toContain("Test Plaza");
});
