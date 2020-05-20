const productmodel=require("./models/mongose")

const insertpr=async(titles,price,slugs)=>{
    const product=new productmodel()
    product.title=titles
    product.prie=price
    product.slug=slugs
    await product.save()
    return product
}
const findall=async()=>{
    const products=await productmodel.find({})
    return products
}
const deleteone=async (_id)=>{
    const product=await productmodel.findByIdAndDelete(_id)
    return product
}
const updateone=async (_id,title,prie,slug)=>{
    const products=await productmodel.findByIdAndUpdate(_id)
    products.title=title;
    products.prie=prie;
    products.slug=slug;
     return products
}

module.exports.insertpr=insertpr;
module.exports.findall=findall;
module.exports.deleteone=deleteone;
module.exports.updateone=updateone;
