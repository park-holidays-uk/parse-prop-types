import PropTypes from "prop-types";
import parsePropTypes from "../src";

const propTypes = {
  foo: PropTypes.string.isRequired,
  bar: PropTypes.bool,
  baz: PropTypes.arrayOf(PropTypes.string).isRequired,
  qux: PropTypes.oneOf(["foo", "bar", "baz"]),
  quux: PropTypes.shape({
    foo: PropTypes.string,
    bar: PropTypes.instanceOf(String).isRequired
  }),
  foo2: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      foo: PropTypes.string
    })
  ])
};

describe("parsePropTypes", () => {
  it("works", () => {
    expect(parsePropTypes(propTypes)).toMatchSnapshot();
  });

  it("works with empty object", () => {
    const emptyPropTypes = {};
    expect(parsePropTypes(emptyPropTypes)).toEqual({});
  });
});
