"use client";

import { useEffect, useRef } from "react";

export function Hero3DScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let disposed = false;
    let raf = 0;
    let cleanupListeners: (() => void) | undefined;
    let renderer: import("three").WebGLRenderer | undefined;

    async function init() {
      let THREE: typeof import("three");
      try {
        THREE = await import("three");
      } catch {
        return; // Three.js failed to load — fall back to the flat background silently.
      }
      if (disposed || !container) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const width = container.clientWidth;
      const height = container.clientHeight;
      if (width === 0 || height === 0) return;

      let scene: import("three").Scene;
      let camera: import("three").PerspectiveCamera;

      try {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
        camera.position.z = 6;

        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(width, height);
        renderer.setClearColor(0x000000, 0);
        container.appendChild(renderer.domElement);
      } catch {
        return; // No WebGL support — bail out cleanly, existing background stays visible.
      }

      const geometry = new THREE.IcosahedronGeometry(2.3, 2);

      const wireframe = new THREE.LineSegments(
        new THREE.WireframeGeometry(geometry),
        new THREE.LineBasicMaterial({
          color: 0x2fd18f,
          transparent: true,
          opacity: 0.3,
        })
      );

      const points = new THREE.Points(
        geometry,
        new THREE.PointsMaterial({
          color: 0x5cf2b8,
          size: 0.05,
          transparent: true,
          opacity: 0.85,
          sizeAttenuation: true,
        })
      );

      const group = new THREE.Group();
      group.add(wireframe, points);
      scene.add(group);

      let targetX = 0;
      let targetY = 0;

      function onMouseMove(e: MouseEvent) {
        if (!container) return;
        const rect = container.getBoundingClientRect();
        targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 0.7;
        targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 0.7;
      }

      function onResize() {
        if (!container || !renderer) return;
        const w = container.clientWidth;
        const h = container.clientHeight;
        if (w === 0 || h === 0) return;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      }

      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("resize", onResize);
      cleanupListeners = () => {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("resize", onResize);
      };

      function renderFrame() {
        if (disposed || !renderer) return;
        camera.position.x += (targetX - camera.position.x) * 0.04;
        camera.position.y += (-targetY - camera.position.y) * 0.04;
        camera.lookAt(0, 0, 0);

        if (!prefersReducedMotion) {
          group.rotation.y += 0.0025;
          group.rotation.x += 0.0007;
        }

        renderer.render(scene, camera);
        raf = requestAnimationFrame(renderFrame);
      }
      renderFrame();
    }

    init();

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      cleanupListeners?.();
      if (renderer) {
        renderer.dispose();
        renderer.domElement.remove();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 z-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black_50%,transparent_100%)]"
    />
  );
}
