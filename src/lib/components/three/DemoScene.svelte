<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import * as THREE from 'three';

    let container: HTMLDivElement;
    let camera: THREE.PerspectiveCamera;
    let scene: THREE.Scene;
    let renderer: THREE.WebGLRenderer;
    let cube: THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial>;
    let animationId: number;

    onMount(() => {
        init();
        animate();
    });

    onDestroy(() => {
        if (animationId) {
            cancelAnimationFrame(animationId);
        }
        if (renderer) {
            renderer.dispose();
        }
    });

    const init = () => {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);

        renderer = new THREE.WebGLRenderer();
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);

        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
        cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;
    };

    const render = () => {
        renderer.render(scene, camera);
    };

     const animate = () => {
        animationId = requestAnimationFrame(animate);

        cube.rotation.x += 0.005;
        cube.rotation.y += 0.005;

        render();
    };
</script>

<div bind:this={container} class="w-full h-full"></div>