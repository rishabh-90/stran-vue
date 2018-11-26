<template>
    <tr class="employee-table-row">
        <td>
            <div class="image-cropper"><img :src="employee.pic" /></div>
        </td>
        <td class="employee-text">{{employee.name}}</td>
        <td class="employee-text">{{employee.position}}</td>
        <td class="employee-text"><span class="badge" v-bind:class="{'badge-available':employee.status == 'Available','badge-break':employee.status == 'Break','badge-resigned':employee.status == 'Resigned','badge-leave':employee.status == 'Leave'}">{{employee.status}}</span></td>
        <td class="" v-if="employee.charttype == 'Pie'">
            <div class="chart-wrapper">
                <Pie :styles="{height: '50px'}" :chartdata="computedData" />
            </div>
        </td>
        <td class="" v-else-if="employee.charttype == 'Bar'">
            <div class="chart-wrapper">
                <Bar :styles="{height: '50px'}" :chartdata="computedData" />
            </div>
        </td>
        <td class="" v-else-if="employee.charttype == 'HorizontalBar'">
            <div class="chart-wrapper">
                <HorizontalBar :styles="{height: '50px'}" :chartdata="computedData" />
            </div>
        </td>
        <td class="" v-else-if="employee.charttype == 'Line'">
            <div class="chart-wrapper">
                <LineChart :styles="{height: '50px'}" :chartdata="computedData" />
            </div>
        </td>
        <td class="" v-else-if="employee.charttype == 'Donught'">
            <div class="chart-wrapper">
                <DonughtChart :styles="{height: '70px'}" :chartdata="computedData" />
            </div>
        </td>
    </tr>
</template>

<script>
    import Pie from "../js/Pie.js"
    import Bar from "../js/Bar.js"
    import LineChart from "../js/LineChart.js"
    import HorizontalBar from "../js/HorizontalBar.js"
    import DonughtChart from "../js/Donught.js"
    export default {
        name: 'EmployeeList',
        props: {
            employee: Object,
        },
        components: {
            Pie,
            Bar,
            LineChart,
            HorizontalBar,
            DonughtChart
        },
        methods: {
    
        },
        computed: {
            computedData: function() {
                let data = this.employee.data
                let labels = this.employee.labels
                let datasets = [{
                    backgroundColor: this.employee.color,
                    data
                }]
                let dataaction = {
                    labels,
                    datasets
                }
                return dataaction
            },
        },
    
    }
</script>

