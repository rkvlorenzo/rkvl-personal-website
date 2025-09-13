import React from 'react';
import { render, screen } from '@testing-library/react';
import TechStack from "@/app/sections/profile/TechStack";
import techStacks from "@/app/constants/techStacks";

describe('TechStack component', () => {
    const category = techStacks.map((techStack) => (techStack.category))
    const techStackItems = techStacks.flatMap(techStack => techStack.items);


    beforeEach(() => {
        render(<TechStack />);
    });

    it('renders the header in TechStack component', () => {
        expect(screen.queryByText('Tech Stack')).toBeInTheDocument();
    });

    it('renders the ToolCase icon', () => {
        const icon = screen.getByTestId('tool-case-icon');
        expect(icon).toBeInTheDocument();
    });

    test.each(category)('renders category %s in TechStack component', (text) => {
        expect(screen.getByText(new RegExp(text, 'i'))).toBeInTheDocument();
    });

    test.each(techStackItems)('renders techStack %s in TechStack component', (text) => {
        expect(screen.getByText(text)).toBeInTheDocument();
    });
});

