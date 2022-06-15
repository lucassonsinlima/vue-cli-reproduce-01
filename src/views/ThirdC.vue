<template>
  <section
    :class="classes"
    :style="`background-color: ${this.bgColor};`"
  >
    ThirdC

    <button @click="changeColor">Change Color</button>
  </section>
</template>

<script>
export default {
  name: 'ThirdC',

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
