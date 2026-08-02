"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function ThreeHero() {
  const mountRef = useRef(null);
  const [isWebGLSupported, setIsWebGLSupported] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let renderer, animationFrameId;

    try {
      // 1. Scene & Camera Setup
      const scene = new THREE.Scene();
      const isMobile = window.innerWidth < 768;
      
      const camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = isMobile ? 4.5 : 3.5;

      // 💥 OPTIMIZATION 1: Power Preference & Conditional Antialiasing
      renderer = new THREE.WebGLRenderer({ 
        antialias: !isMobile, // Mobile pe antialias off karke double speed milegi
        alpha: true,
        powerPreference: "high-performance" // Device ko full GPU use karne bolega
      });
      
      renderer.setSize(window.innerWidth, window.innerHeight);
      
      // 💥 OPTIMIZATION 2: Limit Pixel Ratio for Low-RAM phones
      renderer.setPixelRatio(isMobile ? 1 : Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      // 💥 OPTIMIZATION 3: Geometry Detail Reduce Kiya (2 & 4 se 1 kar diya)
      // Isse lagbhag 90% vertices kam ho gaye bina look kharab kiye!
      const geometry = new THREE.IcosahedronGeometry(isMobile ? 1.1 : 1.4, 1);
      
      const material = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.2,
        metalness: 0.8,
        wireframe: true,
      });

      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      // Inner Core Mesh (Detail 1 is enough for a solid color)
      const innerGeometry = new THREE.IcosahedronGeometry(isMobile ? 0.95 : 1.2, 1);
      const innerMaterial = new THREE.MeshBasicMaterial({
        color: 0x111111,
      });
      const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
      scene.add(innerMesh);

      // 4. Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
      scene.add(ambientLight);

      const pointLight = new THREE.PointLight(0xffffff, 2);
      pointLight.position.set(5, 5, 5);
      scene.add(pointLight);

      // 5. Interaction Tracking
      let mouseX = 0;
      let mouseY = 0;

      const updateCoordinates = (clientX, clientY) => {
        mouseX = (clientX / window.innerWidth) * 2 - 1;
        mouseY = -(clientY / window.innerHeight) * 2 + 1;
      };

      const handleMouseMove = (e) => updateCoordinates(e.clientX, e.clientY);
      const handleTouchMove = (e) => {
        if (e.touches.length > 0) {
          updateCoordinates(e.touches[0].clientX, e.touches[0].clientY);
        }
      };

      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      window.addEventListener("touchmove", handleTouchMove, { passive: true });

      // 6. Animation Loop
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        // Smooth rotation
        mesh.rotation.x += 0.002 + mouseY * 0.005;
        mesh.rotation.y += 0.003 + mouseX * 0.005;

        innerMesh.rotation.x -= 0.001;
        innerMesh.rotation.y -= 0.002;

        renderer.render(scene, camera);
      };
      animate();

      // 7. Responsive Resize
      const handleResize = () => {
        const mobileCheck = window.innerWidth < 768;
        camera.position.z = mobileCheck ? 4.5 : 3.5;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener("resize", handleResize, { passive: true });

      // 8. CRITICAL CLEANUP (Prevents Memory Leaks)
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("touchmove", handleTouchMove);
        window.removeEventListener("resize", handleResize);
        cancelAnimationFrame(animationFrameId);
        
        // Clean geometries and materials from GPU memory
        geometry.dispose();
        material.dispose();
        innerGeometry.dispose();
        innerMaterial.dispose();
        
        if (renderer) {
          renderer.dispose();
          if (container && renderer.domElement) {
            container.removeChild(renderer.domElement);
          }
        }
      };
    } catch (error) {
      console.warn("WebGL blocked or unsupported by this device.", error);
      setIsWebGLSupported(false);
    }
  }, []);

  // Agar device bilkul hi WebGL support nahi karta (red error state), toh empty div return karega crash ke badle
  if (!isWebGLSupported) {
    return null; 
  }

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-70" 
    />
  );
}