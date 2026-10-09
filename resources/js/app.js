import './bootstrap';
import { ThreeSceneManager } from './three-scene';
import { initAnimations } from './animations';

document.addEventListener('DOMContentLoaded', () => {
    const canvasContainer = document.getElementById('three-canvas-container');
    
    // Only initialize Three.js WebGL & Lenis Smooth Scroll on public pages with 3D canvas
    if (!canvasContainer) {
        return;
    }

    const sceneConfig = window.APP_3D_CONFIG || {};
    const animConfig = window.APP_ANIM_CONFIG || {};

    // Initialize Three.js WebGL Scene
    const threeManager = new ThreeSceneManager('three-canvas-container', sceneConfig);

    // Initialize GSAP & Lenis Smooth Scroll Animations
    initAnimations(threeManager, animConfig);
});
