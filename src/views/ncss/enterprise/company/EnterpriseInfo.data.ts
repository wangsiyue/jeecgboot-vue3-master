import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '发证单位',
    align:"center",
    dataIndex: 'fissueenterprise'
   },
   {
    title: '企业类型编码',
    align:"center",
    dataIndex: 'fenterprisestatus'
   },
   {
    title: '许可证号',
    align:"center",
    dataIndex: 'flicenseno'
   },
   {
    title: '生产类型',
    align:"center",
    dataIndex: 'fproducttype'
   },
   {
    title: '法人代表证件类型',
    align:"center",
    dataIndex: 'flegalpersontype'
   },
   {
    title: '证件类型',
    align:"center",
    dataIndex: 'fconname'
   },
   {
    title: '更新时间',
    align:"center",
    dataIndex: 'fupdatetimepush'
   },
   {
    title: '注册地址',
    align:"center",
    dataIndex: 'fcontactaddress'
   },
   {
    title: '许可证颁发日期',
    align:"center",
    dataIndex: 'flicensestartdate'
   },
   {
    title: '写入时间',
    align:"center",
    dataIndex: 'finsertdate'
   },
   {
    title: '组织机构代码',
    align:"center",
    dataIndex: 'forgcode'
   },
   {
    title: '登记时间',
    align:"center",
    dataIndex: 'forderdate'
   },
   {
    title: '法人代表',
    align:"center",
    dataIndex: 'flegalperson'
   },
   {
    title: '证件号码',
    align:"center",
    dataIndex: 'flegalpersoncode'
   },
   {
    title: '行政区编码',
    align:"center",
    dataIndex: 'fregioncode'
   },
   {
    title: '公司状态',
    align:"center",
    dataIndex: 'fcompanystatus'
   },
   {
    title: '所属区域',
    align:"center",
    dataIndex: 'fregionname'
   },
   {
    title: '企业名称',
    align:"center",
    dataIndex: 'fentername'
   },
   {
    title: '射线装置生产/销售/使用状态',
    align:"center",
    dataIndex: 'fnuclideproducesaleuse'
   },
   {
    title: '企业性质',
    align:"center",
    dataIndex: 'fkind'
   },
   {
    title: '许可证到期时间',
    align:"center",
    dataIndex: 'flisenceenddate'
   },
   {
    title: '纬度秒',
    align:"center",
    dataIndex: 'latitudeSecond'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "发证单位",
      field: 'fissueenterprise',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "企业名称",
      field: 'fentername',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "企业性质",
      field: 'fkind',
      component: 'Input',
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '发证单位',
    field: 'fissueenterprise',
    component: 'Input',
  },
  {
    label: '企业类型编码',
    field: 'fenterprisestatus',
    component: 'Input',
  },
  {
    label: '许可证号',
    field: 'flicenseno',
    component: 'Input',
  },
  {
    label: '生产类型',
    field: 'fproducttype',
    component: 'Input',
  },
  {
    label: '法人代表证件类型',
    field: 'flegalpersontype',
    component: 'Input',
  },
  {
    label: '证件类型',
    field: 'fconname',
    component: 'Input',
  },
  {
    label: '放射源生产销售使用范围',
    field: 'fradioproducesaleuse',
    component: 'Input',
  },
  {
    label: '更新时间',
    field: 'fupdatetimepush',
    component: 'Input',
  },
  {
    label: '注册地址',
    field: 'fcontactaddress',
    component: 'Input',
  },
  {
    label: '许可证颁发日期',
    field: 'flicensestartdate',
    component: 'Input',
  },
  {
    label: '记录编号',
    field: 'frecordno',
    component: 'Input',
  },
  {
    label: '写入时间',
    field: 'finsertdate',
    component: 'Input',
  },
  {
    label: '企业代码',
    field: 'fentercode',
    component: 'Input',
  },
  {
    label: '组织机构代码',
    field: 'forgcode',
    component: 'Input',
  },
  {
    label: '登记时间',
    field: 'forderdate',
    component: 'Input',
  },
  {
    label: '法人代表',
    field: 'flegalperson',
    component: 'Input',
  },
  {
    label: '证件号码',
    field: 'flegalpersoncode',
    component: 'Input',
  },
  {
    label: '法人代表联系电话',
    field: 'flegalpersonphone',
    component: 'Input',
  },
  {
    label: '行政区编码',
    field: 'fregioncode',
    component: 'Input',
  },
  {
    label: '公司状态',
    field: 'fcompanystatus',
    component: 'Input',
  },
  {
    label: '所属区域',
    field: 'fregionname',
    component: 'Input',
  },
  {
    label: '企业名称',
    field: 'fentername',
    component: 'Input',
  },
  {
    label: '射线装置生产/销售/使用状态',
    field: 'fnuclideproducesaleuse',
    component: 'Input',
  },
  {
    label: '企业性质',
    field: 'fkind',
    component: 'Input',
  },
  {
    label: '非密闭放射性物质活度',
    field: 'fnonsealactive',
    component: 'Input',
  },
  {
    label: '许可证到期时间',
    field: 'flisenceenddate',
    component: 'Input',
  },
  {
    label: '二级单位信息',
    field: 'fsecondunit',
    component: 'Input',
  },
  {
    label: '经度度',
    field: 'longitude',
    component: 'InputNumber',
  },
  {
    label: '经度分',
    field: 'longitudeHour',
    component: 'InputNumber',
  },
  {
    label: '经度秒',
    field: 'longitudeSecond',
    component: 'InputNumber',
  },
  {
    label: '经度秒',
    field: 'latitude',
    component: 'InputNumber',
  },
  {
    label: '纬度分',
    field: 'latitudeHour',
    component: 'InputNumber',
  },
  {
    label: '纬度秒',
    field: 'latitudeSecond',
    component: 'InputNumber',
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