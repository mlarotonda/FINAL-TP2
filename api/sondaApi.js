import Factory from "../DAOs/Factory.js";

class SondaApi {
  constructor() {
    this.sonda = Factory.get();
  }

  getSondas = async () => {
    const sondas = await this.sonda.sondaDao.getSondas();
    return sondas;
  }

  getSondasById = async (id) => {
    const sonda = await this.sonda.sondaDao.getSondasById(id);
    return sonda;
  }

  createSonda = async (data) => {
    const sonda = await this.sonda.sondaDao.createSonda(data)
    return sonda
  }

}

export default SondaApi;
