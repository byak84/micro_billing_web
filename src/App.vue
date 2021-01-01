<template>
  <div id="app" class="app">
    <component :is="layout">
    </component>

    <div class="right_frame">
      <router-view/>
    </div>
  </div>
</template>

<script>
import MainLayout from "@/layouts/MainLayout"
import EmptyLayout from "@/layouts/EmptyLayout"
import router from "@/router";

export default {
  computed: {
    layout() {
      return 'main-layout'
      // return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  components: {
    EmptyLayout, MainLayout
  },
  created() {
    router.replace({name: 'clients'});
  }
}
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default padding */
ul[class],
ol[class] {
  padding: 0;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

/* Set core body defaults */
body, html {
  min-height: 100vh;
  height: 100%;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* Remove list styles on ul, ol elements with a class attribute */
ul[class],
ol[class] {
  list-style: none;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img {
  max-width: 100%;
  display: block;
}

/* Natural flow and rhythm in articles by default */
article > * + * {
  margin-top: 1em;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations and transitions for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

.app {
  height: 100%;
  display: flex;
}

.right_frame {
  padding-top: 20px;
  padding-left: 30px;
}

</style>
