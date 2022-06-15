<template>
  <section
    :class="classes"
    :style="`background-color: ${this.bgColor};`"
  >
    FirstC

    <button @click="changeColor">Change Color</button>
  </section>
</template>

<script>
export default {
  name: 'FirstC',

  data() {
    return {
      bgColor: 'yellow',
    };
  },

  methods: {
    changeColor() {
      this.bgColor = 'green';
    },
  },
};
</script>
