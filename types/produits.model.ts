export interface Produits {
    id?: number;
    nom?: string;
    description?: string;
    prix?: number;
    image?: string;
    stock?: number;
    categorie?: string;
    marque?: string;
    numero_serie?: string;
    caracteristique_principale?: string;
    reduction?: number;
    tva_pourcentage?: number;
    createdAt?: Date;
    updatedAt?: Date;
}

