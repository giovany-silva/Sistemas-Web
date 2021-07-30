export class Produto {
  public codigo: number
  public descricao: string
  public valor: number
  public desconto: number
  public total: number
  public quant: number

  constructor(codigo: number, descricao: string, valor: number, desconto: number){
    this.codigo = codigo;
    this.descricao = descricao;
    this.valor = valor;
    this.desconto = desconto;
    this.total = 0;
    this.quant = 0;
  }
}