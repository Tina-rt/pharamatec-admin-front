import type { CartItem } from './cartItem.models';
import type { Produits } from './produits.model';

export interface OrderItem {
    id: number;
    idProduit: number;
    nomProduit: string;
    quantite: number;
    prixUnitaire: number;
    tva: number;
    prixAvecTva: number;
    image: string;
    statut: string;
}
