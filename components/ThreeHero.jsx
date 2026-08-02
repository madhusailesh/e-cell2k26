"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeHero() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene, Camera, aur Renderer Setup
    const scene = new THREE.Scene();
    
    // Mobile par thoda door camera rakhne ke liye responsive distance
    const isMobile = window.innerWidth < 768;
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = isMobile ? 4.5 : 3.5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Icosahedron Geometry (Clean, futuristic geometric polygon)
    const geometry = new THREE.IcosahedronGeometry(isMobile ? 1.1 : 1.4, 2);
    
    // Pure White/Silver Wireframe Material for Black & White Theme
    const material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.1,
      metalness: 0.9,
      wireframe: true,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // 3. Subtle Inner Glow/Core Mesh
    const innerGeometry = new THREE.IcosahedronGeometry(isMobile ? 0.95 : 1.2, 4);
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: 0x111111,
      wireframe: false,
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    scene.add(innerMesh);

    // 4. Lighting (Pure White & Accent lights)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 2);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // 5. Mouse & Touch Interaction Tracking
    let mouseX = 0;
    let mouseY = 0;

    const updateCoordinates = (clientX, clientY) => {
      mouseX = (clientX / window.innerWidth) * 2 - 1;
      mouseY = -(clientY / window.innerHeight) * 2 + 1;
    };

    const handleMouseMove = (e) => {
      updateCoordinates(e.clientX, e.clientY);
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        updateCoordinates(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    // 6. Animation Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth rotation with mouse/touch influence
      mesh.rotation.x += 0.002 + mouseY * 0.008;
      mesh.rotation.y += 0.003 + mouseX * 0.008;

      innerMesh.rotation.x -= 0.001;
      innerMesh.rotation.y -= 0.002;

      renderer.render(scene, camera);
    };
    animate();

    // 7. Responsive Resize Handler
    const handleResize = () => {
      const mobileCheck = window.innerWidth < 768;
      camera.position.z = mobileCheck ? 4.5 : 3.5;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-70" 
    />
  );
}