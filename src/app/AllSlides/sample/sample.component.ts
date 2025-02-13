import { Component } from '@angular/core';
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.scss',
})
export class SampleComponent {
  ngOnInit(): void {
    let deck = new Reveal({
      plugins: [Markdown],
    });
    deck.initialize();
  }
}
