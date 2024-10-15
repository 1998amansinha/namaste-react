import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

// describe is just for grouping mutiple test cases in one
describe("This has all the Contact us Components Test Cases", () => {
  // beforeEach(() => {
  //   console.log("Before Each");
  // });

  // beforeAll(() => {
  //   console.log("Before All");
  // });

  // afterEach(() => {
  //   console.log("After Each");
  // });

  // afterAll(() => {
  //   console.log("After All");
  // });

  test("should find heading in the contact component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("should find button in the contact component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("should find all inputs in the contact component", () => {
    render(<Contact />);

    const inputBox = screen.getAllByRole("textbox");
    {
      /* to check multiple elements we do this */
    }

    //   expect(inputBox.length).toBe(3);
    expect(inputBox.length).not.toBe(2);
  });
});
