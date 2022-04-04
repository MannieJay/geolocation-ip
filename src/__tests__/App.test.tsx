import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

afterEach(cleanup);

test('Header shows as "SEARCH AN IP ADDRESS TO LOCATE ITS GEOGRAPHIC LOCATION" when rendered', () => {
    const {getByText} = render(<App />);

    expect(getByText('SEARCH AN IP ADDRESS TO LOCATE ITS GEOGRAPHIC LOCATION')).toBeInTheDocument()
});