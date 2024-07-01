import SondaApi from "../api/sondaApi.js";

class SondaController {
  constructor() {
    this.sonda = new SondaApi();
  }

  getSondas = async (req, res) => {
    try {
      const data = await this.sonda.getSondas();
      if (data.length === 0) throw new Error("No hay sondas");
      res.status(200).send({ success: true, data });
    } catch (error) {
      res.status(400).send({ success: false, errorMsg: error.message });
    }
  }

  getSondasById = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await this.sonda.getSondasById(id);
      if (!data || data.length === 0) throw new Error("Número de sonda incorrecto");
      res.status(200).send({ success: true, data });
    } catch (error) {
      res.status(404).send({ success: false, errorMsg: error.message });
    }
  }

  createSonda = async (req, res) => {
    try {
      const { id, temperatura } = req.body;
      
      if (!id || !Number.isInteger(id) || id < 1 || id > 5) {
        throw new Error("Datos no válidos: id");
      }

      if (temperatura === undefined || !Number.isInteger(temperatura) || temperatura < -20 || temperatura > 100) {
        throw new Error("Datos no válidos: temperatura");
      }

      const data = await this.sonda.createSonda({ id, temperatura });
      if (!data) {
        throw new Error("Error al crear sonda");
      }
      res.status(200).send({ success: true, data, message: "sonda creada" });
    } catch (error) {
      res.status(400).send({ success: false, errorMsg: error.message });
    }

  }
  
}

export default new SondaController();
