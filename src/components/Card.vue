<template>
  <div id="Card">
    <div>
      <div id="header">
        <div class="content">Fabricante:</div>
        <div class="content">Ano:</div>
        <div class="content">Motor:</div>
        <div class="content">Distancia:</div>
        <div class="content">Prefixo:</div>
        <div class="content">Modelo:</div>
        <div class="content">Companhia:</div>
        <div class="content">Nº de motores:</div>
        <div class="content">Tipo de avião:</div>
        <div class="content">País:</div>
        <div class="content">Opções:</div>
      </div>
    </div>
    <div id="rows">
      <div class="row" v-for="airplane in airplanes" :key="airplane.id">
        <template v-if="editar">
          <div>
            <input
              type="text"
              class="inpt"
              placeholder="Ex: Boeing"
              v-model="airplane.fabricante"
              required
            />
          </div>
          <div>
            <input
              type="text"
              class="inpt"
              placeholder="Ex: 1997"
              v-model="airplane.ano"
              required
            />
          </div>
          <div>
            <input
              type="text"
              class="inpt"
              placeholder="Ex: GE 90"
              v-model="airplane.motor"
              required
            />
          </div>
          <div>
            <input
              type="text"
              class="inpt"
              placeholder="Ex: Internacional"
              v-model="airplane.distancia"
              required
            />
          </div>
          <div>
            <input
              type="text"
              class="inpt"
              placeholder="Ex: PT-MUI"
              v-model="airplane.prefixo"
              required
            />
          </div>
          <div>
            <input
              type="text"
              class="inpt"
              placeholder="Ex: 777"
              v-model="airplane.modelo"
              required
            />
          </div>
          <div>
            <input
              type="text"
              class="inpt"
              placeholder="Ex: Latam"
              v-model="airplane.companhia"
              required
            />
          </div>
          <div>
            <input
              type="text"
              class="inpt"
              placeholder="Ex: 2"
              v-model="airplane.numeroMotores"
              required
            />
          </div>
          <div>
            <input
              type="text"
              class="inpt"
              placeholder="Ex: Comercial"
              v-model="airplane.tipoAviao"
              required
            />
          </div>
          <div>
            <input
              type="text"
              class="inpt"
              placeholder="Ex: Brasil"
              v-model="airplane.pais"
              required
            />
          </div>
          <div id="btn">
            <button class="editar" @click="editaraviao(airplane.id, airplane)">
              Salvar
            </button>
            <button class="excluir" @click="excluir(airplane.id)">
              Excluir
            </button>
          </div>
        </template>
        <template v-else>
          <div class="content">{{ airplane.fabricante }}</div>
          <div class="content">{{ airplane.ano }}</div>
          <div class="content">{{ airplane.motor }}</div>
          <div class="content">{{ airplane.distancia }}</div>
          <div class="content">{{ airplane.prefixo }}</div>
          <div class="content">{{ airplane.modelo }}</div>
          <div class="content">{{ airplane.companhia }}</div>
          <div class="content">{{ airplane.numeroMotores }}</div>
          <div class="content">{{ airplane.tipoAviao }}</div>
          <div class="content">{{ airplane.pais }}</div>
          <div id="btn">
            <button class="editar" @click="edit(airplane.id)">Editar</button>
            <button class="excluir" @click="excluir(airplane.id)">
              Excluir
            </button>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CardVue",
  data() {
    return {
      airplanes: null,
      airplane_id: null,
      editar: false,
      url: "http://localhost:3000/airplanes",

      airplane: {
        fabricante: "",
        ano: "",
        motor: "",
        distancia: "",
        prefixo: "",
        modelo: "",
        companhia: "",
        numeroMotores: "",
        tipoAviao: "",
        pais: "",
      },
    };
  },
  methods: {
    edit() {
      this.editar = true;
    },

    async getAirplanes() {
      try {
        const req = await axios.get(this.url);
        const data = req.data;
        this.airplanes = data;
      } catch (error) {
        console.log(error);
      }
    },

    async excluir(id) {
      try {
        await axios.delete(`${this.url}/${id}`);
        this.getAirplanes();
      } catch (error) {
        console.log(error);
      }
    },

    async editaraviao(id, airplane) {
      try {
        this.airplane = airplane;
        await axios.put(`${this.url}/${id}`, airplane);
      } catch (error) {
        console.log(error);
      } finally {
        this.editar = false;
        this.getAirplanes();
      }
    },
  },
  mounted() {
    this.getAirplanes();
  },
};
</script>

<style scoped>
#Card {
  width: 85vw;
}

#header,
#row,
.row {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  height: 100px;
  font-size: 20px;
}

#header {
  font-weight: bold;
  padding: 12px;
  border-bottom: 3px solid #333;
}

.row {
  width: 100%;
  padding: 12px;
  border-bottom: 1px solid #ccc;
}

#header div,
.row div {
  width: 19%;
}

#btn {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.editar,
.excluir {
  height: 40%;
  width: 100%;
}

.excluir {
  color: white;
  background-color: black;
}

.editar {
  background-color: transparent;
}

.content {
  display: flex;
  justify-content: center;
}

.inpt {
  width: 130px;
}
</style>
