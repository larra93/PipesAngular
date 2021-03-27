import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'vuela'
})

export class VuelaPipe implements PipeTransform{

    transform( valorVuela: boolean  ): string{

        return ( valorVuela ) ? 'vuela' : 'no Vuela';
    }

}