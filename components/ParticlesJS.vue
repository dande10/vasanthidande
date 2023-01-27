<template>
  <!-- particle component-->
  <div>
    <Particles
      id="tsparticles"
      class="absolute w-100 -z-1"
      height="{window.outerHeight}"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="options"
    />
  </div>
</template>
<script>
import { loadFull } from "tsparticles";

const particlesInit = async (engine) => {
  await loadFull(engine);
};

const particlesLoaded = async (container) => {
  console.info("Particles container loaded", container);
};
export default {
  name: "Particlescomponent",
  data() {
    return {
      particlesInit,
      particlesLoaded,
      options: {
        background: {
          color: {
            value: "#141516",
          },
        },
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: ["#e31b6d", "#17a2b8", "#621940"],
          },
          links: {
            color: "#ffb997",
            enable: true,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      },
    };
  },
};
</script>
