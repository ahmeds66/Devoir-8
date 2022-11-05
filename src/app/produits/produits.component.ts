import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { ActivatedRoute,Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html'
})
export class ProduitsComponent implements OnInit {

    produits? : Produit[]; //un tableau de produits

  constructor(private produitService: ProduitService,
              public authService: AuthService,
              private router: Router,
              private activatedRoute: ActivatedRoute ) { 
   //this.produits=[];
     }

  ngOnInit(): void {
  //this.produits = this.produitService.listeProduits();
  this.produitService.listeProduit().subscribe(prods => {
    console.log(prods);
    this.produits = prods;
  });
  }
  /*supprimerProduit(p: Produit) {
  //console.log(p);
    let conf = confirm("Etes-vous sûr ?");
    if (conf) 
     this.produitService.supprimerProduit(p); 
  }
  */
  supprimerProduit(prod: Produit) { 
    let conf = confirm("Etes-vous sûr ?"); 
    if (conf)
      this.produits?.forEach((cur, index) => {
        if(prod.idProduit === cur.idProduit) {
          this.produits?.splice(index,1);
        }
      });
  }
    /*this.produitService.supprimerProduit(prod.idProduit).subscribe(() => { 
      console.log("produit supprimé"); 
    }); 
    this.router.navigate(['produits']).then(() => { 
      window.location.reload(); 
    });
    */ 
  
 

}
