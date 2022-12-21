

class categoryService{
  constructor(){
    this.categories= [{
      id:1,
      name:"Almacen"
    },
  {
    id:2,
    name:"Limpieza"
  },{
    id:3,
    name:"Perfumeria"
  }]


  }
  create(data){
    this.categories.push(data)
    return data
  }
  find(){
    return this.categories
  }
  findOne(id){
    return this.categories.find(item => item.id == id)
  }
  update(id,data){
    console.log(id);
    const index = this.categories.findIndex(item => item.id == id)
    console.log(index);
    if(index === -1)  throw new Error('CATEGORY NOT GOUND 🔥🔥🔥')

    const category = this.categories[index]
    const newCategory = this.categories[index]= {...category,...data}
    return newCategory
  }
  delete(id){
    const index = this.categories.findIndex(item => item.id == id)
    if(index === -1) throw new Error('CATEGORY NOT FOUND 🔥👽🔥')
    const newArray = this.categories.splice(index,1)
    // this.categories = newArray
    return id
  }

}
module.exports = categoryService
