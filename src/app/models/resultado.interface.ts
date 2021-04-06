export interface Resultado {
  count: number;
  next: string;
  previous: string;
  results: ItemResultado[]
}

export interface ItemResultado {
  name: string;
  url: string;
}
