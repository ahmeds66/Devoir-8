import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../model/produit.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styles: [
  ]
})
export class UpdateProduitComponent implements OnInit {
  currentProduit: Produit = new Produit();
  constructor(private activatedRoute: ActivatedRoute,
              private produitservise: ProduitService,
              private router: Router) { }

  ngOnInit(): void {
    //console.log(this.route.snapshot.params.id);
    //this.currentProduit = this.produitservise.consulterProduit(this.activatedRoute.snapshot.params['id']);
    //console.log(this.currentProduit);
    this.produitservise.consulterProduit(this.activatedRoute.snapshot.params['id']).subscribe(prod => {
      this.currentProduit = prod;
    });
  }
  updateProduit()
  {this.produitservise.updateProduit(this.currentProduit).subscribe(prod => { 
    this.router.navigate(['produits']); },(error) => { alert("Problème lors de la modification !"); } 
  );
}

}
