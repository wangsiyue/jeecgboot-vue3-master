import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '自动编号',
    align:"center",
    dataIndex: 'accidentId'
   },
   {
    title: '事故编号',
    align:"center",
    dataIndex: 'accidentNo'
   },
   {
    title: '事故单位名称',
    align:"center",
    dataIndex: 'name'
   },
   {
    title: '事故时间',
    align:"center",
    dataIndex: 'accidentDate',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '事故地点',
    align:"center",
    dataIndex: 'accidentAddr'
   },
   {
    title: '是否结案（0：否  1：是）',
    align:"center",
    dataIndex: 'closedStatus_dictText'
   },
   {
    title: '填报日期',
    align:"center",
    dataIndex: 'writeDate',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "事故编号",
      field: 'accidentNo',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "事故单位名称",
      field: 'name',
      component: 'Input',
      colProps: {span: 6},
 	},
     {
      label: "事故时间",
      field: "accidentDate",
      component: 'RangePicker',
      colProps: {span: 6},
	},
     {
      label: "事故地点",
      field: "accidentAddr",
      component: 'Input', //TODO 范围查询
      colProps: {span: 6},
	},
     {
      label: "是否结案（0：否  1：是）",
      field: "closedStatus",
      component: 'JRangeNumber',
      colProps: {span: 6},
	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '自动编号',
    field: 'accidentId',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入自动编号!'},
          ];
     },
  },
  {
    label: 'id',
    field: 'id',
    component: 'InputNumber',
  },
  {
    label: '事故编号',
    field: 'accidentNo',
    component: 'Input',
  },
  {
    label: '事故单位名称',
    field: 'name',
    component: 'Input',
  },
  {
    label: '是否持有许可证（0：否  1：是）',
    field: 'licenseSituation',
    component: 'InputNumber',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入是否持有许可证（0：否  1：是）!'},
          ];
     },
  },
  {
    label: '许可证号',
    field: 'licenseNo',
    component: 'Input',
  },
  {
    label: '事故时间',
    field: 'accidentDate',
    component: 'DatePicker',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入事故时间!'},
          ];
     },
  },
  {
    label: '事故地点',
    field: 'accidentAddr',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入事故地点!'},
          ];
     },
  },
  {
    label: '事故级别（见字典）',
    field: 'accidentLevel',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入事故级别（见字典）!'},
          ];
     },
  },
  {
    label: '经济损失',
    field: 'economicLoss',
    component: 'InputNumber',
  },
  {
    label: '工作日损失',
    field: 'weekdayLoss',
    component: 'InputNumber',
  },
  {
    label: '是否结案（0：否  1：是）',
    field: 'closedStatus',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:""
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入是否结案（0：否  1：是）!'},
          ];
     },
  },
  {
    label: '放射性同位素应用领域（多选，以“,”号拼接）',
    field: 'radioisotopeField',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入放射性同位素应用领域（多选，以“,”号拼接）!'},
          ];
     },
  },
  {
    label: '射线装置应用领域（多选，以“,”号拼接）',
    field: 'radialField',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入射线装置应用领域（多选，以“,”号拼接）!'},
          ];
     },
  },
  {
    label: '人为因素（多选，以“,”号拼接）',
    field: 'artificialCause',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入人为因素（多选，以“,”号拼接）!'},
          ];
     },
  },
  {
    label: '技术因素（多选，以“,”号拼接）',
    field: 'skillCause',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入技术因素（多选，以“,”号拼接）!'},
          ];
     },
  },
  {
    label: '其他（多选，以“,”号拼接）',
    field: 'otherCause',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入其他（多选，以“,”号拼接）!'},
          ];
     },
  },
  {
    label: '超剂量受照工作人员人数',
    field: 'shineWorkerNo',
    component: 'Input',
  },
  {
    label: '超剂量受照公众人员人数',
    field: 'shinePublicNo',
    component: 'Input',
  },
  {
    label: '超剂量受照人数合计',
    field: 'shineSumNo',
    component: 'Input',
  },
  {
    label: '急性放射病活肢体残疾人数',
    field: 'diseaseDeformityNo',
    component: 'Input',
  },
  {
    label: '死亡人数',
    field: 'doomNo',
    component: 'Input',
  },
  {
    label: '是否人员超剂量照射（0：否  1：是）',
    field: 'beoverIrradiated',
    component: 'InputNumber',
  },
  {
    label: '放射性污染面积',
    field: 'polluteArea',
    component: 'Input',
  },
  {
    label: '放射性污染最大比活度',
    field: 'maxActivity',
    component: 'InputNumber',
  },
  {
    label: '总活度',
    field: 'sumActivity',
    component: 'InputNumber',
  },
  {
    label: '是否放射源污染（0：否  1：是）',
    field: 'bePollute',
    component: 'InputNumber',
  },
  {
    label: '放射性同位素事故类型（多选，以“,”号拼接）',
    field: 'accidentRadioisotope',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入放射性同位素事故类型（多选，以“,”号拼接）!'},
          ];
     },
  },
  {
    label: '事故经过原因及处理',
    field: 'accidentPass',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入事故经过原因及处理!'},
          ];
     },
  },
  {
    label: '事故后果及教训',
    field: 'accidentMoral',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入事故后果及教训!'},
          ];
     },
  },
  {
    label: 'REMARK',
    field: 'remark',
    component: 'Input',
  },
  {
    label: '填报人',
    field: 'writeName',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入填报人!'},
          ];
     },
  },
  {
    label: '填报日期',
    field: 'writeDate',
    component: 'DatePicker',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入填报日期!'},
          ];
     },
  },
  {
    label: '审核人',
    field: 'examineName',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入审核人!'},
          ];
     },
  },
  {
    label: '审核日期',
    field: 'examineDate',
    component: 'DatePicker',
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