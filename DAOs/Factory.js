import SondaMemoryDao from "./memory/sondaMemoryDao.js";

class Factory {
  constructor() {}

  static get() {
    return {
      sondaDao: new SondaMemoryDao(),
    };
  }
}

export default Factory;
