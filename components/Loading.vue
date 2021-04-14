<script>
export default {
  name: 'Loading',
}
</script>

<template>
  <div
    class="loading"
    :class="{ 'loading--light': true }"
    :style="{ backgroundColor: 'transparent' }"
  >
    <div
      :class="[
        'loading--spinner',
        {
          'loading--spinner-light': true,
        },
      ]"
    ></div>
  </div>
</template>

<style lang="scss">
.loading {
  position: relative;
  padding-top: 50%;
}

.loading--spinner,
.loading--spinner:after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}

.loading--spinner {
  position: absolute;

  top: 50%;
  left: 50%;

  margin: 0;
  font-size: 10px;
  text-indent: -9999em;

  border-top: 1.1em solid rgba(#ebebe8, 1);
  border-right: 1.1em solid rgba(#ebebe8, 1);
  border-bottom: 1.1em solid rgba(#ebebe8, 1);
  border-left: 1.1em solid rgba(160, 174, 224, 0.7);

  animation: loader 1.1s infinite linear;

  .loading--light & {
    border-top: 1.1em solid rgba(#fff, 0.1);
    border-right: 1.1em solid rgba(#fff, 0.1);
    border-bottom: 1.1em solid rgba(#fff, 0.1);
    border-left: 1.1em solid #fff;
  }
}

.loading--spinner-light,
.loading--spinner-light:after {
  border-top: 1.1em solid rgba(#ebebe8, 1);
  border-right: 1.1em solid rgba(#ebebe8, 1);
  border-bottom: 1.1em solid rgba(#ebebe8, 1);
  border-left: 1.1em solid rgba(160, 174, 224, 0.7);
  border-top: 1.1em solid rgba(#00198c, 1);
  border-right: 1.1em solid rgba(#00198c, 1);
  border-bottom: 1.1em solid rgba(#00198c, 1);
  border-left: 1.1em solid rgba(160, 174, 224, 0.7);
}

@keyframes loader {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
