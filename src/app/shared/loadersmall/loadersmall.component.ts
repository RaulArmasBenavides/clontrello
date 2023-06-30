import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loadersmall',
  templateUrl: './loadersmall.component.html',
  styleUrls: ['./loadersmall.component.css']
})
export class LoadersmallComponent {
	@Input()
	textLoader: string = "Cargando";

	@Input()
	backgroundColor: string = "white";

	@Input()
	minWidth: string = "45rem";
	constructor() {}

	ngOnInit(): void {
		const container: HTMLElement = document.getElementById('container-loadder-spinner-main')!;
		container.style.backgroundColor = this.backgroundColor;
		container.style.minWidth = this.minWidth
	}
}
