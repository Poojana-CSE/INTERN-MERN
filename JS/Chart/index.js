const xvalue=['Python','JAVA','C++','C','Networking','DBMS'];
const yvalue=[80,87,90,97,77,100];
const barcolor=['blue','red','green','yellow','Orange','black'];
const layout={title:"CSE Subject Marks"}
const data=[{labels:xvalue,values:yvalue,type:'bar',marker:{colors:barcolor},hole:.4}];
Plotly.newPlot('chart',data,layout);
// new Chart('chart',{
//     // type:'bar',
//     type:'pie',
//     data:{
//         labels:xvalue,
//         datasets:[{
//             backgroundColor:barcolor,
//             data:yvalue
//         }]
//     },
//     options:{
//         legend:{display:false},
//         title:{
//             display:true,
//             text:"CSE Subject Marks"
//         }
//     }
// });

