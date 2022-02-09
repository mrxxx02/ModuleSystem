import MiniLibrary, { world } from "./module1";
import { data1, data2 } from "./module2";

MiniLibrary();
console.log(data1());

MiniLibrary();
console.log(data2());
world();
