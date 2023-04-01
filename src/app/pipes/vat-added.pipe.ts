import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {
//value html sayfasındaki gelen parametre değeri, value'den sonraki değer parametredir. en sağdaki number dönüş tipi
  transform(value: number, kdv:number): number {
    return value + (value*10/100);
  }

}
