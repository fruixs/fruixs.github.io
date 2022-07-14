'use strict';

(function(val_tr,val_td, val_tcap){
    const tablestart = "<table>";
    const tableend = "</table>";
    const trstart = "<tr>";
    const trend = "</tr>";
    const tablecaption = val_tcap;
    let table_tbody = "";
    let counter = 0;
    
    for(let i=1;i<=(val_tr+1);i++){
        table_tbody += trstart;
        for(let j=1;j<=(val_td+1);j++){
            if(i==1){
                if(j==1) {
                    table_tbody += "<td>&nbsp;</td>";
                } else {
                    table_tbody += "<th scope='col'>" + (j-1) + "열</th>";
                }
            } else {
                if(j==1){
                    table_tbody += "<th scope='row'>" + (i-1) + "열</th>"
                } else {
                    table_tbody += "<td>" + ((i-2)*val_td+(j-1)) + "</td>";
                }
            }
        }
        table_tbody += trend;
    }
    
    document.body.innerHTML = tablestart + tablecaption + table_tbody + tableend;
    console.log(counter)
})(4, 10, "table caption이 들어 갑니다.");