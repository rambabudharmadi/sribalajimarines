import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.css']
})
export class AchievementComponent implements OnInit {
  title = 'ACHIEVEMENTS';
  constructor() { }

  ngOnInit(): void {
  }

}
