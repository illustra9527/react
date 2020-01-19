因工廠使用的系統架構過愈龐大，所以我將主題目標設定為做出一個商品銷貨表。
其中要可輸入訂單資料後，以長條圖方式呈現並可以即時修正資料後重新渲染圖像。

在一開始我先找尋React各種教學文章以及官方文件，去了解React 如何表現渲染以及其大概架構
原本預計藉由簡單的範例來實現功能（Todolist、小時鐘）加上 Chart.js 去呈現圖表資料

雖然Todolist 是初學者範例，在閱讀完各式文件後發現時間關係，便先決定先產生圖表來呈現資料，以假資料先代替，再實現輸入變更的部分

在完成圖表資料後，先嘗試用 input 方式把資料帶回 chartData中的Title 來先達成即時呈現效果
並打算將資料以欄位固定方式，將資料props進去。
多方嘗試過後仍然失敗，決定以form表單方式送出後再呈現資料。

參考 bradtraversy/react_step_form的資料後，思考藉由該範例中的input頁以及在comfirm頁，來達到輸入後，獲取前面資料，接著再利用json格式或是設定變數，塞回chartData中，點下下一步渲染圖表。

但因時間不足，文件閱讀不夠詳細，所以對於如何props資料以及將資料帶入另外一個component中仍然一知半解的狀態，目前只完成度只有一半，若能再有多一點時間相信自己可以完成這個試題


/* 
    Ref:
        圖表繪製：https://www.youtube.com/watch?v=Ly-9VTXJlnA
        官方文件：https://zh-hant.reactjs.org/docs/create-a-new-react-app.html
        24 小時，React 快速入門：https://github.com/shiningjason/react-quick-tutorial
        猴子也能看懂的 React 教學：https://github.com/j6qup3/j6qup3.github.io/tree/master/2016/08

        

*/
