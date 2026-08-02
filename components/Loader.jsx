"use client";

import { useEffect, Suspense, useRef } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTexture, Float, Sparkles, ContactShadows, Environment } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

function CinematicLogo() {
  const texture = useTexture("/logo.png");
  const groupRef = useRef(null);
  
  // NAYA: useThree hook se humein 3D scene ki screen size milti hai
  const { viewport } = useThree(); 

  // NAYA: Responsive Scale Logic
  // Agar screen choti hai (jaise mobile), toh viewport.width kam hogi.
  // Hum logo ko screen ki max 90% width tak limit kar rahe hain.
  const logoWidth = 4; // planeGeometry ki width 4 hai
  const scale = Math.min(1, (viewport.width * 0.9) / logoWidth);

  // useFrame har frame par run hota hai (60fps) - Ye logo ko pass layega
  useFrame((state) => {
    if (!groupRef.current) return;
    
    // 1. Logo door se (Z: -20) dhire-dhire pass aayega (Z: 0)
    groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, 0, 0.03);
    
    // 2. Logo flip hoke seedha hoga (Y-axis rotation)
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, 0, 0.04);
  });

  return (
    // NAYA: group mein `scale={[scale, scale, scale]}` pass kiya hai
    <group ref={groupRef} position={[0, 0, -20]} rotation={[0, Math.PI / 2, 0]} scale={[scale, scale, scale]}>
      <Float speed={2} rotationIntensity={0.4} floatIntensity={1.5}>
        <mesh>
          <planeGeometry args={[4, 1.2]} />
          <meshStandardMaterial
            map={texture}
            transparent={true}
            side={THREE.DoubleSide}
            // Glow effect
            emissiveMap={texture}
            emissive={new THREE.Color("#ffffff")}
            emissiveIntensity={0.4} 
            roughness={0.1}
            metalness={0.8}
          />
        </mesh>
      </Float>
    </group>
  );
}

export default function Loader({ onFinish }) { 
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 4000); 
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        delay: 3.5, 
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#030303] overflow-hidden pointer-events-none"
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        {/* Lights */}
        <ambientLight intensity={0.2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#4ade80" /> 

      

        {/* Cinematic Particles */}
        <Sparkles 
          count={250} 
          scale={15} 
          size={1.2} 
          speed={0.5} 
          opacity={0.3} 
          color="#a855f7" 
        />

        <Suspense fallback={null}>
          <CinematicLogo />
        </Suspense>

        {/* Niche padne wali shadow */}
        <ContactShadows 
          position={[0, -2, 0]} 
          opacity={0.7} 
          scale={15} 
          blur={3} 
          far={5} 
          color="#000000"
        />

        {/* POST PROCESSING - The Glow (Bloom) */}
        <EffectComposer>
          <Bloom 
            luminanceThreshold={0.2} 
            luminanceSmoothing={0.9} 
            intensity={1.5} 
          />
        </EffectComposer>
      </Canvas>
    </motion.div>
  );
}