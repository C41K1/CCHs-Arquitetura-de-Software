abstract class AcaoNPC {
  realizarAcao() {
    this.preparar();
    this.executarTarefa();
    this.finalizar();
  }

  preparar() {
    console.log('NPC se preparando para a ação...');
  }

  abstract executarTarefa(): void;

  finalizar() {
    console.log('NPC finalizou a ação.');
  }
}

class Minerar extends AcaoNPC {
  executarTarefa() {
    console.log('NPC está minerando blocos de pedra...');
  }
}

class ColetarMadeira extends AcaoNPC {
  executarTarefa() {
    console.log('NPC está coletando madeira de árvores...');
  }
}

class Pescar extends AcaoNPC {
  executarTarefa() {
    console.log('NPC está pescando no rio...');
  }
}

const minerar = new Minerar();
minerar.realizarAcao();
/*
  NPC se preparando para a ação...
  NPC está minerando blocos de pedra...
  NPC finalizou a ação.
*/

const coletarMadeira = new ColetarMadeira();
coletarMadeira.realizarAcao();
/*
  NPC se preparando para a ação...
  NPC está coletando madeira de árvores...
  NPC finalizou a ação.
*/

const pescar = new Pescar();
pescar.realizarAcao();
/*
  NPC se preparando para a ação...
  NPC está pescando no rio...
  NPC finalizou a ação.
*/
