import React, {Component} from 'react'; // 引用React
import { Bar, Line } from 'react-chartjs-2'; // 引用chartjs, 需要的圖表類型要打在{}裡面

class Chart extends Component{

    constructor(props){ 
        super(props);
        this.state ={

            // 原本在這邊的 chartData: 資料移到前面，然後用props
            chartData:props.chartData,
            chartTitle:props.chartTitle
        }

    }

    // 預設屬性，並可以在render的時候直接引用
    // 可直接在 app.js裡面 下行內屬性, 如legendPosition="bottom", 權重比預設高  
    // ! 都只是預設, props / inline style 後被改動
    static defaultProps = {
        displayTitle:true,
        displayLegend:true,
        legendPosition:'right',
        title:'chartTitle'
    }

    render(){
        return(

            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    options={{
                    title:{
                        display:this.props.displayTitle,
                        text:'銷售表單： '+this.props.title, 
                        // 在標題中加上面的屬性，defaultProps中預設為'City'，可以在app.js裡面加行內屬性
                        // 如此做法是為了在前面使用時就可以立即更改資料的方便性
                        fontSize:25
                    },

                    legend:{
                        display:this.props.displayLegend,
                        position:this.props.legendPosition
                    }

                    }}
                />

                <hr/>
                <Line    // 要用不同的資料圖表的話修改開圖的值即可
                    data={this.state.chartData}
                    options={{
                    title:{
                        display:this.props.displayTitle,
                        text:'銷售表單：'+this.props.title, 
                        fontSize:25
                    },

                    legend:{
                        display:this.props.displayLegend,
                        position:this.props.legendPosition
                    }

                    }}
                />

                <hr/>
            </div>

        )
    }

}

export default Chart; // 要在app引用，所以需要export
