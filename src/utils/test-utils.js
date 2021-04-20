import renderer from 'react-test-renderer';

export const matches = (children) => {
  // console.log(children);
  return expect(renderer.create(children).toJSON()).toMatchSnapshot();
};
