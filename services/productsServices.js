const { faker } = require('@faker-js/faker');
class ProductsServices{

  constructor(){
    this.products =[]
    //cada vez que instanciamos ProductsServices se va a generar el array de productos, esto es solo hasta que generemos nuestra DB
    this.generate()
  }

  generate(){
    const limit =  100

    for (let index = 0; index < limit; index++) {
    this.products.push({
      id: faker.datatype.uuid(),
       name: faker.commerce.productName(),
       price: parseInt( faker.commerce.price(),10),
       image: faker.image.imageUrl()
     })
    }
  }
  create(data){
    const newProduct={
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct)
   return newProduct
  }

  find(){
    return this.products
  }

  finOne(id){
    return this.products.find(item => item.id === id)
  }

  updete(id,data){
    const index = this.products.findIndex(item => item.id === id)
    if(index === -1){
      throw new Error('producto no encontrado 👽 ')
    }
    const product = this.products[index]
    //de esta forma asigno todo los datos y agrego solo lo que modifica
    return this.products[index]= {...product,...data}

  }

  delete(id){
    const index = this.products.findIndex(item => item.id === id)
    if(index === -1){
      throw new Error('product not found 👽👽')
    }
    this.products.splice(index,1)
    return {id}
  }


}
module.exports= ProductsServices
