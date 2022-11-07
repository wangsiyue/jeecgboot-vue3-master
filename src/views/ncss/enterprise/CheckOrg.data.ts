import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';

export const columns: BasicColumn[] = [
   //  {
   //  title: '主键',
   //  dataIndex: 'checkId'
   // },
   {
    title: '检查编号',
    dataIndex: 'numBer'
   },
   {
    title: '检查类型',
    dataIndex: 'checktype'
   },
   {
    title: '被检查单位名称',
    dataIndex: 'checkedentname'
   },
   {
    title: '许可证号',
    dataIndex: 'licence'
   },
   {
    title: '单位地址',
    dataIndex: 'address'
   },
   {
    title: '法人',
    dataIndex: 'responsepeople'
   },
   {
    title: '法人电话',
    dataIndex: 'reptel'
   },
   {
    title: '联系人',
    dataIndex: 'contactpeople'
   },
   {
    title: '联系人电话',
    dataIndex: 'contel'
   },
   {
    title: '传真',
    dataIndex: 'fax'
   },
   {
    title: '邮箱',
    dataIndex: 'email'
   },
   {
    title: '许可证种类与范围',
    dataIndex: 'licencetype'
   },
   // {
   //  title: '辐射安全机构ID',
   //  dataIndex: 'radiationid'
   // },
   {
    title: '辐射安全机构名称',
    dataIndex: 'radiationname'
   },
   {
    title: '负责人',
    dataIndex: 'raresponse'
   },
   {
    title: '学历',
    dataIndex: 'degree'
   },
   {
    title: '专业',
    dataIndex: 'major'
   },
   {
    title: '电话',
    dataIndex: 'tel'
   },
   {
    title: '工作人员数量',
    dataIndex: 'worknumber'
   },
   {
    title: '取得相应级别培训合格证人数',
    dataIndex: 'qualifiedtrainnum'
   },
   {
    title: '在有效期内人数',
    dataIndex: 'intimenum'
   },
   {
    title: '个人剂量监测人数',
    dataIndex: 'personalnum'
   },
   {
    title: '在用放射源总数',
    dataIndex: 'useactsourtol'
   },
   {
    title: '1类数量',
    dataIndex: 'useactsour1'
   },
   {
    title: '2类数量',
    dataIndex: 'useactsour2'
   },
   {
    title: '3类数量',
    dataIndex: 'useactsour3'
   },
   {
    title: '4类数量',
    dataIndex: 'useactsour4'
   },
   {
    title: '5类数量',
    dataIndex: 'useactsour5'
   },
   {
    title: '废旧放射源3类及以上数量',
    dataIndex: 'watactsour3'
   },
   {
    title: '废旧放射源处理计划及资金落实情况',
    dataIndex: 'processsituation'
   },
   {
    title: '废旧放射源Ⅳ类及以下',
    dataIndex: 'watactsour4'
   },
   {
    title: '废旧放射源未知活度数量',
    dataIndex: 'unkonwact'
   },
   {
    title: '在用射线装置总数',
    dataIndex: 'usedevicetol'
   },
   {
    title: '在用射线装置1类',
    dataIndex: 'usedevice1'
   },
   {
    title: '在用射线装置2类',
    dataIndex: 'usedevice2'
   },
   {
    title: '在用射线装置3类',
    dataIndex: 'usedevice3'
   },
   {
    title: '辐射工作单位信息是否录入管理系统',
    dataIndex: 'redmagsys'
   },
   {
    title: '信息是否准确、完整',
    dataIndex: 'infocom'
   },
   {
    title: '单位盖章或负责人签字',
    dataIndex: 'unitressign'
   },
   {
    title: '填写日期',
    dataIndex: 'stamptime'
   },
   // {
   //  title: '创建日期',
   //  dataIndex: 'createtime'
   // },
   // {
   //  title: '是否删除',
   //  dataIndex: 'isdelete'
   // },
   {
    title: '邮编',
    dataIndex: 'post'
   },
   {
    title: '预留的和省级检查信息关联ID',
    dataIndex: 'provincecheckId'
   },
   // {
   //  title: '单位实例ID',
   //  dataIndex: 'instanceId'
   // },
   // {
   //  title: '插入用户',
   //  dataIndex: 'insertUser'
   // },
   // {
   //  title: '插入时间',
   //  dataIndex: 'insertDate'
   // },
   {
    title: '检查机构名',
    dataIndex: 'checkOfficeName'
   },
   // {
   //  title: '检查机构ID',
   //  dataIndex: 'checkOfficeId'
   // },
   {
    title: '检查时间',
    dataIndex: 'checkDate'
   },
   {
    title: '四类处理计划及资金落实情况',
    dataIndex: 'fourOldRadDisp'
   },
   // {
   //  title: '老数据处理字段',
   //  dataIndex: 'redmagsysOther'
   // },
   // {
   //  title: '老数据处理字段',
   //  dataIndex: 'infocomOther'
   // },
   // {
   //  title: '老数据标记',
   //  dataIndex: 'oldMark'
   // },
   // {
   //  title: 'MOBILE_ALLOW_SYSN',
   //  dataIndex: 'mobileAllowSysn'
   // },
   // {
   //  title: 'MOBILE_UPLOAD_SIGN',
   //  dataIndex: 'mobileUploadSign'
   // },
   // {
   //  title: 'MOBILE_UPLOAD_TIME',
   //  dataIndex: 'mobileUploadTime'
   // },
   // {
   //  title: 'MOBILE_DATA_STATUS',
   //  dataIndex: 'mobileDataStatus'
   // },
   // {
   //  title: 'UPDATETIME',
   //  dataIndex: 'updatetime'
   // },
   // {
   //  title: 'IS_MOBILE',
   //  dataIndex: 'isMobile'
   // },
   // {
   //  title: 'VERSION',
   //  dataIndex: 'version'
   // },
   // {
   //  title: 'companyId',
   //  dataIndex: 'companyId'
   // },
];

