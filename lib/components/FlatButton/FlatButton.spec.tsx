import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { FlatButton } from '.';
import "@testing-library/jest-dom";

describe('FlatButton', () => {
  it('renders the button with children', () => {
    render(<FlatButton text='Click me'/>);
    const button = screen.getByText('Click me');
    expect(button).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    const { getByRole } = render(
      <FlatButton text='Click me' onClick={handleClick}/>
    );
    fireEvent.click(getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when disabled prop is true', () => {
    const { getByRole } = render(
      <FlatButton  text='Click me' disabled />
    );
    expect(getByRole('button')).toBeDisabled();
  });

  it('does not call onClick when disabled', () => {
    const handleClick = vi.fn();
    const { getByRole } = render(
      <FlatButton text='Click me' disabled onClick={handleClick}/>
    );
    fireEvent.click(getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('applies custom className', () => {
    const { getByRole } = render(
      <FlatButton text='Click me' className="custom-class" />
    );
    expect(getByRole('button')).toHaveClass('custom-class');
  });

  it("should match to snapshot", () => {
    const { asFragment } = render(<FlatButton text="Click me"/>);
    expect(asFragment()).toMatchSnapshot();
  })
});