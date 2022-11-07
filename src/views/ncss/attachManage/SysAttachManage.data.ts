import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';

export const columns: BasicColumn[] = [
    {
    title: 'fid',
    dataIndex: 'fid'
   },
   {
    title: '文件名',
    dataIndex: 'fileName'
   },
   {
    title: '上传日期',
    dataIndex: 'upDate'
   },
   {
    title: '文件类型',
    dataIndex: 'fileType'
   },
   {
    title: '上传单位名称',
    dataIndex: 'upCompany'
   },
   {
    title: '上传单位实例ID',
    dataIndex: 'upCompanyInstanceId'
   },
   {
    title: '年份',
    dataIndex: 'fileYear'
   },
   {
    title: '文件地址',
    dataIndex: 'fileUrl'
   },
   {
    title: '上传单位许可证',
    dataIndex: 'upCompanyLicenseNo'
   },
   {
    title: 'INSERT_USER',
    dataIndex: 'insertUser'
   },
   {
    title: 'EXT_1',
    dataIndex: 'ext1'
   },
   {
    title: 'EXT_2',
    dataIndex: 'ext2'
   },
   {
    title: 'EXT_3',
    dataIndex: 'ext3'
   },
   {
    title: 'ATTACH_TYPE_CODE',
    dataIndex: 'attachTypeCode'
   },
   {
    title: 'OLD_MARK',
    dataIndex: 'oldMark'
   },
];

export const searchFormSchema: FormSchema[] = [
 {
    label: 'fid',
    field: 'fid',
    component: 'Input'
  },
 {
    label: '文件名',
    field: 'fileName',
    component: 'Input'
  },
];

export const formSchema: FormSchema[] = [
  // TODO 主键隐藏字段，目前写死为ID
  {label: '', field: 'id', component: 'Input', show: false},
  {
    label: 'fid',
    field: 'fid',
    component: 'Input',
  },
  {
    label: '文件名',
    field: 'fileName',
    component: 'Input',
  },
  {
    label: '上传日期',
    field: 'upDate',
    component: 'DatePicker'
  },
  {
    label: '文件类型',
    field: 'fileType',
    component: 'Input',
  },
  {
    label: '上传单位名称',
    field: 'upCompany',
    component: 'Input',
  },
  {
    label: '上传单位实例ID',
    field: 'upCompanyInstanceId',
    component: 'Input',
  },
  {
    label: '年份',
    field: 'fileYear',
    component: 'Input',
  },
  {
    label: '文件地址',
    field: 'fileUrl',
    component: 'Input',
  },
  {
    label: '上传单位许可证',
    field: 'upCompanyLicenseNo',
    component: 'Input',
  },
  {
    label: 'INSERT_USER',
    field: 'insertUser',
    component: 'Input',
  },
  {
    label: 'EXT_1',
    field: 'ext1',
    component: 'Input',
  },
  {
    label: 'EXT_2',
    field: 'ext2',
    component: 'Input',
  },
  {
    label: 'EXT_3',
    field: 'ext3',
    component: 'Input',
  },
  {
    label: 'ATTACH_TYPE_CODE',
    field: 'attachTypeCode',
    component: 'Input',
  },
  {
    label: 'OLD_MARK',
    field: 'oldMark',
    component: 'Input',
  },
];
