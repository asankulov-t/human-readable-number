module.exports=function toReadable(number) {
    let numbers=['zero','one','two','three','four','five','six','seven','eight','nine','ten'];
    let decimalnum=['','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    let numhundred=['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    let result=''
    let numberStr=number.toString()
    for (let i=0;i<numberStr.length;i++){
        if (numberStr.length==1){

            result+=numbers[numberStr[i]]
        }if (numberStr.length==2){
            let res=''
            let value=numberStr.slice(0,2)
            let last=numberStr.slice(0)
            let lastChar=numberStr.slice(1)
            if (value==10){
                return result+=numbers[last].trim()
            }if (value<20){
                return result+=decimalnum[numberStr.slice(1)]
            }else {
                  result+=numhundred[numberStr.slice(0,1)]
                  result+=lastChar!=='0'?" "+numbers[lastChar]:''
                  return result.trim()
            }
        }if (numberStr.length==3){
            let seconValue=' '
            let secondSide=numberStr.slice(1);
            if (secondSide>=20){
                let lastChar=secondSide.slice(1)
                seconValue+=numhundred[secondSide.slice(0,1)]
                seconValue+=lastChar!=='0'?' '+numbers[lastChar]:''
            }if (secondSide<20&&secondSide>10){

                seconValue+=decimalnum[secondSide.slice(1)]
            }if (secondSide<=9){
                let lastChar=secondSide.slice(1)
                seconValue+=lastChar!=='0'?''+numbers[lastChar]:''
            }if (secondSide==10){
                let lastChar=secondSide.slice(0)
                seconValue+=lastChar!=='0'?''+numbers[lastChar]:''
            }
            let lastNums=seconValue==' '?'':seconValue
         return result+=numbers[numberStr[0]]+' hundred'+lastNums
        }
    }
    return result
}
//
// console.log(toReadable(118))

