import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Dialog from "./Dialog";

describe("Dialog", () => {
  it("should present title prop passed", () => {
    render(
      <Dialog title="simple" isVisible={true}>
        <p>
          Custom domains direct requests for your apps in this Cloud Foundry
          organization to a URL that you own. A custom domain can be a shared
          domain, a shared subdomain, or a shared domain and host.
        </p>
      </Dialog>
    );

    expect(screen.getByText("simple")).toBeInTheDocument();
  });

  test("Click button check", () => {
    const screen = render(
      <Dialog
        id={"1"}
        title={"form page"}
        positiveButtonLabel={"Delete"}
        isVisible={true}
        negativeButtonLabel={"Cancel"}
        neutralButtonLabel={false}
      >
        <p>
          Custom domains direct requests for your apps in this Cloud Foundry
          organization to a URL that you own. A custom domain can be a shared
          domain, a shared subdomain, or a shared domain and host.
        </p>
      </Dialog>
    );
    const button = screen.getByText("Delete");
    expect(screen.getByText("form page")).toBeInTheDocument();
    fireEvent.click(button);
  });
});
