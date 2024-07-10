import exceljs from 'exceljs'

async function readExcel(){
    var workbook = new exceljs.Workbook()

    await workbook.xlsx.readFile("C:\\Users\\student\\javascript-training\\js-10thjuly\\testData.xlsx")
 
    var worksheet= workbook.getWorksheet('Sheet1');
    console.log("Row count: "+ worksheet.rowCount)
    console.log("col count: "+ worksheet.colCount)

    console.log(".................................................")

    worksheet.eachRow((row,rownum)=>{
        row.eachCell((cell,colnum)=>{
            console.log(cell.value)
            if(cell.value == "Name6")
            {
                console.log("Row number: "+rownum)
                console.log("column number: "+colnum)
            }
        })
    })

    console.log(".................Read data from excel..................")

    for (var i=1;i<=worksheet.rowCount;i++)
    {
        for(var j=1;j<=worksheet.columnCount;j++)
        {
            console.log(worksheet.getCell(i,j).value)
        }
    }

    console.log(".....................Write in  excel................")

    worksheet.getCell(2,1).value="Rashmi"
    await workbook.xlsx.writeFile("C:\\Users\\student\\javascript-training\\js-10thjuly\\testData.xlsx")
}

readExcel()