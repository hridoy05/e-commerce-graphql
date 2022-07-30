exports.Query = {
    products: (parent, {filter}, {products})=> {
      let filteredProducts = products
      if(filter && filter.onSale ){
        filteredProducts = filteredProducts.filter(product => {
           return product.onSale
        })
      }
      return filteredProducts
    },
    product:  (parent,{id}, {products})=> {
      
      return products.find(product => product.id === id)
    },
    categories: (parent, args, {categories})=> categories,
    category: (parent, {id}, {categories})=> {
        return categories.find(category => category.id ===id)
    }
}