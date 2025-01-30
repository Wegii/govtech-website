// components/GlobeSection.js
import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const GlobeSection = () => {
    const globeRef = useRef();

    // Function to initialize and render the globe
    const createGlobe = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        // Set up the SVG element for the globe
        const svg = d3.select(globeRef.current)
            .attr('width', width)
            .attr('height', height)
            .style('position', 'absolute')
            .style('top', 0)
            .style('left', 0)
            .style('z-index', 1); // Set the globe in the background

        const projection = d3.geoOrthographic()
            .scale(250)
            .translate([0, window.innerHeight/2 ])
            .rotate([0, -30]);

        const path = d3.geoPath().projection(projection);

        // Create a globe (land and oceans)
        d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson").then(world => {
            svg.append("g")
                .selectAll("path")
                .data(world.features)
                .enter().append("path")
                .attr("d", path)
                .attr("fill", "#69b3a2")
                .attr("stroke", "#fff");
        });

        // Rotation function for the globe
        const rotateGlobe = () => {
            projection.rotate([projection.rotate()[0] + 0.1, projection.rotate()[1]]);
            svg.selectAll('path').attr('d', path);
            requestAnimationFrame(rotateGlobe);
        };

        rotateGlobe();
    };

    useEffect(() => {
        createGlobe();
    }, []);

    return (
        <div style={{ position: 'relative', height: '100vh' }}>
            {/* D3 Globe */}
            <svg ref={globeRef}></svg>

            {/* Foreground Titles */}
            <div style={styles.foreground}>
                <div style={styles.title}>Title 1</div>
                <div style={styles.stripe}></div>
                <div style={styles.title}>Title 2</div>
                <div style={styles.stripe}></div>
                <div style={styles.title}>Title 3</div>
                <div style={styles.stripe}></div>
                <div style={styles.title}>Title 4</div>
                <div style={styles.stripe}></div>
                <div style={styles.title}>Title 5</div>
                <div style={styles.stripe}></div>
                <div style={styles.title}>Title 6</div>
            </div>
        </div>
    );
};

// Styles for the titles and stripes
const styles = {
    foreground: {
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1,
        color: '#fff',
        fontSize: '36px',
        textAlign: 'center',
        opacity: 0.5
    },
    title: {
        marginBottom: '20px',
    },
    stripe: {
        height: '2px',
        backgroundColor: '#fff',
        marginBottom: '20px',
    },
};

export default GlobeSection;
