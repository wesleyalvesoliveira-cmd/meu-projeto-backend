// a palavra "classe" define que estamos criando um molde
// a palavra "export" permite que esse arquivo seja usado por outros arquivos (como o app.ts)
export class Player {
    public name: string; // O nome do jogador (texto)
    public health: number; // a saúde do jogador (número)
    public level: number; // o nivel do jogador (número)

    // construtores (O construtor é um metodo especial que executado)
    // automaticamente quando a classe é instanciada uma unica vez
    constructor(name: string, health: number = 100, level: number = 1) {
        // A palavra "this" faz referência a própria classe, ou seja:
        // "Pegue"
        //
        this.name = name;
        this.health = health;
        this.level = level;
    }

    // Métodos (comportamentos de classe )
    // Métodos são as "funções" que a classe pode executar, ou seja, são os comportamentos da classe.
    // o Método "attack" é um método que retorna uma string.
    public attack (): string{
    const damage = this.level * 10;
    return`${this.name} atacou e causou ${damage} de dano!`;
}

    public takeDamage (damage: number): string{
        this.health += damage;
        if (this.health < 0){
            this.health = 0; // não deixa a saúde ficar negativa
            return `${this.name} Foi Derrotado`!
        }
        return`${this.name} recebeu ${damage} de dano e agora tem ${this.health} de saúde.`;
    }

    public upLevel(level: number): string {
    this.level += level;
        if (this.level >= 100){
            this.level = 100;
            return `O level maximo foi atingido, level atual: ${level}`;
        }
    return `Parabéns! ${this.name} subiu para o nível ${this.level}!`;
  }

    public takeHealth(health: number): string{
        this.health += health;
        if (this.health >= 100 ){
            this.health = 100; // não deixa a saúde ficar negativa
            return `${this.name} já esta com a vida cheia!`;
        }
        return`${this.name} recebeu ${health} de vida e agora tem ${this.health} de saúde.`;
    }

}