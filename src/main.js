import { render } from "../lib";
import HomePage from "./HomePage/Header";
import ProductPage from "./HomePage/Product";
import Navigo from 'navigo';
var App = document.querySelector("#app");
const router = new Navigo('/');
router.on('/', function() {
    console.log("home page");
    render(HomePage(), app)
})

router.on('/products', function() {
    console.log("Product page");
    render(ProductPage(), app)
})
router.resolve()

