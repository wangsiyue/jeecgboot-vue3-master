import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '任务名称',
    align:"center",
    dataIndex: 'taskName'
   },
   {
    title: '样品名称',
    align:"center",
    dataIndex: 'sampleName'
   },
   {
    title: '样品编号',
    align:"center",
    dataIndex: 'sampleNo'
   },
   {
    title: '测量仪器',
    align:"center",
    dataIndex: 'measuringInstrument'
   },
   {
    title: '仪器编号',
    align:"center",
    dataIndex: 'instrumentNo'
   },
   {
    title: '分析日期',
    align:"center",
    dataIndex: 'analysisDate'
   },
   {
    title: '仪器效率，η ',
    align:"center",
    dataIndex: 'instrumentEfficiency'
   },
   {
    title: '本底计数率，min-1',
    align:"center",
    dataIndex: 'backgroundCountRate'
   },
   {
    title: '本底计数时间,min',
    align:"center",
    dataIndex: 'backgroundCountingTime'
   },
   {
    title: '样 品 量',
    align:"center",
    dataIndex: 'sampleSize'
   },
   {
    title: '探头刻度时参考源计数率 J0，min-1',
    align:"center",
    dataIndex: 'probeCountRate'
   },
   {
    title: '样品测量时参考源计数率 J，min-1',
    align:"center",
    dataIndex: 'sampleCountRate'
   },
   {
    title: 'Y载体加入量（以草酸盐沉淀形式计算），g',
    align:"center",
    dataIndex: 'amountCarrierAdded'
   },
   {
    title: 'Sr-Y分离时刻',
    align:"center",
    dataIndex: 'separationMoment'
   },
   {
    title: 'Y-90测量时刻',
    align:"center",
    dataIndex: 'measuringTime'
   },
   {
    title: '时间间隔，h',
    align:"center",
    dataIndex: 'timeInterval'
   },
   {
    title: '校正因子，e-λt',
    align:"center",
    dataIndex: 'correctionFactor'
   },
   {
    title: '滤纸净重，g',
    align:"center",
    dataIndex: 'weightPaper'
   },
   {
    title: '沉淀及滤纸总重，g',
    align:"center",
    dataIndex: 'precipitateWeightPaper'
   },
   {
    title: '沉淀净重，g',
    align:"center",
    dataIndex: 'precipitateWeight'
   },
   {
    title: 'Y的化学回收率，RY',
    align:"center",
    dataIndex: 'chemicalRecoveryRate'
   },
   {
    title: '样品计数率，min-1',
    align:"center",
    dataIndex: 'sampleCountrate'
   },
   {
    title: '样品计数时间，min',
    align:"center",
    dataIndex: 'sampleCountingTime'
   },
   {
    title: 'Y-90净计数率,min-1',
    align:"center",
    dataIndex: 'countRate'
   },
   {
    title: '锶-90比活度',
    align:"center",
    dataIndex: 'specificActivity'
   },
   {
    title: '灰鲜比，g/kg',
    align:"center",
    dataIndex: 'greyFreshRatio'
   },
   {
    title: '分析人',
    align:"center",
    dataIndex: 'analyst'
   },
   {
    title: '校核人',
    align:"center",
    dataIndex: 'checker'
   },
   {
    title: '校核日期',
    align:"center",
    dataIndex: 'checkeDate'
   },
   {
    title: '备注',
    align:"center",
    dataIndex: 'remark'
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
      label: "任务名称",
      field: 'taskName',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "样品名称",
      field: 'sampleName',
      component: 'Input',
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '任务名称',
    field: 'taskName',
    component: 'Input',
  },
  {
    label: '样品名称',
    field: 'sampleName',
    component: 'Input',
  },
  {
    label: '样品编号',
    field: 'sampleNo',
    component: 'Input',
  },
  {
    label: '测量仪器',
    field: 'measuringInstrument',
    component: 'Input',
  },
  {
    label: '仪器编号',
    field: 'instrumentNo',
    component: 'Input',
  },
  {
    label: '分析日期',
    field: 'analysisDate',
    component: 'Input',
  },
  {
    label: '仪器效率，η ',
    field: 'instrumentEfficiency',
    component: 'Input',
  },
  {
    label: '本底计数率，min-1',
    field: 'backgroundCountRate',
    component: 'Input',
  },
  {
    label: '本底计数时间,min',
    field: 'backgroundCountingTime',
    component: 'Input',
  },
  {
    label: '样 品 量',
    field: 'sampleSize',
    component: 'Input',
  },
  {
    label: '探头刻度时参考源计数率 J0，min-1',
    field: 'probeCountRate',
    component: 'Input',
  },
  {
    label: '样品测量时参考源计数率 J，min-1',
    field: 'sampleCountRate',
    component: 'Input',
  },
  {
    label: 'Y载体加入量（以草酸盐沉淀形式计算），g',
    field: 'amountCarrierAdded',
    component: 'Input',
  },
  {
    label: 'Sr-Y分离时刻',
    field: 'separationMoment',
    component: 'Input',
  },
  {
    label: 'Y-90测量时刻',
    field: 'measuringTime',
    component: 'Input',
  },
  {
    label: '时间间隔，h',
    field: 'timeInterval',
    component: 'Input',
  },
  {
    label: '校正因子，e-λt',
    field: 'correctionFactor',
    component: 'Input',
  },
  {
    label: '滤纸净重，g',
    field: 'weightPaper',
    component: 'Input',
  },
  {
    label: '沉淀及滤纸总重，g',
    field: 'precipitateWeightPaper',
    component: 'Input',
  },
  {
    label: '沉淀净重，g',
    field: 'precipitateWeight',
    component: 'Input',
  },
  {
    label: 'Y的化学回收率，RY',
    field: 'chemicalRecoveryRate',
    component: 'Input',
  },
  {
    label: '样品计数率，min-1',
    field: 'sampleCountrate',
    component: 'Input',
  },
  {
    label: '样品计数时间，min',
    field: 'sampleCountingTime',
    component: 'Input',
  },
  {
    label: 'Y-90净计数率,min-1',
    field: 'countRate',
    component: 'Input',
  },
  {
    label: '锶-90比活度',
    field: 'specificActivity',
    component: 'Input',
  },
  {
    label: '灰鲜比，g/kg',
    field: 'greyFreshRatio',
    component: 'Input',
  },
  {
    label: '分析人',
    field: 'analyst',
    component: 'InputNumber',
  },
  {
    label: '校核人',
    field: 'checker',
    component: 'InputNumber',
  },
  {
    label: '校核日期',
    field: 'checkeDate',
    component: 'InputNumber',
  },
  {
    label: '备注',
    field: 'remark',
    component: 'InputNumber',
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



/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}