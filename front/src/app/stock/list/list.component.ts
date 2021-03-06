import { Component, OnInit } from '@angular/core';
import { faSync, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/interfaces/article';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  faSync = faSync;
  faPlus = faPlus;
  faTrashAlt = faTrashAlt;

  selectedArticles: Article[] = [];

  constructor(public articleService: ArticleService) {}

  ngOnInit(): void {}

  toggle(article: Article) {
    console.log('toggle', article);
    const index = this.selectedArticles.findIndex((a) => a === article);
    if (index !== -1) {
      // remove
      this.selectedArticles.splice(index, 1);
      return;
    }
    // add
    this.selectedArticles.push(article);
  }

  remove() {
    console.log('remove');
    this.articleService.remove(this.selectedArticles.map((a) => a.id));
    this.selectedArticles.length = 0;
  }
}
