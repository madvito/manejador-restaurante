import React from 'react'
import {Bar} from 'react-chartjs-2'

const Barra = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'algo',
            backgroundColor: 'rgba(255,99,132,1)',
            // borderColor: 'rgba(255,99,132,1)',
            // borderWidth: 1,
            // hoverBackgroundColor: 'rgba(255,99,132,1)',
            // hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: 'otro algo',
            backgroundColor: 'rgba(255,200,132,1)',
            // borderColor: 'rgba(255,200,132,1)',
            // borderWidth: 1,
            // hoverBackgroundColor: 'rgba(255,200,132,1)',
            // hoverBorderColor: 'rgba(255,200,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
    }
    const options = {
        scales:{
            xAxes: [
                {
                    display:false
                }
            ]
        }
    }
    return (
        <div className='grafico'>
            <Bar 
                data={data}
                // width={100}
                // height={50}
                options={{
                  maintainAspectRatio: false,
                  cornerRadius: 10,
                  scales:{
                    xAxes: [
                        {
                            display:false
                        }
                    ],
                    yAxes: [
                        {
                            gridLines:{
                                color:'rgba(255,200,132,0)'
                            }
                            // display:false
                        }
                    ]
                }
                }}
            />
        </div>
    )
}

export default Barra

