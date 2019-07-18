export class Product {
  // on met ? pour q on peu passer des produit sans passer en parametre optionnel
constructor(public ref?: string,
            public quantite?: number,
            public prixunitaire?: number) {

}
}
