import { useEffect } from 'react';
import lottie from 'lottie-web';
import animationData from '../../assets/twitter-icon.json'; // Replace with the actual path

const TwitterIcon = () => {
    useEffect(() => {
        // Set up the Lottie animation
        const animationContainer = document.getElementById('twitter-container');

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

    return <div id="twitter-container" className="row-start-3 col-span-1 rounded-3xl scale-90 flex justify-center items-center"></div>;
};


export default TwitterIcon;