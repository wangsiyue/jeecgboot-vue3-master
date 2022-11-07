import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '受理状态',
    align:"center",
    dataIndex: 'responseStatus'
   },
   {
    title: '送贮单位名称',
    align:"center",
    dataIndex: 'deliveryCompanyName'
   },
   {
    title: '送贮单位许可证',
    align:"center",
    dataIndex: 'deliveryCompanyLicenseno'
   },
   {
    title: '送贮单位经办人',
    align:"center",
    dataIndex: 'deliveryCompanyDoperson'
   },
   {
    title: '接受单位名称',
    align:"center",
    dataIndex: 'receiveCompanyName'
   },
   {
    title: '接收单位许可证',
    align:"center",
    dataIndex: 'receivecompanyLicenseno'
   },
   {
    title: '转移理由',
    align:"center",
    dataIndex: 'shiftReason'
   },
   {
    title: '新增时间',
    align:"center",
    dataIndex: 'insertDate',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '交回时间',
    align:"center",
    dataIndex: 'fetchDate',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '接受单位是否备案',
    align:"center",
    dataIndex: 'receivecompanyBeRecord'
   },
   {
    title: '撤销状态',
    align:"center",
    dataIndex: 'revokeDeclare'
   },
   {
    title: '送交单位备案时间',
    align:"center",
    dataIndex: 'outDate'
   },
   {
    title: '接受单位备案时间',
    align:"center",
    dataIndex: 'inDate'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "受理状态",
      field: 'responseStatus',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "送贮单位名称",
      field: 'deliveryCompanyName',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "接受单位名称",
      field: 'receiveCompanyName',
      component: 'Input',
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '受理编号',
    field: 'responseNo',
    component: 'Input',
  },
  {
    label: '批准文号',
    field: 'passNo',
    component: 'Input',
  },
  {
    label: '受理状态',
    field: 'responseStatus',
    component: 'InputNumber',
  },
  {
    label: '送贮单位名称',
    field: 'deliveryCompanyName',
    component: 'Input',
  },
  {
    label: '送贮单位许可证',
    field: 'deliveryCompanyLicenseno',
    component: 'Input',
  },
  {
    label: '送贮单位通讯地址',
    field: 'deliveryCompanyContactaddr',
    component: 'Input',
  },
  {
    label: '送贮单位经办人',
    field: 'deliveryCompanyDoperson',
    component: 'Input',
  },
  {
    label: '送贮单位电话传真',
    field: 'deliveryCompanyPhoneorfax',
    component: 'Input',
  },
  {
    label: '送贮单位邮编',
    field: 'deliveryCompanyPost',
    component: 'Input',
  },
  {
    label: '接受单位名称',
    field: 'receiveCompanyName',
    component: 'Input',
  },
  {
    label: '接收单位许可证',
    field: 'receivecompanyLicenseno',
    component: 'Input',
  },
  {
    label: '接收单位通讯地址',
    field: 'receivecompanyContactaddr',
    component: 'Input',
  },
  {
    label: '接受单位经办人',
    field: 'receivecompanyDoperson',
    component: 'Input',
  },
  {
    label: '接受单位电话传真',
    field: 'receivecompanyPhoneorfax',
    component: 'Input',
  },
  {
    label: '接受单位邮编',
    field: 'receivecompanyPost',
    component: 'Input',
  },
  {
    label: '附件',
    field: 'attachment',
    component: 'Input',
  },
  {
    label: '附件其他',
    field: 'attachmentOthers',
    component: 'Input',
  },
  {
    label: '转移理由',
    field: 'shiftReason',
    component: 'Input',
  },
  {
    label: '新增人',
    field: 'insertUser',
    component: 'Input',
  },
  {
    label: '新增时间',
    field: 'insertDate',
    component: 'DatePicker',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入新增时间!'},
          ];
     },
  },
  {
    label: '修改人',
    field: 'modifyUser',
    component: 'Input',
  },
  {
    label: '修改时间',
    field: 'modifyDate',
    component: 'DatePicker',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入修改时间!'},
          ];
     },
  },
  {
    label: '交回时间',
    field: 'fetchDate',
    component: 'DatePicker',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入交回时间!'},
          ];
     },
  },
  {
    label: '接受单位是否备案',
    field: 'receivecompanyBeRecord',
    component: 'Input',
  },
  {
    label: '退回理由',
    field: 'retreatReason',
    component: 'Input',
  },
  {
    label: '撤销状态',
    field: 'revokeDeclare',
    component: 'Input',
  },
  {
    label: '撤销理由',
    field: 'revokeReason',
    component: 'Input',
  },
  {
    label: '送交单位唯一id',
    field: 'deliveryCompanyInstanceid',
    component: 'Input',
  },
  {
    label: '接受单位唯一id',
    field: 'receiveCompanyInstanceid',
    component: 'Input',
  },
  {
    label: '送贮单位区域编码',
    field: 'regionCode1',
    component: 'Input',
  },
  {
    label: '接受单位区域编码',
    field: 'regionCode2',
    component: 'Input',
  },
  {
    label: '送交单位备案时间',
    field: 'outDate',
    component: 'Input',
  },
  {
    label: '接受单位备案时间',
    field: 'inDate',
    component: 'Input',
  },
  {
    label: '送交单位备案人',
    field: 'outPerson',
    component: 'Input',
  },
  {
    label: '接受单位备案人',
    field: 'inPerson',
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