import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    constructor(private apiService: ApiService) { }

    ngOnInit(): void {
    }
    productArray = [
        {
            prodId: 1,
            img: "https://ii2.pepperfry.com/media/catalog/product/c/a/494x544/cambridge-upholstered-queen-size-bed-with-storage-in-grey-color--mintwud-by-pepperfry-cambridge-upho-kkkyek.jpg",
            amt: 15000,
            qnt: 0
        },
        {
            prodId: 2,
            img: "https://ii3.pepperfry.com/media/catalog/product/e/l/494x544/eloa-queen-size-bed-with-upholstered-headboard-in-columbia-walnut-finish-by-casacraft-eloa-queen-siz-lxlohw.jpg",
            amt: 15000,
            qnt: 0
        },
        {
            prodId: 3,
            img: "https://ii2.pepperfry.com/media/catalog/product/m/a/494x544/madera-solid-wood-queen-size-upholstered-bed-in-provincial-teak-finish-by-woodsworth-madera-solid-wo-a7vqpj.jpg",
            amt: 15000,
            qnt: 0
        },
        {
            prodId: 4,
            img: "https://ii3.pepperfry.com/media/catalog/product/a/g/494x544/agata-queen-bed-in-turquoish-blue-colour-by-casacraft-agata-queen-bed-in-turquoish-blue-colour-by-ca-fpr6zv.jpg",
            amt: 15000,
            qnt: 0
        }

    ];
    inc(prod: { qnt: number; }) {
        if (prod.qnt !== 5) {
            prod.qnt += 1;
            this.apiService.addToCart(prod);
        }
    }
    dec(prod: { qnt: number; }) {
        if (prod.qnt != 1) {
            prod.qnt -= 1;
        }
    }
}
