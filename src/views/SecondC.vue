<template>
  <section
    :class="classes"
    :style="`background-color: ${this.bgColor};`"
  >
    SecondC

    <button @click="changeColor">Change Color</button>
  </section>
</template>

<script>
export default {
  name: 'SecondC',

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
