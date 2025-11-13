import Product from "../modules/product.js";
export function sortByPrice(products, assending = true) {
    if (assending) {
        return products.slice().sort(function (a, b) { return a.price - b.price; });
    }
    else
        return products.slice().sort(function (a, b) { return b.price - a.price; });
}
export function sortByName(products, assending = true) {
    if (assending) {
        return products.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    }
    else
        return products.sort((a, b) => b.name.toLowerCase().localeCompare(a.name.toLowerCase()));
}
//# sourceMappingURL=sort.js.map