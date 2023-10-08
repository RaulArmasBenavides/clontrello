import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader-spinner',
  templateUrl: './loader-spinner.component.html',
  styleUrls: ['./loader-spinner.component.css']
})
export class LoaderSpinnerComponent {
	@Input()
	textLoader: string = "Cargando";

	@Input()
	backgroundColor: string = "black";

	@Input()
	minWidth: string = "45rem";
	constructor() {}

	ngOnInit(): void {
		const container: HTMLElement = document.getElementById('container-loadder-spinner-main')!;
		container.style.backgroundColor = this.backgroundColor;
		container.style.minWidth = this.minWidth
	}
}