export const searchFormSchema: FormSchema[] = [
 {
    label: '主键',
    field: 'checkId',
    component: 'Input'
  },
 {
    label: '检查编号',
    field: 'numBer',
    component: 'Input'
  },
];

export const formSchema: FormSchema[] = [
  // TODO 主键隐藏字段，目前写死为ID
  {label: '', field: 'id', component: 'Input', show: false},
  // {
  //   label: '主键',
  //   field: 'checkId',
  //   component: 'Input',
  // },
  {
    label: '检查编号',
    field: 'numBer',
    component: 'Input',
  },
  {
    label: '检查类型',
    field: 'checktype',
    component: 'Input',
  },
  {
    label: '被检查单位名称',
    field: 'checkedentname',
    component: 'Input',
  },
  {
    label: '许可证号',
    field: 'licence',
    component: 'Input',
  },
  {
    label: '单位地址',
    field: 'address',
    component: 'Input',
  },
  {
    label: '法人',
    field: 'responsepeople',
    component: 'Input',
  },
  {
    label: '法人电话',
    field: 'reptel',
    component: 'Input',
  },
  {
    label: '联系人',
    field: 'contactpeople',
    component: 'Input',
  },
  {
    label: '联系人电话',
    field: 'contel',
    component: 'Input',
  },
  {
    label: '传真',
    field: 'fax',
    component: 'Input',
  },
  {
    label: '邮箱',
    field: 'email',
    component: 'Input',
  },
  {
    label: '许可证种类与范围',
    field: 'licencetype',
    component: 'Input',
  },
  {
    label: '辐射安全机构ID',
    field: 'radiationid',
    component: 'Input',
  },
  {
    label: '辐射安全机构名称',
    field: 'radiationname',
    component: 'Input',
  },
  {
    label: '负责人',
    field: 'raresponse',
    component: 'Input',
  },
  {
    label: '学历',
    field: 'degree',
    component: 'Input',
  },
  {
    label: '专业',
    field: 'major',
    component: 'Input',
  },
  {
    label: '电话',
    field: 'tel',
    component: 'Input',
  },
  {
    label: '工作人员数量',
    field: 'worknumber',
    component: 'Input',
  },
  {
    label: '取得相应级别培训合格证人数',
    field: 'qualifiedtrainnum',
    component: 'Input',
  },
  {
    label: '在有效期内人数',
    field: 'intimenum',
    component: 'Input',
  },
  {
    label: '个人剂量监测人数',
    field: 'personalnum',
    component: 'Input',
  },
  {
    label: '在用放射源总数',
    field: 'useactsourtol',
    component: 'Input',
  },
  {
    label: '1类数量',
    field: 'useactsour1',
    component: 'Input',
  },
  {
    label: '2类数量',
    field: 'useactsour2',
    component: 'Input',
  },
  {
    label: '3类数量',
    field: 'useactsour3',
    component: 'Input',
  },
  {
    label: '4类数量',
    field: 'useactsour4',
    component: 'Input',
  },
  {
    label: '5类数量',
    field: 'useactsour5',
    component: 'Input',
  },
  {
    label: '废旧放射源3类及以上数量',
    field: 'watactsour3',
    component: 'Input',
  },
  {
    label: '废旧放射源处理计划及资金落实情况',
    field: 'processsituation',
    component: 'Input',
  },
  {
    label: '废旧放射源Ⅳ类及以下',
    field: 'watactsour4',
    component: 'Input',
  },
  {
    label: '废旧放射源未知活度数量',
    field: 'unkonwact',
    component: 'Input',
  },
  {
    label: '在用射线装置总数',
    field: 'usedevicetol',
    component: 'Input',
  },
  {
    label: '在用射线装置1类',
    field: 'usedevice1',
    component: 'Input',
  },
  {
    label: '在用射线装置2类',
    field: 'usedevice2',
    component: 'Input',
  },
  {
    label: '在用射线装置3类',
    field: 'usedevice3',
    component: 'Input',
  },
  {
    label: '辐射工作单位信息是否录入管理系统',
    field: 'redmagsys',
    component: 'Input',
  },
  {
    label: '信息是否准确、完整',
    field: 'infocom',
    component: 'Input',
  },
  {
    label: '单位盖章或负责人签字',
    field: 'unitressign',
    component: 'Input',
  },
  {
    label: '填写日期',
    field: 'stamptime',
    component: 'DatePicker'
  },
  // {
  //   label: '创建日期',
  //   field: 'createtime',
  //   component: 'Input',
  // },
  // {
  //   label: '是否删除',
  //   field: 'isdelete',
  //   component: 'Input',
  // },
  {
    label: '邮编',
    field: 'post',
    component: 'Input',
  },
  {
    label: '预留的和省级检查信息关联ID',
    field: 'provincecheckId',
    component: 'Input',
  },
  // {
  //   label: '单位实例ID',
  //   field: 'instanceId',
  //   component: 'Input',
  // },
  // {
  //   label: '插入用户',
  //   field: 'insertUser',
  //   component: 'Input',
  // },
  // {
  //   label: '插入时间',
  //   field: 'insertDate',
  //   component: 'DatePicker'
  // },
  {
    label: '检查机构名',
    field: 'checkOfficeName',
    component: 'Input',
  },
  {
    label: '检查机构ID',
    field: 'checkOfficeId',
    component: 'Input',
  },
  {
    label: '检查时间',
    field: 'checkDate',
    component: 'DatePicker'
  },
  {
    label: '四类处理计划及资金落实情况',
    field: 'fourOldRadDisp',
    component: 'Input',
  },
  // {
  //   label: '老数据处理字段',
  //   field: 'redmagsysOther',
  //   component: 'Input',
  // },
  // {
  //   label: '老数据处理字段',
  //   field: 'infocomOther',
  //   component: 'Input',
  // },
  // {
  //   label: '老数据标记',
  //   field: 'oldMark',
  //   component: 'Input',
  // },
  // {
  //   label: 'MOBILE_ALLOW_SYSN',
  //   field: 'mobileAllowSysn',
  //   component: 'Input',
  // },
  // {
  //   label: 'MOBILE_UPLOAD_SIGN',
  //   field: 'mobileUploadSign',
  //   component: 'Input',
  // },
  // {
  //   label: 'MOBILE_UPLOAD_TIME',
  //   field: 'mobileUploadTime',
  //   component: 'DatePicker'
  // },
  // {
  //   label: 'MOBILE_DATA_STATUS',
  //   field: 'mobileDataStatus',
  //   component: 'Input',
  // },
  // {
  //   label: 'UPDATETIME',
  //   field: 'updatetime',
  //   component: 'DatePicker'
  // },
  // {
  //   label: 'IS_MOBILE',
  //   field: 'isMobile',
  //   component: 'Input',
  // },
  // {
  //   label: 'VERSION',
  //   field: 'version',
  //   component: 'Input',
  // },
  // {
  //   label: 'companyId',
  //   field: 'companyId',
  //   component: 'Input',
  // },
];
