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
        <template v-if="edit">
          <div>
            <input
              type="text"
              class="inpt"
              placeholder="Ex: Boeing"
              v-model="airplane.manufacturer"
              required
            />
          </div>
          <div>
            <input
              type="text"
              class="inpt"
              placeholder="Ex: 1997"
              v-model="airplane.year"
              required
            />
          </div>
          <div>
            <input
              type="text"
              class="inpt"
              placeholder="Ex: GE 90"
              v-model="airplane.engine"
              required
            />
          </div>
          <div>
            <input
              type="text"
              class="inpt"
              placeholder="Ex: Internacional"
              v-model="airplane.range"
              required
            />
          </div>
          <div>
            <input
              type="text"
              class="inpt"
              placeholder="Ex: PT-MUI"
              v-model="airplane.prefix"
              required
            />
          </div>
          <div>
            <input
              type="text"
              class="inpt"
              placeholder="Ex: 777"
              v-model="airplane.model"
              required
            />
          </div>
          <div>
            <input
              type="text"
              class="inpt"
              placeholder="Ex: Latam"
              v-model="airplane.company"
              required
            />
          </div>
          <div>
            <input
              type="text"
              class="inpt"
              placeholder="Ex: 2"
              v-model="airplane.engineNumber"
              required
            />
          </div>
          <div>
            <input
              type="text"
              class="inpt"
              placeholder="Ex: Comercial"
              v-model="airplane.airplaneType"
              required
            />
          </div>
          <div>
            <input
              type="text"
              class="inpt"
              placeholder="Ex: Brasil"
              v-model="airplane.country"
              required
            />
          </div>
          <div id="btn">
            <button class="edit" @click="editAirplane(airplane.id, airplane)">
              Salvar
            </button>
            <button class="delete" @click="deleteAirplane(airplane.id)">
              Excluir
            </button>
          </div>
        </template>
        <template v-else>
          <div class="content">{{ airplane.manufacturer }}</div>
          <div class="content">{{ airplane.year }}</div>
          <div class="content">{{ airplane.engine }}</div>
          <div class="content">{{ airplane.range }}</div>
          <div class="content">{{ airplane.prefix }}</div>
          <div class="content">{{ airplane.model }}</div>
          <div class="content">{{ airplane.company }}</div>
          <div class="content">{{ airplane.engineNumber }}</div>
          <div class="content">{{ airplane.airplaneType }}</div>
          <div class="content">{{ airplane.country }}</div>
          <div id="btn">
            <button class="edit" @click="editItem(airplane.id)">Editar</button>
            <button class="delete" @click="deleteAirplane(airplane.id)">
              Excluir
            </button>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import planeConfigs from "../services/planeConfigs";
export default {
  name: "CardVue",
  data() {
    return {
      airplanes: [],
      airplane_id: null,
      edit: false,

      airplane: {
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
    editItem() {
      this.edit = true;
    },

    async getAirplanes() {
      try {
        const res = await planeConfigs.get();
        this.airplanes = res.data
      } catch (error) {
        alert("Não foi possivel resgatar o seu avião");
      }
    },

    async deleteAirplane(id) {
      try {
        await planeConfigs.delete(id);
        this.getAirplanes();
      } catch (error) {
        alert("Não foi possivel deletar o seu avião");
      }
    },

    async editAirplane(id, airplane) {
      try {
        this.airplane = airplane;
        await planeConfigs.put(id, airplane);
      } catch (error) {
        alert("Não foi possivel deletar o seu avião");
      } finally {
        this.edit = false;
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

.edit,
.delete {
  height: 40%;
  width: 100%;
}

.delete {
  color: white;
  background-color: black;
}

.edit {
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
