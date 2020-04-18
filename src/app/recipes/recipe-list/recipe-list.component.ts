import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "This a simply a test",
      "https://jamaicans.com/wp-content/uploads/2016/08/Chef-Noel-Cunningham-Braised-Cow-Foot-with-Beans.jpg"
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
