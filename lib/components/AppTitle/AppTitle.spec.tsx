import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import { AppTitle } from '.';

describe('AppTitle', () => {
  it('renders the title text', () => {
    render(<AppTitle title="My App" subtitle='This is my app' />);
    const title = screen.getByText('My App');
    expect(title).toBeInTheDocument();
  });

  it('renders as an h1 by default', () => {
    render(<AppTitle title="Default Heading" subtitle='This is my app' />);
    const titleElement = screen.getByText('Default Heading');
    expect(titleElement.tagName).toBe('H1');
  });


  it('matches snapshot', () => {
    const { container } = render(<AppTitle title="Snapshot Test" subtitle='This is my app' />);
    expect(container).toMatchSnapshot();
  });
});