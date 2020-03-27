import {Bar} from 'vue-chartjs'
import axios from 'axios'

export default{
    extends:Bar,
    data: () => ({
        results:[],
        chartdata: {
          //labels:['2020-3-05',4,5,6],
          labels:[],
          datasets: [{
              label: "MRT",
              backgroundColor: "#3e95cd",
              data:[]
          },{
            label: "LRT",
            backgroundColor: "#orange",
            data:[]
          },
          {
            label: "Taxi",
            backgroundColor: "#8e5ea2",
            data:[]
          },
          {
            label: "Bus",
            backgroundColor: "grey",
            data:[]
          }],
          
        },
        options: {
            title: {
              display: true,
              text: 'SG transports'
            },
            responsive: true,
            maintainAspectRatio: true,
            legend : false,
        }
      }),
    methods:{
    
    fetchData : function(){
        axios.get('https://data.gov.sg/api/action/datastore_search?resource_id=552b8662-3cbc-48c0-9fbb-abdc07fb377a').then(response=>{
        this.results=response["data"]["result"]["records"]
        // console.log(response.data.snapshots)
        console.log(this.results[0])
        for(let entry in this.results){
            if(this.results[entry]["type_of_public_transport"] == "MRT") {
                if(!this.chartdata.labels.includes(this.results[entry]["year"])) {
                    this.chartdata.labels.push(this.results[entry]["year"])
                }

                this.chartdata.datasets[0].data.push(
                    Number(this.results[entry]["average_ridership"])
                )
            }

            if(this.results[entry]["type_of_public_transport"] == "LRT") {
                if(!this.chartdata.labels.includes(this.results[entry]["year"])) {
                    this.chartdata.labels.push(this.results[entry]["year"])
                }

                this.chartdata.datasets[1].data.push(
                    Number(this.results[entry]["average_ridership"])
                )
            }

            if(this.results[entry]["type_of_public_transport"] == "Taxi") {
                if(!this.chartdata.labels.includes(this.results[entry]["year"])) {
                    this.chartdata.labels.push(this.results[entry]["year"])
                }

                this.chartdata.datasets[2].data.push(
                    Number(this.results[entry]["average_ridership"])
                )
            }
            if(this.results[entry]["type_of_public_transport"] == "Bus") {
                if(!this.chartdata.labels.includes(this.results[entry]["year"])) {
                    this.chartdata.labels.push(this.results[entry]["year"])
                }

                this.chartdata.datasets[3].data.push(
                    Number(this.results[entry]["average_ridership"])
                )
            }

            // if(!this.chartdata.datasets.label.includes(this.results[entry]["type_of_public_transport"])) {
            //     this.chartdata.datasets.label.push(this.results[entry]["type_of_public_transport"])
            // }
            // this.chartdata.datasets.data.push(this.results[entry]["average_ridership"])

            // this.chartdata.datasets.push( {
            //     label: [this.results[entry]["year"]],
            //   })



            // if(!this.chartdata.datasets[0].label.includes(this.results[entry][year])) {
            //     this.chartdata.datasets[0].label.push(this.results[entry][year])
            // }

            // this.chartdata.datasets[0].data.push(this.results[entry].cases)
            // this.chartdata.labels.push(this.results[entry].timestamp)
        }
        this.renderChart(this.chartdata,this.options)
            
    })
    
    }
    
    },
     mounted(){
        //console.log('Do I come here')
        this.fetchData()
        
     }

    
    
    
}