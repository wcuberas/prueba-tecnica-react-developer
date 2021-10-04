import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

beforeEach(() => {
    render(
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    );
})

test('should render Title app', () => {
    const title = screen.getByText('DEMO Streaming');
    expect(title).toBeInTheDocument();
});

test('should render Header button', () => {
    const btn = screen.getByRole('button',{ name: /start/i });
    expect(btn).toBeInTheDocument();
});

test('should render Footer', () => {
    const btn = screen.getByText(/copyright/i);
    expect(btn).toBeInTheDocument();
});

