import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '项目名称',
    align:"center",
    dataIndex: 'projectName'
   },
   {
    title: '测量地点',
    align:"center",
    dataIndex: 'place'
   },
   {
    title: '环境温度',
    align:"center",
    dataIndex: 'temperature'
   },
   {
    title: '相对湿度',
    align:"center",
    dataIndex: 'humidity'
   },
   {
    title: '天气',
    align:"center",
    dataIndex: 'weather'
   },
   {
    title: '测量高度',
    align:"center",
    dataIndex: 'gaugeAltitude'
   },
   {
    title: '测量开始时间',
    align:"center",
    dataIndex: 'measuringStartTime'
   },
   {
    title: '测量结束时间',
    align:"center",
    dataIndex: 'measuringEndTime'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "项目名称",
      field: 'projectName',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "测量地点",
      field: 'place',
      component: 'Input',
      colProps: {span: 6},
 	},
     {
      label: "校验时间",
      field: "checkerTime",
      component: 'RangePicker',
      componentProps: {
          showTime:true
      },
      colProps: {span: 6},
	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '项目名称',
    field: 'projectName',
    component: 'Input',
  },
  {
    label: '测量地点',
    field: 'place',
    component: 'Input',
  },
  {
    label: '环境温度',
    field: 'temperature',
    component: 'Input',
  },
  {
    label: '相对湿度',
    field: 'humidity',
    component: 'Input',
  },
  {
    label: '天气',
    field: 'weather',
    component: 'Input',
  },
  {
    label: '测量高度',
    field: 'gaugeAltitude',
    component: 'Input',
  },
  {
    label: '测量开始时间',
    field: 'measuringStartTime',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
  },
  {
    label: '测量结束时间',
    field: 'measuringEndTime',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
  },
  {
    label: '累积时间/h',
    field: 'cumulative',
    component: 'InputNumber',
  },
  {
    label: '监测状态',
    field: 'state',
    component: 'Input',
  },
  {
    label: '备注',
    field: 'remarks',
    component: 'Input',
  },
  {
    label: '测量人',
    field: 'surveyor',
    component: 'Input',
  },
  {
    label: '校验人',
    field: 'checker',
    component: 'Input',
  },
  {
    label: '校验时间',
    field: 'checkerTime',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
  },
  {
    label: '点位名称',
    field: 'pointName',
    component: 'Input',
  },
	// TODO 主键隐藏字段，目前写死为ID
	{
	  label: '',
	  field: 'id',
	  component: 'Input',
	  show: false
	},
];



/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}