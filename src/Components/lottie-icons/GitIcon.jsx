import { useEffect } from 'react';
import lottie from 'lottie-web';
import animationData from '../../assets/github-icon.json'; // Replace with the actual path

const GitIcon = () => {
    useEffect(() => {
        // Set up the Lottie animation
        const animationContainer = document.getElementById('lottie-container');

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

    return <div id="lottie-container" className="row-start-2 col-span-1 rounded-3xl scale-125 flex justify-center items-center"></div>;
};


export default GitIcon;