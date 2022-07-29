exports.Query = {
    products: (parent, args, {products})=> products,
    product:  (parent,args, {products})=> {
      const productId = args.id  
      return products.find(product => product.id === productId)
    },
    categories: ()=> categories,
    category: (parent, args, {categories})=> {
        const { id }  = args
        return categories.find(category => category.id ===id)
    }
}