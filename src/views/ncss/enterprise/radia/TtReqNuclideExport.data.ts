import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '批准文号',
    align:"center",
    dataIndex: 'passNo'
   },
   {
    title: '出口单位名称',
    align:"center",
    dataIndex: 'exportCompanyName'
   },
   {
    title: '出口单位许可证',
    align:"center",
    dataIndex: 'exportcompanyLicenseno'
   },
   {
    title: '出口国家',
    align:"center",
    dataIndex: 'nuclideExportCountry'
   },
   {
    title: '产源单位名称',
    align:"center",
    dataIndex: 'nuclideManufacture'
   },
   {
    title: '接收单位名称',
    align:"center",
    dataIndex: 'nuclideReceiveCompany'
   },
   {
    title: '出口理由',
    align:"center",
    dataIndex: 'exportReason'
   },
   {
    title: '受理状态',
    align:"center",
    dataIndex: 'responseStatus'
   },
   {
    title: '出口委托单位名称',
    align:"center",
    dataIndex: 'entrustCompanyName'
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
    title: '使用国家',
    align:"center",
    dataIndex: 'nuclideReceiveCountry'
   },
   {
    title: '审批是否通过 1通过 0不通过',
    align:"center",
    dataIndex: 'bePass'
   },
   {
    title: '审批时间',
    align:"center",
    dataIndex: 'doDate',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "批准文号",
      field: 'passNo',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "出口单位名称",
      field: 'exportCompanyName',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "产源单位名称",
      field: 'nuclideManufacture',
      component: 'Input',
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '放射源出口审批主键',
    field: 'exportId',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入放射源出口审批主键!'},
          ];
     },
  },
  {
    label: '申请编号',
    field: 'requestNo',
    component: 'Input',
  },
  {
    label: '审理编号',
    field: 'responseNo',
    component: 'Input',
  },
  {
    label: '批准文号',
    field: 'passNo',
    component: 'Input',
  },
  {
    label: '出口单位名称',
    field: 'exportCompanyName',
    component: 'Input',
  },
  {
    label: '出口单位许可证',
    field: 'exportcompanyLicenseno',
    component: 'Input',
  },
  {
    label: '出口单位通讯地址',
    field: 'exportcompanyContactaddr',
    component: 'Input',
  },
  {
    label: '出口单位经办人',
    field: 'exportcompanyDoperson',
    component: 'Input',
  },
  {
    label: '出口单位电话传真',
    field: 'exportcompanyPhoneorfax',
    component: 'Input',
  },
  {
    label: '出口单位邮编',
    field: 'exportcompanyPost',
    component: 'Input',
  },
  {
    label: '出口国家',
    field: 'nuclideExportCountry',
    component: 'Input',
  },
  {
    label: '产源国家',
    field: 'nuclideProduceCountry',
    component: 'Input',
  },
  {
    label: '产源单位名称',
    field: 'nuclideManufacture',
    component: 'Input',
  },
  {
    label: '接收单位名称',
    field: 'nuclideReceiveCompany',
    component: 'Input',
  },
  {
    label: '出口理由',
    field: 'exportReason',
    component: 'InputNumber',
  },
  {
    label: '出口理由其他',
    field: 'exportReasonOthers',
    component: 'Input',
  },
  {
    label: '放射源是否返回国内',
    field: 'beCallback',
    component: 'InputNumber',
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
    label: '受理状态',
    field: 'responseStatus',
    component: 'InputNumber',
  },
  {
    label: '出口委托单位名称',
    field: 'entrustCompanyName',
    component: 'Input',
  },
  {
    label: '出口委托单位许可证',
    field: 'entrustCompanyLicenseno',
    component: 'Input',
  },
  {
    label: '出口委托单位通讯地址',
    field: 'entrustCompanyContactaddr',
    component: 'Input',
  },
  {
    label: '出口未委托单位邮编',
    field: 'entrustCompanyPost',
    component: 'Input',
  },
  {
    label: '出口委托单位经办人',
    field: 'entrustCompanyDoperson',
    component: 'Input',
  },
  {
    label: '出口委托单位电话传真',
    field: 'entrustCompanyPhoneorfax',
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
  },
  {
    label: '使用国家',
    field: 'nuclideReceiveCountry',
    component: 'Input',
  },
  {
    label: '审批是否通过 1通过 0不通过',
    field: 'bePass',
    component: 'InputNumber',
  },
  {
    label: '审批不通过理由',
    field: 'notPassReason',
    component: 'Input',
  },
  {
    label: '审批人',
    field: 'doPerson',
    component: 'Input',
  },
  {
    label: '审批时间',
    field: 'doDate',
    component: 'DatePicker',
  },
  {
    label: '需求来源',
    field: 'requestSource',
    component: 'Input',
  },
  {
    label: '需求来源ID',
    field: 'requestSourceId',
    component: 'Input',
  },
  {
    label: '退回理由',
    field: 'retreatReason',
    component: 'Input',
  },
  {
    label: '用户ID',
    field: 'userId',
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
    label: '委托单位INSTANCEID',
    field: 'entrustCompanyInstanceid',
    component: 'Input',
  },
  {
    label: '出口单位INSTANCEID',
    field: 'exportCompanyInstanceid',
    component: 'Input',
  },
  {
    label: '业务ID',
    field: 'ywid',
    component: 'Input',
  },
  {
    label: '出口单位是否备案',
    field: 'exportIsRecord',
    component: 'Input',
  },
  {
    label: '出口单位区域编码',
    field: 'regionCode1',
    component: 'Input',
  },
  {
    label: '委托单位区域编码',
    field: 'regionCode2',
    component: 'Input',
  },
  {
    label: '老数据标志',
    field: 'oldMark',
    component: 'Input',
  },
  {
    label: 'IS_DELETE',
    field: 'isDelete',
    component: 'InputNumber',
  },
  {
    label: 'UPDATETIME',
    field: 'updatetime',
    component: 'DatePicker',
  },
  {
    label: 'DISAGREE_REASON',
    field: 'disagreeReason',
    component: 'Input',
  },
  {
    label: 'PERMISSION_CODE_1',
    field: 'permissionCode1',
    component: 'Input',
  },
  {
    label: 'PERMISSION_CODE_2',
    field: 'permissionCode2',
    component: 'Input',
  },
  {
    label: 'receiveDate',
    field: 'receiveDate',
    component: 'DatePicker',
  },
  {
    label: 'acceptDate',
    field: 'acceptDate',
    component: 'DatePicker',
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