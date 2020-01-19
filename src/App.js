import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/chart';
import NameForm from './components/UserForm';



class App extends Component {

    constructor(props){
        super(props);
        this.state = {


        }

    }


    /* 想法：
        先做出input按鈕，取得value
        指定放入不同的資料。 - 嘗試使用即時修改顯示失敗 （如時間）

        嘗試改用form送出表單取得value更改標題(chartTitle)


        */

    componentWillMount(){
        // component loads 的時候會呼叫getChartData並把資料塞回去
        this.getChartData();
        this.getChartTitle();
    }

    getChartTitle(){
        this.setState({

            chartTitle:'妙妙系列'
                
            
        })
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    getChartData(){
        // Ajax calls here to fill the state with data 
        // 而我們只是在這邊定義方法，必須在上面呼叫


        // ＤＯ？ 在這邊可以設定變數帶進chartData
        
        
        const first_sale = '312321';
        const second_sale = '34314';
        const third_sale = '34314';
        const fourth_sale = '34314';

        
        this.setState({

            chartData:{ // 把原本在 chart.js 裡面的data搬到前面，是因為我們通常利用api接收資料
                labels: ['妙妙洗髮乳', '妙妙護髮乳', '妙妙沐浴乳', '妙妙乳液'],
                datasets:[
                    {
                        label:'銷售量',
                        data:[
                            first_sale,
                            second_sale,
                            third_sale,
                            fourth_sale
                        ],
                        backgroundColor:[
                            'rgba(255, 99, 142, 0.6)',
                            'rgba(54, 22, 33, 0.6)',
                            'rgba(144, 46, 86, 0.6)',
                            'rgba(199, 32, 11, 0.6)'
                        ]
                    }
                ]
            }
        });
    }



    render(){
        return (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />        
              </header>

                <div className="#inputTest">
                {/* <input value={this.state.value} onChange={this.handleChange} name="fstData"/> */}
                    <NameForm />
                </div>  

                
                <Chart legendPosition="bottom" chartData={this.state.chartData} title={this.state.chartTitle} />
                {/* Chart 裡面已經沒有資料了，所以要在這邊把上面的資料塞回來 */}
            </div>
          );


    }


  
}

export default App;
