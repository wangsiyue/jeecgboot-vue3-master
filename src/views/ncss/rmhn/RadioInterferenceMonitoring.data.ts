import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
import {JVxeTypes,JVxeColumn} from '/@/components/jeecg/JVxeTable/types'
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '项目名称',
    align:"center",
    dataIndex: 'entryName'
   },
   {
    title: '地点',
    align:"center",
    dataIndex: 'place'
   },
   {
    title: '仪器型号',
    align:"center",
    dataIndex: 'instrumentModel'
   },
   {
    title: '电压：kV',
    align:"center",
    dataIndex: 'voltage'
   },
   {
    title: '环境温度：℃',
    align:"center",
    dataIndex: 'ambientTemperature'
   },
   {
    title: '相对湿度%',
    align:"center",
    dataIndex: 'relativeHumidity'
   },
   {
    title: '天气',
    align:"center",
    dataIndex: 'weather'
   },
   {
    title: '大气压：kPa',
    align:"center",
    dataIndex: 'atmosphericPressure'
   },
   {
    title: '风速：m/s',
    align:"center",
    dataIndex: 'windSpeed'
   },
   {
    title: '天线类型',
    align:"center",
    dataIndex: 'antennaType'
   },
   {
    title: '高度',
    align:"center",
    dataIndex: 'height'
   },
   {
    title: '监测日期及时间',
    align:"center",
    dataIndex: 'monitoringDate'
   },
   {
    title: '测量人',
    align:"center",
    dataIndex: 'surveyor'
   },
   {
    title: '校核人',
    align:"center",
    dataIndex: 'checker'
   },
   {
    title: '备注',
    align:"center",
    dataIndex: 'remark'
   },
   {
    title: '校核日期',
    align:"center",
    dataIndex: 'checkDate'
   },
   {
    title: '上传人',
    align:"center",
    dataIndex: 'uploader'
   },
   {
    title: '上传时间',
    align:"center",
    dataIndex: 'uploadTime'
   },
   {
    title: '上传图片',
    align:"center",
    dataIndex: 'uploadPictures',
    slots: { customRender: 'fileSlot' },
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "项目名称",
      field: "entryName",
      component: 'Input',
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '项目名称',
    field: 'entryName',
    component: 'Input',
  },
  {
    label: '地点',
    field: 'place',
    component: 'Input',
  },
  {
    label: '仪器型号',
    field: 'instrumentModel',
    component: 'Input',
  },
  {
    label: '电压：kV',
    field: 'voltage',
    component: 'Input',
  },
  {
    label: '环境温度：℃',
    field: 'ambientTemperature',
    component: 'Input',
  },
  {
    label: '相对湿度%',
    field: 'relativeHumidity',
    component: 'InputNumber',
  },
  {
    label: '天气',
    field: 'weather',
    component: 'Input',
  },
  {
    label: '大气压：kPa',
    field: 'atmosphericPressure',
    component: 'Input',
  },
  {
    label: '风速：m/s',
    field: 'windSpeed',
    component: 'Input',
  },
  {
    label: '天线类型',
    field: 'antennaType',
    component: 'Input',
  },
  {
    label: '高度',
    field: 'height',
    component: 'Input',
  },
  {
    label: '监测日期及时间',
    field: 'monitoringDate',
    component: 'Input',
  },
  {
    label: '测量人',
    field: 'surveyor',
    component: 'InputNumber',
  },
  {
    label: '校核人',
    field: 'checker',
    component: 'InputNumber',
  },
  {
    label: '备注',
    field: 'remark',
    component: 'InputNumber',
  },
  {
    label: '校核日期',
    field: 'checkDate',
    component: 'Input',
  },
  {
    label: '上传人',
    field: 'uploader',
    component: 'Input',
  },
  {
    label: '上传时间',
    field: 'uploadTime',
    component: 'InputNumber',
  },
  {
    label: '上传图片',
    field: 'uploadPictures',
    component: 'JUpload',
    componentProps:{
     },
  },
	// TODO 主键隐藏字段，目前写死为ID
	{
	  label: '',
	  field: 'id',
	  component: 'Input',
	  show: false
	},
];
//子表单数据
//子表表格配置
export const radioInterferenceMonitoringDetailsColumns: JVxeColumn[] = [
    {
      title: '序号',
      key: 'serialNo',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '点位名',
      key: 'pointName',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '频点',
      key: 'frequencyPoint',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '准峰值测量结果（X），dB（V/m）',
      key: 'peakMeasurement',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '修正后值dB（V/m）',
      key: 'correct',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: 'x±Sn',
      key: 'remark1',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
  ]


/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
// 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}