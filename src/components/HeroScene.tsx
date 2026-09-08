import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count = 120 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null!);
  const mouse = useRef({ x: 0, y: 0 });

  const [positions, sizes, speeds] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    const sp = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 6;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4;
      sz[i] = Math.random() * 2 + 0.5;
      sp[i] = Math.random() * 0.3 + 0.05;
    }
    return [pos, sz, sp];
  }, [count]);

  useFrame((_state, delta) => {
    if (!mesh.current) return;
    const posArr = mesh.current.geometry.attributes.position
      .array as Float32Array;
    for (let i = 0; i < count; i++) {
      posArr[i * 3 + 1] += speeds[i] * delta;
      // Reset when particle drifts too high
      if (posArr[i * 3 + 1] > 3.5) {
        posArr[i * 3 + 1] = -3.5;
        posArr[i * 3] = (Math.random() - 0.5) * 8;
      }
    }
    mesh.current.geometry.attributes.position.needsUpdate = true;

    // Subtle mouse parallax
    mesh.current.rotation.y +=
      (mouse.current.x * 0.05 - mesh.current.rotation.y) * 0.02;
    mesh.current.rotation.x +=
      (mouse.current.y * 0.03 - mesh.current.rotation.x) * 0.02;
  });

  return (
    <points
      ref={mesh}
      onPointerMove={(e) => {
        mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
      }}
    >
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#d4622a"
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function FloatingRing() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.x = Math.sin(t * 0.15) * 0.3 + 0.5;
    ref.current.rotation.y = t * 0.08;
    ref.current.rotation.z = Math.cos(t * 0.1) * 0.15;
  });

  return (
    <mesh ref={ref} position={[1.5, 0, -1]}>
      <torusGeometry args={[1.4, 0.015, 16, 80]} />
      <meshBasicMaterial color="#d4622a" transparent opacity={0.15} />
    </mesh>
  );
}

function SecondRing() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.x = Math.cos(t * 0.12) * 0.4 + 0.3;
    ref.current.rotation.y = t * -0.06;
    ref.current.rotation.z = Math.sin(t * 0.08) * 0.2;
  });

  return (
    <mesh ref={ref} position={[1.5, 0.2, -0.5]}>
      <torusGeometry args={[1.0, 0.01, 16, 60]} />
      <meshBasicMaterial color="#f6f2ea" transparent opacity={0.08} />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{ zIndex: 1 }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ pointerEvents: "auto" }}
      >
        <Particles count={100} />
        <FloatingRing />
        <SecondRing />
      </Canvas>
    </div>
  );
}
