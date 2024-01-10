// Grid.js
import { useState } from 'react';

import Bio from '../Components/Bio';
// ... import other components as needed

const Grid = () => {
    const [currentView, setCurrentView] = useState('all');

    const gridStructures = {
        all: [
            { colSpan: 2, rowStart: 1, component: <Bio /> },
            { colSpan: 1, rowStart: 1, component: <Bio /> },
            { colSpan: 1, rowStart: 1, component: <Bio /> },

            { colSpan: 1, rowStart: 2, component: <Bio /> },
            { colSpan: 1, rowStart: 2, component: <Bio /> },
            { colSpan: 1, rowStart: 2, rowSpan: 2, component: <Bio /> },
            { colSpan: 1, rowStart: 2, component: <Bio /> },

            { colSpan: 2, rowStart: 3, component: <Bio /> },
            { colSpan: 2, rowStart: 3, component: <Bio /> },

            { colSpan: 2, rowStart: 4, component: <Bio /> },
            { colSpan: 1, rowStart: 4, component: <Bio /> },
            { colSpan: 1, rowStart: 4, rowSpan: 2, component: <Bio /> },

            { colSpan: 1, rowStart: 5, component: <Bio /> },
            { colSpan: 2, rowStart: 5, component: <Bio /> },

            { colSpan: 2, rowStart: 6, component: <Bio /> },
            { colSpan: 1, rowStart: 6, component: <Bio /> },
            { colSpan: 1, rowStart: 6, component: <Bio /> },
        ],
        projects: [
            // Define structure for "projects" view
        ],
        about: [
            // Define structure for "about" view
        ],
        media: [
            // Define structure for "media" view
        ],
    };

    const handleViewChange = (view) => {
        setCurrentView(view);
    };

    return (
        <div className="w-screen h-screen">
            <div className="grid h-full grid-cols-2 lg:grid-cols-4 grid-rows-6 gap-6 text-white">
                {gridStructures[currentView].map((item, index) => (
                    <div
                        key={index}
                        className={`col-span-${item.colSpan} ${item.rowSpan ? `row-span-${item.rowSpan}` : ''} row-start-${item.rowStart} h-full`}
                    >
                        {item.component}
                    </div>
                ))}
            </div>
            <button onClick={() => handleViewChange('all')}>Show All</button>
            <button onClick={() => handleViewChange('projects')}>Show Projects</button>
            <button onClick={() => handleViewChange('about')}>Show About</button>
            <button onClick={() => handleViewChange('media')}>Show Media</button>
        </div>
    );
};

export default Grid;
