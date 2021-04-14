<script>
export default {
  name: 'Input',
}
</script>
<template>
  <div class="container">
    <div class="icon">
      <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
        <path
          fill="#fff"
          d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
        />
      </svg>
    </div>
    <input placeholder="Search your feelings" />
  </div>
</template>

<style scoped>
.container {
  font-family: 'Arial';
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7px;
  border: 0;
  border-bottom: 1px solid #fff;
}

.icon {
  flex: 0 0;
  padding-left: 15px;
}

input {
  flex: 1 0;
  min-width: 50px;
  min-height: 25px;
  font-size: inherit;
  background-color: transparent;
  padding-left: 5px;
  border: 0;
  color: #fff;
}
input:focus {
  outline: none;
}

::placeholder,
::-webkit-input-placeholder {
  text-align: center;
  color: #fff;
  font-size: 24px;
}
:-ms-input-placeholder {
  text-align: center;
  color: #fff;
}
</style>
