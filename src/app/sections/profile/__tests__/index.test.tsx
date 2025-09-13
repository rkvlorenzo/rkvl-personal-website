import React from 'react';
import { render, screen } from '@testing-library/react';
import Profile from "@/app/sections/profile";

describe('Profile component', () => {
    beforeEach(() => {
        render(<Profile />);
    });

    it('renders AboutMe section', () => {
        expect(screen.queryByText('About Me')).toBeInTheDocument();
    });

    it('renders TechStack section', () => {
        expect(screen.queryByText('Tech Stack')).toBeInTheDocument();
    });
});

