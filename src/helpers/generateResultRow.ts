




export const generateResultRow = (userName: string,
                                  squareId: number | null,
                                  floorId: number | null,
                                  conditionArr: string[]) => {

    const baseCost = 3
    const squareCollection = squareId === 1? [10,15] : 2 ? [16,30] : 3 ? [30,50] : 4 ? [50,70]: 5 ? [70,100] : [0,0]
    const floorCostIncrease = floorId === 1? 0 : 2 ? 1 : 3 ? 1.5 : 4 ? 2: 5 ? 0.5 : 0


    const squareMeterCost = baseCost + floorCostIncrease
    const squareMeterCostMinimum = ( squareMeterCost * squareCollection[0]) + conditionCostIncrease(conditionArr)
    const squareMeterCostMaximum = ( squareMeterCost * squareCollection[1]) + conditionCostIncrease(conditionArr)
    const fullCostRow = `${squareMeterCostMinimum} - ${squareMeterCostMaximum} $ / месяц`


    return `Уважаемый ${userName}! Ориентировочная стоимость аренды составит : ${fullCostRow} $ / месяц. 
     Цена 1м² составит примерно ${squareMeterCost} $ / месяц. Суммарная сумма услуг ТЦ примерно составит ${conditionCostIncrease(conditionArr)} $ / месяц`

}

const conditionCostIncrease = (conditionArr: string[])=>{
    let baseCost = 0;
    if(conditionArr.indexOf('1radio')!==-1){
        baseCost += 3
    }
    if(conditionArr.indexOf('2radio')!==-1){
        baseCost += 1
    }
    if(conditionArr.indexOf('3radio')!==-1){
        baseCost += 5
    }
    return baseCost
}