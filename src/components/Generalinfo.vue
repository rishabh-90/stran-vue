<template>
    <!-- Other HTML removed for brevity -->
    <div class="col">
        <div class="row">
            <div class="col-md-7 info-display">
                <p class="info-display-typo"><i :class="['fas' ,generalInfo.icon]"></i> {{generalInfo.income}}</p>
                <p class="info-display-typo">{{generalInfo.heading}}</p>
            </div>
            <div class="col-md-5">
                <Bar :styles="{height: '75px'}" :chartdata="computedBarData" />
            </div>
        </div>
    </div>
    <!-- Other HTML removed for brevity -->
</template>

<script>
    import Bar from "../js/Bar.js"
    export default {
        name: "Generalinfo",
        props: {
            generalInfo: Object,
        },
        components: {
            Bar
        },
        computed: {
            computedBarData: function() {
                let data = this.generalInfo.data
                let labels = this.generalInfo.labels
                let datasets = [{
                    backgroundColor: this.generalInfo.color,
                    data
                }]
                let dataaction = {
                    labels,
                    datasets
                }
                return dataaction
            },
        }
    };
</script>

<style scoped lang="scss">
    .info-display {
        text-align: right;
        padding-top: 29px;
        .info-display-typo {
            font-size: 12px;
            margin: 0;
            font-weight: bold;
        }
    }
    
    @media (min-width: 481px) and (max-width: 767px) {
        //CSS
        .info-display {
            padding-top: 20px;
            text-align: left;
            display: inline-block;
            .info-display-typo {
                font-size: 1rem;
                margin: 0;
                display: inline-block;
                font-weight: normal;
            }
        }
    }
    
    @media (min-width: 320px) and (max-width: 480px) {
        //CSS
        .info-display {
            padding-top: 20px;
            text-align: left;
            .info-display-typo {
                font-size: 1rem;
                margin: 0;
                display: inline-block;
                font-weight: normal;
            }
        }
    }
    
    @media (min-width: 1281px) {
        //CSS
    }
    
    @media (min-width: 1025px) and (max-width: 1280px) {
        //CSS
    }
    
    @media (min-width: 768px) and (max-width: 1024px) {
        //CSS
    }
    
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
        //CSS
    }
</style>