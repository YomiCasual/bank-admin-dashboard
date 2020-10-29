import React, {Component} from 'react'

import 'zingchart/es6'
import ZingChart from 'zingchart-react'
import "zingchart/modules-es6/zingchart-maps.min.js";
import "zingchart/modules-es6/zingchart-maps-usa.min.js";


class TransactionChart extends Component {
    constructor(props) {
      super(props);
      this.state = {
        config: {
          type: 'line',
          'scale-x': {
            labels: [ "Jan2020", "Feb 2020", "Mar 2020", "Apr 2020", "May 2020", "June 2020", "July 2020", "Aug 2020", "Sep 2020" ]
          },
          height: '280px',
          series: [
              {
            values: [4000,5243,3839,4030,5902,321,5092,4309,110]
             },
             {
                values: [5838,7388,3282,2393,578,3838,937,4029,934]
            }
        
        ]
        } 
      }
    //   this.chart = React.createRef();
    //   this.addPlot = this.addPlot.bind(this);
    }

    render() {  
               
      return (
        <div>
          <ZingChart ref={this.chart} data={this.state.config} onClick={this.addPlot}/>
        </div>
      );

      
    }

    
 
}


  export default TransactionChart