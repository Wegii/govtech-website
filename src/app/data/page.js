'use client';

import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import * as THREE from 'three';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function Home() {
    const globeRef = useRef(null);
    const sceneRef = useRef(null);
    const cameraRef = useRef(null);
    const rendererRef = useRef(null);
    const sphereRef = useRef(null);

    // Line graph data
    const lineData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Sample Data',
                data: [65, 59, 80, 81, 56, 55, 40],
                borderColor: 'rgba(75, 192, 192, 1)',
                fill: false,
            },
        ],
    };

    // Initialize the globe
    useEffect(() => {
        if (!globeRef.current) return;

        // Set up Three.js scene
        const scene = new THREE.Scene();
        sceneRef.current = scene;

        // Set up camera
        const camera = new THREE.PerspectiveCamera(
            75,
            globeRef.current.clientWidth / globeRef.current.clientHeight,
            0.1,
            1000
        );
        camera.position.z = 5;
        cameraRef.current = camera;

        // Set up renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(
            globeRef.current.clientWidth,
            globeRef.current.clientHeight
        );
        globeRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // Create the globe (sphere)
        const geometry = new THREE.SphereGeometry(2, 32, 32);
        const texture = new THREE.TextureLoader().load(
            'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
        );
        const material = new THREE.MeshBasicMaterial({ map: texture });
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);
        sphereRef.current = sphere;

        // Add lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(5, 5, 5);
        scene.add(pointLight);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            sphere.rotation.y += 0.005; // Rotate the globe
            renderer.render(scene, camera);
        };
        animate();

        // Handle window resize
        const handleResize = () => {
            const { clientWidth, clientHeight } = globeRef.current;
            renderer.setSize(clientWidth, clientHeight);
            camera.aspect = clientWidth / clientHeight;
            camera.updateProjectionMatrix();
        };
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            //globeRef.current.removeChild(renderer.domElement);
        };
    }, []);

    // Highlight a country by rotating the globe
    const handleCountryHighlight = (lat, lng) => {
        if (sphereRef.current) {
            const phi = (90 - lat) * (Math.PI / 180);
            const theta = (180 - lng) * (Math.PI / 180);
            sphereRef.current.rotation.x = phi;
            sphereRef.current.rotation.y = theta;
        }
    };

    return (
        <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
            {/* Section 1: Split vertically with line graph and text */}
            <section className="h-screen snap-start flex">
                <div className="w-1/2 p-10 flex items-center justify-center">
                    <div>
                        <h1 className="text-4xl font-bold mb-4">Section 1</h1>
                        <p className="text-lg">
                            This is the first section. It contains some text on the left and a
                            line graph on the right.
                        </p>
                    </div>
                </div>
                <div className="w-1/2 p-10 flex items-center justify-center">
                    <Line data={lineData} />
                </div>
            </section>

            {/* Section 2: Rotating D3.js Globe */}
            <section className="h-screen snap-start flex flex-col items-center justify-center bg-gray-100">
                <h1 className="text-4xl font-bold mb-8">Section 2</h1>
                <div ref={globeRef} className="w-96 h-96"></div>
                <div className="mt-8">
                    <button
                        onClick={() => handleCountryHighlight(37.09, -95.71)}
                        className="mx-2 px-4 py-2 bg-blue-500 text-white rounded"
                    >
                        USA
                    </button>
                    <button
                        onClick={() => handleCountryHighlight(56.13, -106.35)}
                        className="mx-2 px-4 py-2 bg-blue-500 text-white rounded"
                    >
                        Canada
                    </button>
                    <button
                        onClick={() => handleCountryHighlight(-14.24, -51.93)}
                        className="mx-2 px-4 py-2 bg-blue-500 text-white rounded"
                    >
                        Brazil
                    </button>
                </div>
            </section>

            {/* Section 3: Split into three vertical sections */}
            <section className="h-screen snap-start flex">
                <div className="w-1/3 p-10 bg-blue-100">
                    <h2 className="text-2xl font-bold mb-4">Left Section</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className="w-1/3 p-10 bg-blue-200">
                    <h2 className="text-2xl font-bold mb-4">Middle Section</h2>
                    <p>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div className="w-1/3 p-10 bg-blue-300">
                    <h2 className="text-2xl font-bold mb-4">Right Section</h2>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
            </section>
        </div>
    );
}