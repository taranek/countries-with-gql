import * as React from 'react';
import { render } from '@testing-library/react';
import AttributeList from '../AttributeList';

const mockObj = { firstKey: 'firstValue', secondKey: 'secondValue' };

test('renders key of an object', () => {
  const { getByText } = render(<AttributeList item={mockObj} />);
  expect(getByText('firstKey')).toBeInTheDocument();
});
test('renders value of an object', () => {
  const { getByText } = render(<AttributeList item={mockObj} />);
  expect(getByText('firstValue')).toBeInTheDocument();
});
test('renders all the values', () => {
  const { container } = render(<AttributeList item={mockObj} />);
  expect(container.querySelectorAll('dd').length).toBe(Object.keys(mockObj).length);
});
test('renders all the keys', () => {
  const { container } = render(<AttributeList item={mockObj} />);
  expect(container.querySelectorAll('dd').length).toBe(Object.keys(mockObj).length);
});
