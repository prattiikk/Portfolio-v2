import { useEffect } from 'react';
import lottie from 'lottie-web';
import animationData from '../../assets/linkedin-icon.json'; // Replace with the actual path

const LinkedinIcon = () => {
    useEffect(() => {
        // Set up the Lottie animation
        const animationContainer = document.getElementById('linkedin-container');

        lottie.loadAnimation({
            container: animationContainer,
            animationData: animationData,
            loop: true,
            autoplay: true,
        });

        return () => {

            lottie.destroy();
        };
    }, []);

    return <div id="linkedin-container" className="row-start-2 col-span-1 rounded-3xl flex justify-center items-center"></div>;
};


export default LinkedinIcon;