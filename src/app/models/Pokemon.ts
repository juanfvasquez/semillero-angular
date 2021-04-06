export class Pokemon {
  constructor(
    public nombre: string,
    public altura: number,
    public peso: number,
    public imagen: string,
    public estado: string = "libre",
  ) {
  }
}
