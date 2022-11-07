import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';

export const columns: BasicColumn[] = [
   //  {
   //  title: '自动编号',
   //  dataIndex: 'accidentId'
   // },
   // {
   //  title: '业务id',
   //  dataIndex: 'ywid'
   // },
   {
    title: '事故编号',
    dataIndex: 'accidentNo'
   },
   {
    title: '事故单位名称',
    dataIndex: 'name'
   },
   {
    title: '事故单位地址',
    dataIndex: 'registAddr'
   },
   {
    title: '是否持有许可证',
    dataIndex: 'licenseSituation'
   },
   {
    title: '许可证号',
    dataIndex: 'licenseNo'
   },
   {
    title: '事故时间',
    dataIndex: 'accidentDate'
   },
   {
    title: '事故地点',
    dataIndex: 'accidentAddr'
   },
   {
    title: '事故级别',
    dataIndex: 'accidentLevel'
   },
   {
    title: '经济损失',
    dataIndex: 'economicLoss'
   },
   {
    title: '工作日损失',
    dataIndex: 'weekdayLoss'
   },
   {
    title: '是否结案',
    dataIndex: 'closedStatus'
   },
   {
    title: '放射性同位素应用领域',
    dataIndex: 'radioisotopeField'
   },
   {
    title: '射线装置应用领域',
    dataIndex: 'radialField'
   },
   {
    title: '人为因素',
    dataIndex: 'artificialCause'
   },
   {
    title: '技术因素',
    dataIndex: 'skillCause'
   },
   {
    title: '其他',
    dataIndex: 'otherCause'
   },
   {
    title: '超剂量受照工作人员人数',
    dataIndex: 'shineWorkerNo'
   },
   {
    title: '超剂量受照公众人员人数',
    dataIndex: 'shinePublicNo'
   },
   {
    title: '超剂量受照人数合计',
    dataIndex: 'shineSumNo'
   },
   {
    title: '急性放射病活肢体残疾人数',
    dataIndex: 'diseaseDeformityNo'
   },
   {
    title: '死亡人数',
    dataIndex: 'doomNo'
   },
   {
    title: '是否人员超剂量照射',
    dataIndex: 'beoverIrradiated'
   },
   {
    title: '放射性污染面积',
    dataIndex: 'polluteArea'
   },
   {
    title: '放射性污染最大比活度',
    dataIndex: 'maxActivity'
   },
   {
    title: '总活度',
    dataIndex: 'sumActivity'
   },
   {
    title: '是否放射源污染',
    dataIndex: 'bePollute'
   },
   {
    title: '放射性同位素事故类型',
    dataIndex: 'accidentRadioisotope'
   },
   {
    title: '事故经过原因及处理',
    dataIndex: 'accidentPass'
   },
   {
    title: '事故后果及教训',
    dataIndex: 'accidentMoral'
   },
   {
    title: '备注',
    dataIndex: 'remark'
   },
   {
    title: '填报人',
    dataIndex: 'writeName'
   },
   {
    title: '填报日期',
    dataIndex: 'writeDate'
   },
   {
    title: '审核人',
    dataIndex: 'examineName'
   },
   {
    title: '审核日期',
    dataIndex: 'examineDate'
   },
];

export const searchFormSchema: FormSchema[] = [
 {
    label: '事故编号',
    field: 'accidentNo',
    component: 'Input'
  },
 {
    label: '事故单位名称',
    field: 'name',
    component: 'Input'
  },
{
    label: '事故级别',
    field: 'accidentLevel',
  component: 'JDictSelectTag',
  componentProps:{
    dictCode:"tt_zd_commoninfo,conname,concode,contype='fssg_jb'",
  }
},
{
    label: '事故时间',
    field: 'accidentDate',
    component: 'DatePicker'
},
{
    label: '是否结案',
    field: 'closedStatus',
    component: 'JDictSelectTag',
    componentProps:{
      dictCode:"tt_zd_commoninfo,conname,concode,contype='boolean_dict'",
    }
},
{
    label: '事故地点',
    field: 'accidentAddr',
    component: 'Input'
},
];

export const formSchema: FormSchema[] = [
  // TODO 主键隐藏字段，目前写死为ID
  {label: '', field: 'id', component: 'Input', show: false},
  // {
  //   label: '自动编号',
  //   field: 'accidentId',
  //   component: 'Input',
  // },
  // {
  //   label: '业务id',
  //   field: 'ywid',
  //   component: 'Input',
  // },
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
    label: '事故单位地址',
    field: 'registAddr',
    component: 'Input',
  },
  {
    label: '是否持有许可证',
    field: 'licenseSituation',
    component: 'InputNumber',
  },
  {
    label: '许可证号',
    field: 'licenseNo',
    component: 'Input',
  },
  {
    label: '事故时间',
    field: 'accidentDate',
    component: 'DatePicker'
  },
  {
    label: '事故地点',
    field: 'accidentAddr',
    component: 'Input',
  },
  {
    label: '事故级别',
    field: 'accidentLevel',
    component: 'Input',
  },
  {
    label: '经济损失',
    field: 'economicLoss',
    component: 'InputNumber',
  },
  {
    label: '工作日损失',
    field: 'weekdayLoss',
    component: 'Input',
  },
  {
    label: '是否结案',
    field: 'closedStatus',
    component: 'InputNumber',
  },
  {
    label: '放射性同位素应用领域',
    field: 'radioisotopeField',
    component: 'Input',
  },
  {
    label: '射线装置应用领域',
    field: 'radialField',
    component: 'Input',
  },
  {
    label: '人为因素',
    field: 'artificialCause',
    component: 'Input',
  },
  {
    label: '技术因素',
    field: 'skillCause',
    component: 'Input',
  },
  {
    label: '其他',
    field: 'otherCause',
    component: 'Input',
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
    label: '是否人员超剂量照射',
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
    label: '是否放射源污染',
    field: 'bePollute',
    component: 'InputNumber',
  },
  {
    label: '放射性同位素事故类型',
    field: 'accidentRadioisotope',
    component: 'Input',
  },
  {
    label: '事故经过原因及处理',
    field: 'accidentPass',
    component: 'Input',
  },
  {
    label: '事故后果及教训',
    field: 'accidentMoral',
    component: 'Input',
  },
  {
    label: '备注',
    field: 'remark',
    component: 'Input',
  },
  {
    label: '填报人',
    field: 'writeName',
    component: 'Input',
  },
  {
    label: '填报日期',
    field: 'writeDate',
    component: 'DatePicker'
  },
  {
    label: '审核人',
    field: 'examineName',
    component: 'Input',
  },
  {
    label: '审核日期',
    field: 'examineDate',
    component: 'DatePicker'
  },
];
