import Sonda from "../../Model/Sonda.js";

class SondaMemoryDao {
  constructor() {
    this.sondas = [];
  }

  getSondas = async () => {
    return this.sondas;
  }

  getSondasById = async (id) => {
    const sondaId = parseInt(id);
    const sondas = this.sondas.filter((sonda) => sonda.id === sondaId);
    return sondas;
  }

  createSonda = async ({ id, temperatura }) => {
    const newSonda = new Sonda(id, temperatura, new Date());
    this.sondas.push(newSonda);
    return newSonda;
  }

  updateSonda = async (data) => {
    const sondaId = parseInt(data.id);
    const sondaIndex = this.sondas.findIndex((sonda) => sonda.id === sondaId);
    if (sondaIndex !== -1) {
      const sonda = this.sondas[sondaIndex];
      sonda.temperatura = data.temperatura || sonda.temperatura;
      return 1;
    }
    return 0;
  }

  deleteSonda = async (id) => {
    const sondaId = parseInt(id);
    const initialLength = this.sondas.length;
    this.sondas = this.sondas.filter((sonda) => sonda.id !== sondaId);
    return initialLength - this.sondas.length;
  }

}

export default SondaMemoryDao;
