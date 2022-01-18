import { Controller } from "@hotwired/stimulus"
import Vanilla from "vanilla-tilt"
export default class extends Controller {
  connect() {
    VanillaTilt.init(document.querySelectorAll(".card__portfolio_main"),{
    max: 15,
    speed: 1000,
    glare: false,
    "max-glare": 1,
    });
  }
}
