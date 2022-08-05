<template>
  <div id="pageList">
    <div id="button">
      <button class="btn">
        <router-link :to="{ name: 'register' }" class="link"
          >Cadastrar avião</router-link
        >
      </button>
    </div>
    <div id="card">
      <Card />
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
export default {
  name: "PageListViews",
  components: {
    Card,
  },
};
</script>

<style scoped>
#pageList {
  height: 93vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#card {
  width: 90%;
  height: 80vh;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  border: 2px solid lightgray;
  border-radius: 10px;
  box-shadow: 0px 6px 6px rgba(37, 37, 37, 0.104);
}

::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: lightgray;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background-color: rgb(125, 124, 124);
}

#button {
  height: 60px;
  width: 70%;
}

.btn {
  float: right;
  background-color: black;
  height: 90%;
  width: 200px;
}
.link {
  font-size: 20px;
  color: white;
  text-decoration: none;
}
</style>
