import * as THREE from 'three';

export class ThreeSceneManager {
    constructor(containerId, config = {}) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;

        // Configuration with defaults from admin database settings
        this.config = Object.assign({
            active_preset: 'tech_core',
            light_color: '#3b82f6',
            light_intensity: 1.8,
            particle_density: 1200,
            particle_color: '#06b6d4',
            rotation_speed: 0.005,
            camera_fov: 60,
            webgl_fallback_enabled: 'true',
            mobile_quality_preset: 'medium'
        }, config);

        // Check WebGL availability
        if (!this.isWebGLAvailable()) {
            this.triggerFallback();
            return;
        }

        this.init();
    }

    isWebGLAvailable() {
        try {
            const canvas = document.createElement('canvas');
            return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
        } catch (e) {
            return false;
        }
    }

    triggerFallback() {
        const fallbackBanner = document.getElementById('webgl-fallback-banner');
        if (fallbackBanner && this.config.webgl_fallback_enabled === 'true') {
            fallbackBanner.classList.remove('hidden');
        }
    }

    init() {
        // Scene, Camera, Renderer setup
        this.scene = new THREE.Scene();
        
        const aspect = window.innerWidth / window.innerHeight;
        this.camera = new THREE.PerspectiveCamera(parseFloat(this.config.camera_fov), aspect, 0.1, 1000);
        this.camera.position.z = 8;

        this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.container.appendChild(this.renderer.domElement);

        // Volumetric Lights
        this.ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
        this.scene.add(this.ambientLight);

        this.pointLight = new THREE.PointLight(this.config.light_color, parseFloat(this.config.light_intensity), 100);
        this.pointLight.position.set(5, 5, 5);
        this.scene.add(this.pointLight);

        this.spotLight = new THREE.SpotLight(this.config.particle_color, parseFloat(this.config.light_intensity) * 0.8);
        this.spotLight.position.set(-5, -5, 5);
        this.scene.add(this.spotLight);

        // Build 3D Objects based on active preset
        this.mainGroup = new THREE.Group();
        this.scene.add(this.mainGroup);

        this.buildMeshPreset();
        this.buildParticleSystem();

        // Mouse Parallax Trackers
        this.mouseX = 0;
        this.mouseY = 0;
        this.targetMouseX = 0;
        this.targetMouseY = 0;

        window.addEventListener('mousemove', (e) => {
            this.targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
            this.targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
        });

        window.addEventListener('resize', () => this.onResize());

        // Animation Loop
        this.animate();
    }

    buildMeshPreset() {
        const preset = this.config.active_preset;

        if (preset === 'cyber_cube') {
            // Tesseract Hyper-Cube Mesh
            const geometry = new THREE.BoxGeometry(3, 3, 3, 4, 4, 4);
            const material = new THREE.MeshStandardMaterial({
                color: this.config.light_color,
                wireframe: true,
                metalness: 0.8,
                roughness: 0.2
            });
            this.centerpiece = new THREE.Mesh(geometry, material);
            this.mainGroup.add(this.centerpiece);
        } else if (preset === 'neural_network') {
            // Neural Node Network
            const nodeCount = 40;
            const nodesGroup = new THREE.Group();
            const sphereGeo = new THREE.SphereGeometry(0.12, 16, 16);
            const mat = new THREE.MeshStandardMaterial({ color: this.config.particle_color, emissive: this.config.particle_color, emissiveIntensity: 0.5 });

            for (let i = 0; i < nodeCount; i++) {
                const node = new THREE.Mesh(sphereGeo, mat);
                node.position.set(
                    (Math.random() - 0.5) * 6,
                    (Math.random() - 0.5) * 6,
                    (Math.random() - 0.5) * 6
                );
                nodesGroup.add(node);
            }
            this.centerpiece = nodesGroup;
            this.mainGroup.add(this.centerpiece);
        } else {
            // Default: Tech Core Sphere with orbiting rings
            const sphereGeo = new THREE.IcosahedronGeometry(2, 2);
            const sphereMat = new THREE.MeshStandardMaterial({
                color: this.config.light_color,
                wireframe: true,
                metalness: 0.9,
                roughness: 0.1
            });
            this.centerpiece = new THREE.Mesh(sphereGeo, sphereMat);

            // Orbit Ring 1
            const ringGeo1 = new THREE.TorusGeometry(3.2, 0.03, 16, 100);
            const ringMat1 = new THREE.MeshStandardMaterial({ color: this.config.particle_color, wireframe: false });
            this.ring1 = new THREE.Mesh(ringGeo1, ringMat1);
            this.ring1.rotation.x = Math.PI / 3;

            // Orbit Ring 2
            const ringGeo2 = new THREE.TorusGeometry(3.8, 0.02, 16, 100);
            const ringMat2 = new THREE.MeshStandardMaterial({ color: this.config.light_color });
            this.ring2 = new THREE.Mesh(ringGeo2, ringMat2);
            this.ring2.rotation.y = Math.PI / 4;

            this.mainGroup.add(this.centerpiece);
            this.mainGroup.add(this.ring1);
            this.mainGroup.add(this.ring2);
        }
    }

    buildParticleSystem() {
        let count = parseInt(this.config.particle_density) || 1200;
        if (this.config.mobile_quality_preset === 'low' && window.innerWidth < 768) {
            count = Math.floor(count * 0.3);
        }

        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(count * 3);

        for (let i = 0; i < count * 3; i += 3) {
            positions[i] = (Math.random() - 0.5) * 30;
            positions[i + 1] = (Math.random() - 0.5) * 30;
            positions[i + 2] = (Math.random() - 0.5) * 30;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const material = new THREE.PointsMaterial({
            color: this.config.particle_color,
            size: 0.05,
            transparent: true,
            opacity: 0.6
        });

        this.particles = new THREE.Points(geometry, material);
        this.scene.add(this.particles);
    }

    onResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        const rotSpeed = parseFloat(this.config.rotation_speed) || 0.005;

        // Rotate main 3D geometry
        if (this.centerpiece) {
            this.centerpiece.rotation.y += rotSpeed;
            this.centerpiece.rotation.x += rotSpeed * 0.5;
        }

        if (this.ring1) this.ring1.rotation.z += rotSpeed * 1.2;
        if (this.ring2) this.ring2.rotation.x -= rotSpeed * 0.8;

        if (this.particles) {
            this.particles.rotation.y += rotSpeed * 0.2;
        }

        // Smooth Mouse Parallax
        this.mouseX += (this.targetMouseX - this.mouseX) * 0.05;
        this.mouseY += (this.targetMouseY - this.mouseY) * 0.05;

        this.mainGroup.position.x = this.mouseX * 0.8;
        this.mainGroup.position.y = -this.mouseY * 0.8;

        this.renderer.render(this.scene, this.camera);
    }

    // Scroll trigger synchronization hook
    updateScrollProgress(progress) {
        if (!this.mainGroup) return;
        this.mainGroup.rotation.z = progress * Math.PI * 2;
        this.camera.position.z = 8 - progress * 3;
    }
}
