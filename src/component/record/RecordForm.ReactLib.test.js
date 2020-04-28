import React from "react";
import { cleanup, render } from "@testing-library/react";
import RecordForm from "./RecordForm";

afterEach(cleanup);

function renderRecordForm(args) {
  let defaultProps = {
    record: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {},
  };

  const props = { ...defaultProps, ...args };
  return render(<RecordForm {...props} />);
}

it("should render Add Record header", () => {
  const { getByText } = renderRecordForm();
  console.log("Testing render add: " + getByText);
  getByText("Add Record");
});

it('should label save button as "Save" when not saving', () => {
  const { getByText } = renderRecordForm();
  getByText("Save");
});

it('should label save button as "Saving..." when saving', () => {
  const { getByText } = renderRecordForm({ saving: true });
  getByText("Saving...");
});
