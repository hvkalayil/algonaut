import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Algorithm from 'src/app/shared/services/algorithm.interface';
import { AlgorithmService } from 'src/app/shared/services/algorithm.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  algorithm:Algorithm | null = null;

  constructor(private algorithmService:AlgorithmService, private router:Router){}

  ngOnInit() {
    try {
      this.algorithmService.getAlgorithmOfTheDay().subscribe((data) => this.algorithm = data[0])
    } catch (error) {
      console.log(error);
      this.router.navigate(['app-notfound'])
    }
  }

}
