import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutMe from "@/app/sections/profile/AboutMe";

describe('AboutMe component', () => {
    beforeEach(() => {
        render(<AboutMe />);
    });

    it('renders the header in AboutMe component', () => {
        expect(screen.queryByText('About Me')).toBeInTheDocument();
    });

    it('renders the BookOpen icon', () => {
        const icon = screen.getByTestId('book-open-icon');
        expect(icon).toBeInTheDocument();
    });

    it('renders a part of the AboutMe details', () => {
        expect(screen.queryByText(/Software Engineer with over 8 years/i)).toBeInTheDocument();
    });
});

