<template>
  <div id="navbar">
    <div id="title">
      <p>Areo Wiki</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbaroloPointer",
};
</script>

<style scoped>
#navbar {
  height: 7vh;
  width: 100vw;
  box-shadow: 0px 6px 6px rgba(37, 37, 37, 0.104);
  display: flex;
  justify-content: space-around;
  align-items: center;
}

#title {
  font-size: 25px;
}
</style>
