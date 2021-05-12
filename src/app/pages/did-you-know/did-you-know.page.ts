import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-did-you-know',
  templateUrl: './did-you-know.page.html',
  styleUrls: ['./did-you-know.page.scss'],
})
export class DidYouKnowPage implements OnInit {
  title: string;
  copy: string;

  constructor(private route: ActivatedRoute, private router: Router) {
    if (!this.router.getCurrentNavigation().extras.state)
      this.router.navigate(['/problems']);
    if (this.router.getCurrentNavigation().extras.state.type) {
      this.selectFeeling(this.router.getCurrentNavigation().extras.state.type);
    }
  }

  selectFeeling(type) {
    switch (type) {
      case 'tired':
        this.title = 'What can be the reason of you feeling tired?';
        this.copy = 'CO2 levels increase when there are many people in a classroom. It may be easy for the teacher standing in front of the class to breathe, but at the back of the room there is practically a wall of air, as the air circulation is insufficient. You feel tired, which affects learning.';
        break;

      case 'headache':
        this.title = 'Did you know this about headaches?';
        this.copy = 'Migraine diagnosis and elevated headache frequency are associated with an uncomfortable indoor environment.';
        break;

      case 'nosleep':
        this.title = 'Why sleep is so important?';
        this.copy = 'Sleep helps control our metabolism and weight, promotes stable moods, helps prevent cardiovascular diseases, boosts our immune system/function, increases knowledge retention, and helps us with long and short-term memory. Sleep is also essential for brain functioning.';
        break;

      case 'uncomfortable':
        this.title = 'Why do you feel uncomfortable?';
        this.copy = 'Exposure to carbon dioxide can produce a variety of health effects. These may include headaches, dizziness, restlessness, a tingling or pins or needles feeling, difficulty breathing, sweating, tiredness, and increased heart rate.';
        break;

      case 'cantfocus':
        this.title = 'How does the room temperature affect your concentration?';
        this.copy = ' Room temperature does have an affect on students attention span. Your mind becomes focused on maintaining its body temperature, either cooling or heating, in a room thats too cold or too hot – taking away from your concentration. Warm rooms can make you feel tired and sleepy.';
        break;

      default:
        this.title = 'Not data';
        this.copy = 'No data';
        break;
    }
  }

  ngOnInit() {}
}
