import React from "react";
import Card from "./Card";
import { render } from "@testing-library/react";

const data = {
  title: "Ironman",
  imagen: 'https//:sdsdsd',
  description: "Bsdfsdfsdfsdfsdf",
  releaseYear: 2017,
};

it("matches snapshot", () => {
  const { asFragment } = render(<Card title={data.title} imagen={data.imagen} description={data.description} releaseYear={data.releaseYear} />);

  expect(asFragment()).toMatchSnapshot();
});