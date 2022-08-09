<template>
  <div id="register">
    <div id="box" v-show="success">
      <div id="success">
        <p class="success">Avião cadastrado com sucesso</p>
      </div>
    </div>
    <form @submit="createPlane">
      <div id="table">
        <div id="leftColumn">
          <div class="inpt">
            <label>Fabricante</label>
            <input
              type="text"
              placeholder="Ex: Boeing"
              v-model="plane.manufacturer"
              required
            />
          </div>
          <div class="inpt">
            <label>Ano de fabricação</label>
            <input
              type="text"
              placeholder="Ex: 1997"
              v-model="plane.year"
              required
            />
          </div>
          <div class="inpt">
            <label>Motor</label>
            <input
              type="text"
              placeholder="Ex: GE 90"
              v-model="plane.engine"
              required
            />
          </div>
          <div class="inpt">
            <label>Distância de voo</label>
            <input
              type="text"
              placeholder="Ex: Internacional"
              v-model="plane.range"
              required
            />
          </div>
          <div class="inpt">
            <label>Prefixo</label>
            <input
              type="text"
              placeholder="Ex: PT-MUI"
              v-model="plane.prefix"
              required
            />
          </div>
        </div>
        <div id="rightColumn">
          <div class="inpt">
            <label>Modelo</label>
            <input
              type="text"
              placeholder="Ex: 777"
              v-model="plane.model"
              required
            />
          </div>
          <div class="inpt">
            <label>Companhia</label>
            <input
              type="text"
              placeholder="Ex: Latam"
              v-model="plane.company"
              required
            />
          </div>
          <div class="inpt">
            <label>Numero de motores</label>
            <input
              type="text"
              placeholder="Ex: 2"
              v-model="plane.engineNumber"
              required
            />
          </div>
          <div class="inpt">
            <label>Tipo de avião</label>
            <input
              type="text"
              placeholder="Ex: Comercial"
              v-model="plane.airplaneType"
              required
            />
          </div>
          <div class="inpt">
            <label>País de origem</label>
            <input
              type="text"
              placeholder="Ex: Brasil"
              v-model="plane.country"
              required
            />
          </div>
        </div>
      </div>
      <div id="footer">
        <button class="btn">
          <router-link :to="{ name: 'list' }" class="linkBack"
            >Voltar</router-link
          >
        </button>
        <button class="btn">
          <button class="btn send">
            Enviar<i class="fa-solid fa-plane-departure icon"></i>
          </button>
        </button>
      </div>
    </form>
    <div id="loadPage" v-show="load">
      <LoadPage class="load" />
    </div>
  </div>
</template>

<script>
import planeConfigs from "../services/planeConfigs";
import LoadPage from "../components/LoadPage.vue";
export default {
  name: "RegisterViews",
  components: {
    LoadPage,
  },
  data() {
    return {
      load: false,
      success: false,

      plane: {
        manufacturer: "",
        year: "",
        engine: "",
        range: "",
        prefix: "",
        model: "",
        company: "",
        engineNumber: "",
        airplaneType: "",
        country: "",
      },
    };
  },

  methods: {
    modal() {
      this.load = true;
      this.success = true;
      setTimeout(() => this.$router.push({ name: "list" }), 2000);
    },

    async createPlane() {
      try {
        await planeConfigs.post(this.plane);
        this.$forceUpdate();
        this.modal();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
#register {
  height: 93vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

#box {
  height: 5%;
  width: 65%;
}

#success {
  height: 100%;
  width: 30%;
  text-align: center;
  background-color: rgb(204, 229, 255);
  border-radius: 10px;
}

.success {
  height: 100%;
  width: 100%;
  font-size: 20px;
  color: rgb(0, 64, 133);
  padding-top: 10px;
}

#table {
  position: relative;
  height: 40vh;
  width: 70vw;
  display: flex;
  justify-content: space-around;
}

#leftColumn {
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#rightColumn {
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

input {
  height: 40px;
  border-radius: 5px;
  font-size: 20px;
}

.inpt {
  display: flex;
  flex-direction: column;
}

.btn {
  height: 40px;
  width: 150px;
  font-size: 20px;
  background-color: transparent;
  border: none;
}

.send {
  background-color: black;
  color: white;
  border-radius: 10px;
}

.icon {
  font-size: 15px;
  margin-left: 10px;
}

#footer {
  padding-top: 40px;
  display: flex;
  justify-content: center;
}

.linkBack {
  text-decoration: none;
}

#loadPage {
  height: 50vh;
  width: 30vw;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(86, 86, 86, 0.361);
  border-radius: 20px;
}
</style>
