import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader3',
  templateUrl: './loader3.component.html',
  styleUrls: ['./loader3.component.css']
})
export class Loader3Component {
	@Input()
	width: string = '27rem';
	@Input()
	height: string = '20rem';

	@Input()
	msj: string = 'Cargando';
	constructor() { }

	ngOnInit(): void {
		const container: HTMLElement = document.getElementById('wrapper-loader-modal')!;
		container.style.width = this.width;
		container.style.height = this.height;
	}
}
