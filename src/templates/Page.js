import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PageStyles = styled.div`
  padding: 2rem;
  font-size: 1.6rem;
`;

const Page = ({ children }) => <PageStyles>{children}</PageStyles>;

export default Page;

Page.propTypes = {
  children: PropTypes.object,
};
