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

}

export default SondaMemoryDao;
