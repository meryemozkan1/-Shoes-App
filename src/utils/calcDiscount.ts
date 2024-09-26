//Fiyat ve indirim oranın alınacak
// İndirim varsa, asıl fiyattan indirim oranı kadar çıkatılacak
//İndirim yojsa asıl fiyatı döndüreck

export default (price:number, discount:number=0)=>{
    if(discount){
        return (price*(100-discount))/100;
    }else{
        return price;
    }
}