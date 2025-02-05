class BlocoFlyweight {
  constructor(public tipo: string, public textura: string) {}

  renderizar(posX: number, posY: number, posZ: number) {
    console.log(`Renderizando bloco ${this.tipo} na posição (${posX}, ${posY}, ${posZ}) com textura ${this.textura}.`);
  }
}

class BlocoFlyweightFactory {
  private blocos: Map<string, BlocoFlyweight> = new Map();

  getBloco(tipo: string): BlocoFlyweight {
    if (!this.blocos.has(tipo)) {
      console.log(`Criando nova instância para o bloco: ${tipo}`);
      const textura = `textura_${tipo}.png`;
      this.blocos.set(tipo, new BlocoFlyweight(tipo, textura));
    }
    return this.blocos.get(tipo);
  }
}


const fabricaDeBlocos = new BlocoFlyweightFactory();

const blocoGrama1 = fabricaDeBlocos.getBloco('Grama');
blocoGrama1.renderizar(0, 0, 0);

const blocoGrama2 = fabricaDeBlocos.getBloco('Grama');  // Reutiliza a instância de Grama
blocoGrama2.renderizar(1, 0, 0);

const blocoPedra = fabricaDeBlocos.getBloco('Pedra');
blocoPedra.renderizar(0, 1, 0);

const blocoMadeira = fabricaDeBlocos.getBloco('Madeira');
blocoMadeira.renderizar(1, 1, 0);

console.log(blocoGrama1 === blocoGrama2);  // true (mesma instância reutilizada)
