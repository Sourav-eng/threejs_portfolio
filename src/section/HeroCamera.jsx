import { useFrame } from "@react-three/fiber";
import React, { useRef, useState, useEffect } from "react";
import { easing } from "maath";

const HeroCamera = ({ children, isMobile }) => {
    const groupRef = useRef();
    const [pointer, setPointer] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updatePointer = (e) => {
            setPointer(prev => ({
                x: (e.clientX / window.innerWidth - 0.5) * 2,
                y: -(e.clientY / window.innerHeight - 0.5) * 2 || prev.y // Ensure `y` updates
            }));
        };
    
        window.addEventListener("mousemove", updatePointer);
        return () => window.removeEventListener("mousemove", updatePointer);
    }, []);
    
    


    useFrame((state, delta) => {
        easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);
        console.log("Pointer X:", pointer.x, "Pointer Y:", pointer.y);
        
        if (!isMobile && groupRef.current) {
            easing.dampE(
                groupRef.current.rotation,
                [-pointer.y / 5, -pointer.x / 5, 0], 
                0.25,
                delta
                
            );
        }
    });
    
    return <group ref={groupRef} scale={1}>{children}</group>;
};

export default HeroCamera;
