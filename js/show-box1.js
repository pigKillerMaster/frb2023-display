var dom = document.getElementById('rate-show');
var myChart1 = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};

var option;

option = {
  title: {
    text: '司机应答比率',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: '滴滴' },
        { value: 735, name: '神州出行' },
        { value: 580, name: '高德打车' },
        { value: 484, name: 'T3出行' },
        { value: 300, name: '其他' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};

if (option && typeof option === 'object') {
  myChart1.setOption(option);
}

window.addEventListener('resize', myChart1.resize);