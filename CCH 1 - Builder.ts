class Casa {
  paredes: string;
  telhado: string;
  chao: string;
  janelas: number;

  mostrarDetalhes() {
    console.log(`Casa com paredes de ${this.paredes}, telhado de ${this.telhado}, chão de ${this.chao} e ${this.janelas} janelas.`);
  }
}

class CasaBuilder {
  private casa: Casa;

  constructor() {
    this.casa = new Casa();
  }

  setParedes(material: string): CasaBuilder {
    this.casa.paredes = material;
    return this;
  }

  setChao(material: string): CasaBuilder {
    this.casa.chao = material;
    return this;
  }
  
  setTelhado(material: string): CasaBuilder {
    this.casa.telhado = material;
    return this;
  }
  
  setJanelas(quantidade: number): CasaBuilder {
    this.casa.janelas = quantidade;
    return this;
  }

  build(): Casa {
    return this.casa;
  }
}

const casa1 = new CasaBuilder()
  .setParedes('pedregulho')
  .setChao('pedra lisa')
  .setTelhado('escadas de madeira de carvalho')
  .setJanelas(4)
  .build();

const casa2 = new CasaBuilder()
  .setParedes('tijolos de pedra')
  .setChao('bloco de quartzo liso')
  .setTelhado('escadas de cobre lapidado levemente oxidado encerado')
  .setJanelas(2)
  .build();

casa1.mostrarDetalhes();  // Casa com paredes de pedregulho, telhado de escadas de madeira de carvalho, chão de pedra lisa e 4 janelas.
casa2.mostrarDetalhes();  // Casa com paredes de tijolos de pedra, telhado de escadas de cobre lapidado levemente oxidado encerado, chão de bloco de quartzo liso e 2 janelas.