<style lang="scss" scoped>
    .employee-table-row {
        .chart-wrapper {
            width: 50px;
            height: 50px;
            margin: auto;
        }
        .employee-text {
            padding-top: 29px;
        }
        .image-cropper {
            width: 60px;
            height: 60px;
            position: relative;
            overflow: hidden;
            border-radius: 50%;
            margin-top: -15px;
            margin: auto;
            border: 1px solid white;
            -webkit-box-shadow: -2px -2px 20px -6px rgba(0, 0, 0, 0.75);
            -moz-box-shadow: -2px -2px 20px -6px rgba(0, 0, 0, 0.75);
            box-shadow: -2px -2px 20px -6px rgba(0, 0, 0, 0.75);
            img {
                display: inline;
                margin: 0 auto;
                height: 100%;
            }
            .employee-text {}
        }
        .badge-available {
            color: white;
            background: rgba(210, 255, 82, 1);
            background: -moz-linear-gradient(left, rgba(210, 255, 82, 1) 0%, rgba(145, 232, 66, 1) 100%);
            background: -webkit-gradient(left top, right top, color-stop(0%, rgba(210, 255, 82, 1)), color-stop(100%, rgba(145, 232, 66, 1)));
            background: -webkit-linear-gradient(left, rgba(210, 255, 82, 1) 0%, rgba(145, 232, 66, 1) 100%);
            background: -o-linear-gradient(left, rgba(210, 255, 82, 1) 0%, rgba(145, 232, 66, 1) 100%);
            background: -ms-linear-gradient(left, rgba(210, 255, 82, 1) 0%, rgba(145, 232, 66, 1) 100%);
            background: linear-gradient(to right, rgba(210, 255, 82, 1) 0%, rgba(145, 232, 66, 1) 100%);
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d2ff52', endColorstr='#91e842', GradientType=1);
        }
        .badge-break {
            color: white;
            background: rgba(255, 175, 75, 1);
            background: -moz-linear-gradient(left, rgba(255, 175, 75, 1) 0%, rgba(255, 146, 10, 1) 100%);
            background: -webkit-gradient(left top, right top, color-stop(0%, rgba(255, 175, 75, 1)), color-stop(100%, rgba(255, 146, 10, 1)));
            background: -webkit-linear-gradient(left, rgba(255, 175, 75, 1) 0%, rgba(255, 146, 10, 1) 100%);
            background: -o-linear-gradient(left, rgba(255, 175, 75, 1) 0%, rgba(255, 146, 10, 1) 100%);
            background: -ms-linear-gradient(left, rgba(255, 175, 75, 1) 0%, rgba(255, 146, 10, 1) 100%);
            background: linear-gradient(to right, rgba(255, 175, 75, 1) 0%, rgba(255, 146, 10, 1) 100%);
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffaf4b', endColorstr='#ff920a', GradientType=1);
        }
        .badge-resigned {
            color: white;
            background: rgba(73, 155, 234, 1);
            background: -moz-linear-gradient(left, rgba(73, 155, 234, 1) 0%, rgba(32, 124, 229, 1) 100%);
            background: -webkit-gradient(left top, right top, color-stop(0%, rgba(73, 155, 234, 1)), color-stop(100%, rgba(32, 124, 229, 1)));
            background: -webkit-linear-gradient(left, rgba(73, 155, 234, 1) 0%, rgba(32, 124, 229, 1) 100%);
            background: -o-linear-gradient(left, rgba(73, 155, 234, 1) 0%, rgba(32, 124, 229, 1) 100%);
            background: -ms-linear-gradient(left, rgba(73, 155, 234, 1) 0%, rgba(32, 124, 229, 1) 100%);
            background: linear-gradient(to right, rgba(73, 155, 234, 1) 0%, rgba(32, 124, 229, 1) 100%);
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#499bea', endColorstr='#207ce5', GradientType=1);
        }
        .badge-leave {
            color: white;
            background: rgba(255, 175, 75, 1);
            background: -moz-linear-gradient(left, rgba(255, 175, 75, 1) 0%, rgba(255, 146, 10, 1) 100%);
            background: -webkit-gradient(left top, right top, color-stop(0%, rgba(255, 175, 75, 1)), color-stop(100%, rgba(255, 146, 10, 1)));
            background: -webkit-linear-gradient(left, rgba(255, 175, 75, 1) 0%, rgba(255, 146, 10, 1) 100%);
            background: -o-linear-gradient(left, rgba(255, 175, 75, 1) 0%, rgba(255, 146, 10, 1) 100%);
            background: -ms-linear-gradient(left, rgba(255, 175, 75, 1) 0%, rgba(255, 146, 10, 1) 100%);
            background: linear-gradient(to right, rgba(255, 175, 75, 1) 0%, rgba(255, 146, 10, 1) 100%);
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffaf4b', endColorstr='#ff920a', GradientType=1);
        }
        .badge-break {
            color: white;
            background: rgba(203, 96, 179, 1);
            background: -moz-linear-gradient(left, rgba(203, 96, 179, 1) 0%, rgba(193, 70, 161, 1) 50%, rgba(168, 0, 119, 1) 51%, rgba(219, 54, 164, 1) 100%);
            background: -webkit-gradient(left top, right top, color-stop(0%, rgba(203, 96, 179, 1)), color-stop(50%, rgba(193, 70, 161, 1)), color-stop(51%, rgba(168, 0, 119, 1)), color-stop(100%, rgba(219, 54, 164, 1)));
            background: -webkit-linear-gradient(left, rgba(203, 96, 179, 1) 0%, rgba(193, 70, 161, 1) 50%, rgba(168, 0, 119, 1) 51%, rgba(219, 54, 164, 1) 100%);
            background: -o-linear-gradient(left, rgba(203, 96, 179, 1) 0%, rgba(193, 70, 161, 1) 50%, rgba(168, 0, 119, 1) 51%, rgba(219, 54, 164, 1) 100%);
            background: -ms-linear-gradient(left, rgba(203, 96, 179, 1) 0%, rgba(193, 70, 161, 1) 50%, rgba(168, 0, 119, 1) 51%, rgba(219, 54, 164, 1) 100%);
            background: linear-gradient(to right, rgba(203, 96, 179, 1) 0%, rgba(193, 70, 161, 1) 50%, rgba(168, 0, 119, 1) 51%, rgba(219, 54, 164, 1) 100%);
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cb60b3', endColorstr='#db36a4', GradientType=1);
        }
    }
</style>

