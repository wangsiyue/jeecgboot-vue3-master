import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';

export const columns: BasicColumn[] = [
    {
    title: '许可证申请单位主键',
    dataIndex: 'companyId'
   },
   {
    title: 'PERMISSION_CODE_1',
    dataIndex: 'permissionCode1'
   },
   {
    title: '申请编号',
    dataIndex: 'requestNo'
   },
   {
    title: '受理编号',
    dataIndex: 'responseNo'
   },
   {
    title: '批准文号',
    dataIndex: 'passNo'
   },
   {
    title: '单位名称',
    dataIndex: 'name'
   },
   {
    title: '所属省份',
    dataIndex: 'province'
   },
   {
    title: '所属市区',
    dataIndex: 'city'
   },
   {
    title: '所属区县',
    dataIndex: 'district'
   },
   {
    title: 'REGIST_PROVINCE',
    dataIndex: 'registProvince'
   },
   {
    title: 'REGIST_CITY',
    dataIndex: 'registCity'
   },
   {
    title: 'REGIST_DISTRICT',
    dataIndex: 'registDistrict'
   },
   {
    title: 'CONTACT_ADDR_DETAIL',
    dataIndex: 'contactAddrDetail'
   },
   {
    title: 'REGIST_ADDR',
    dataIndex: 'registAddr'
   },
   {
    title: 'REGIST_ADDR_POST',
    dataIndex: 'registAddrPost'
   },
   {
    title: '通讯地址',
    dataIndex: 'contactAddr'
   },
   {
    title: '通讯地址邮编',
    dataIndex: 'contactAddrPost'
   },
   {
    title: '联系人',
    dataIndex: 'contactPerson'
   },
   {
    title: '联系电话',
    dataIndex: 'contactPhone'
   },
   {
    title: '经度度',
    dataIndex: 'longitude'
   },
   {
    title: '经度分',
    dataIndex: 'longitudeHour'
   },
   {
    title: '经度秒',
    dataIndex: 'longitudeSecond'
   },
   {
    title: '经度秒',
    dataIndex: 'latitude'
   },
   {
    title: '纬度分',
    dataIndex: 'latitudeHour'
   },
   {
    title: '纬度秒',
    dataIndex: 'latitudeSecond'
   },
   {
    title: '法定代表人',
    dataIndex: 'legalPerson'
   },
   {
    title: '法人证件类型',
    dataIndex: 'legalPersonType'
   },
   {
    title: '法人证件号码',
    dataIndex: 'legalPersonId'
   },
   {
    title: '法人联系电话',
    dataIndex: 'legalPersonPhone'
   },
   {
    title: '单位性质',
    dataIndex: 'kind'
   },
   {
    title: '行业分类',
    dataIndex: 'industryType'
   },
   {
    title: '放射源生产活动种类',
    dataIndex: 'nuclideProduceActive'
   },
   {
    title: '放射源销售活动种类',
    dataIndex: 'nuclideSaleActive'
   },
   {
    title: '放射源使用活动种类',
    dataIndex: 'nuclideUseActive'
   },
   {
    title: '射线装置生产活动种类',
    dataIndex: 'radialProduceActive'
   },
   {
    title: '射线装置销售活动种类',
    dataIndex: 'radialSaleActive'
   },
   {
    title: '射线装置使用活动种类',
    dataIndex: 'radialUseActive'
   },
   {
    title: '射线装置使用(含建造)I类',
    dataIndex: 'radialSaleAndProduce'
   },
   {
    title: '非密封放射物质活动种类',
    dataIndex: 'nonSealActive'
   },
   {
    title: '非密封放射物质活动场所',
    dataIndex: 'nonSealType'
   },
   {
    title: '使用(含收贮)',
    dataIndex: 'useAndCollection'
   },
   {
    title: '辐射管理机构名称',
    dataIndex: 'radialOrgname'
   },
   {
    title: '辐射管理机构联系人',
    dataIndex: 'radialOrgcontactPerson'
   },
   {
    title: '辐射管理机构负责人电话',
    dataIndex: 'radialOrgcontactPhone'
   },
   {
    title: '辐射管理机构联系人手机',
    dataIndex: 'radialOrgcontactMobile'
   },
   {
    title: '辐射管理机构传真',
    dataIndex: 'radialOrgcontactFax'
   },
   {
    title: '辐射管理机构联系人邮件',
    dataIndex: 'radialOrgcontactEmail'
   },
   {
    title: '组织机构代码',
    dataIndex: 'organizationCode'
   },
   {
    title: '备注',
    dataIndex: 'remark'
   },
   {
    title: '受理状态',
    dataIndex: 'responseStatus'
   },
   {
    title: 'PERMISSION',
    dataIndex: 'permission'
   },
   {
    title: 'IS_DELETE',
    dataIndex: 'isDelete'
   },
   {
    title: '新增人',
    dataIndex: 'insertUser'
   },
   {
    title: '新增时间',
    dataIndex: 'insertDate'
   },
   {
    title: '修改人',
    dataIndex: 'modifyUser'
   },
   {
    title: '修改时间',
    dataIndex: 'modifyDate'
   },
   {
    title: '许可证号',
    dataIndex: 'licenseNo'
   },
   {
    title: '发证日期',
    dataIndex: 'licenseStartDate'
   },
   {
    title: '有效期至',
    dataIndex: 'licenseEndDate'
   },
   {
    title: '许可证颁发条件',
    dataIndex: 'licenseCondition'
   },
   {
    title: '许可证审批机关',
    dataIndex: 'licenseIssueOrgan'
   },
   {
    title: '审批状态',
    dataIndex: 'status'
   },
   {
    title: '是否通过  0：否  1：是',
    dataIndex: 'bePass'
   },
   {
    title: '不通过理由',
    dataIndex: 'nopassReason'
   },
   {
    title: 'REQUEST_SOURCE',
    dataIndex: 'requestSource'
   },
   {
    title: 'REQUEST_SOURCE_ID',
    dataIndex: 'requestSourceId'
   },
   {
    title: '是否重新申领  0：否  1：是',
    dataIndex: 'isApply'
   },
   {
    title: 'MODULE_NUMBER',
    dataIndex: 'moduleNumber'
   },
   {
    title: '单位id',
    dataIndex: 'instanceid'
   },
   {
    title: 'LICENSE_TYPE',
    dataIndex: 'licenseType'
   },
   {
    title: '单位类型',
    dataIndex: 'companyType'
   },
   {
    title: '发证机关',
    dataIndex: 'licenceIssuingAuthority'
   },
   {
    title: '办理人',
    dataIndex: 'doPerson'
   },
   {
    title: '办理时间',
    dataIndex: 'doDate'
   },
   {
    title: 'REQUEST_TIME',
    dataIndex: 'requestTime'
   },
   {
    title: 'MARK',
    dataIndex: 'mark'
   },
   {
    title: '业务id',
    dataIndex: 'ywid'
   },
   {
    title: 'NUCLIDE_PRODUCE_SALE_USE',
    dataIndex: 'nuclideProduceSaleUse'
   },
   {
    title: 'RADIAL_PRODUCE_SALE_USE',
    dataIndex: 'radialProduceSaleUse'
   },
   {
    title: '注册地址最后一级code',
    dataIndex: 'regionCode1'
   },
   {
    title: '通讯地址最后一级code',
    dataIndex: 'regionCode2'
   },
   {
    title: '省级编码',
    dataIndex: 'provinceCode'
   },
   {
    title: '市级编码',
    dataIndex: 'cityCode'
   },
   {
    title: '区级编码',
    dataIndex: 'districtCode'
   },
   {
    title: '区域编码',
    dataIndex: 'areaCode'
   },
   {
    title: '区域名称',
    dataIndex: 'areaName'
   },
   {
    title: 'REGIST_PROVINCE_CODE',
    dataIndex: 'registProvinceCode'
   },
   {
    title: 'REGIST_CITY_CODE',
    dataIndex: 'registCityCode'
   },
   {
    title: 'REGIST_DISTRICT_CODE',
    dataIndex: 'registDistrictCode'
   },
   {
    title: 'PROVINCE_CODE2',
    dataIndex: 'provinceCode2'
   },
   {
    title: 'CITY_CODE2',
    dataIndex: 'cityCode2'
   },
   {
    title: 'DISTRICT_CODE2',
    dataIndex: 'districtCode2'
   },
   {
    title: 'AREA_CODE2',
    dataIndex: 'areaCode2'
   },
   {
    title: 'AREA_NAME2',
    dataIndex: 'areaName2'
   },
   {
    title: 'REGIST_AREA_CODE',
    dataIndex: 'registAreaCode'
   },
   {
    title: 'REGIST_AREA_NAME',
    dataIndex: 'registAreaName'
   },
   {
    title: '受理时间',
    dataIndex: 'acceptDate'
   },
   {
    title: '受理人',
    dataIndex: 'acceptPerson'
   },
   {
    title: '提交时间',
    dataIndex: 'submitDate'
   },
   {
    title: '提交人',
    dataIndex: 'submitUser'
   },
   {
    title: 'UNIFY_SOCIETY_CODE',
    dataIndex: 'unifySocietyCode'
   },
   {
    title: 'OLD_MARK',
    dataIndex: 'oldMark'
   },
   {
    title: 'INDUSTRY_OTHER',
    dataIndex: 'industryOther'
   },
   {
    title: 'KIND_OTHER',
    dataIndex: 'kindOther'
   },
   {
    title: 'COMPANY_CODE_TYPE',
    dataIndex: 'companyCodeType'
   },
   {
    title: 'TYPEANDRANGE',
    dataIndex: 'typeandrange'
   },
   {
    title: 'INDUSTRY_CODE',
    dataIndex: 'industryCode'
   },
   {
    title: 'SUPPLEMENT_ACTIVE',
    dataIndex: 'supplementActive'
   },
   {
    title: 'licenseEnddate',
    dataIndex: 'licenseEnddate'
   },
   {
    title: 'acceptPersonCode',
    dataIndex: 'acceptPersonCode'
   },
   {
    title: 'licenseStartdate',
    dataIndex: 'licenseStartdate'
   },
   {
    title: 'doPersonCode',
    dataIndex: 'doPersonCode'
   },
];

export const searchFormSchema: FormSchema[] = [
 {
    label: '许可证申请单位主键',
    field: 'companyId',
    component: 'Input'
  },
 {
    label: 'PERMISSION_CODE_1',
    field: 'permissionCode1',
    component: 'Input'
  },
];

export const formSchema: FormSchema[] = [
  // TODO 主键隐藏字段，目前写死为ID
  {label: '', field: 'id', component: 'Input', show: false},
  {
    label: '许可证申请单位主键',
    field: 'companyId',
    component: 'Input',
  },
  {
    label: 'PERMISSION_CODE_1',
    field: 'permissionCode1',
    component: 'Input',
  },
  {
    label: '申请编号',
    field: 'requestNo',
    component: 'Input',
  },
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
    label: '单位名称',
    field: 'name',
    component: 'Input',
  },
  {
    label: '所属省份',
    field: 'province',
    component: 'Input',
  },
  {
    label: '所属市区',
    field: 'city',
    component: 'Input',
  },
  {
    label: '所属区县',
    field: 'district',
    component: 'Input',
  },
  {
    label: 'REGIST_PROVINCE',
    field: 'registProvince',
    component: 'Input',
  },
  {
    label: 'REGIST_CITY',
    field: 'registCity',
    component: 'Input',
  },
  {
    label: 'REGIST_DISTRICT',
    field: 'registDistrict',
    component: 'Input',
  },
  {
    label: 'CONTACT_ADDR_DETAIL',
    field: 'contactAddrDetail',
    component: 'Input',
  },
  {
    label: 'REGIST_ADDR',
    field: 'registAddr',
    component: 'Input',
  },
  {
    label: 'REGIST_ADDR_POST',
    field: 'registAddrPost',
    component: 'Input',
  },
  {
    label: '通讯地址',
    field: 'contactAddr',
    component: 'Input',
  },
  {
    label: '通讯地址邮编',
    field: 'contactAddrPost',
    component: 'Input',
  },
  {
    label: '联系人',
    field: 'contactPerson',
    component: 'Input',
  },
  {
    label: '联系电话',
    field: 'contactPhone',
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
  {
    label: '法定代表人',
    field: 'legalPerson',
    component: 'Input',
  },
  {
    label: '法人证件类型',
    field: 'legalPersonType',
    component: 'InputNumber',
  },
  {
    label: '法人证件号码',
    field: 'legalPersonId',
    component: 'Input',
  },
  {
    label: '法人联系电话',
    field: 'legalPersonPhone',
    component: 'Input',
  },
  {
    label: '单位性质',
    field: 'kind',
    component: 'Input',
  },
  {
    label: '行业分类',
    field: 'industryType',
    component: 'Input',
  },
  {
    label: '放射源生产活动种类',
    field: 'nuclideProduceActive',
    component: 'Input',
  },
  {
    label: '放射源销售活动种类',
    field: 'nuclideSaleActive',
    component: 'Input',
  },
  {
    label: '放射源使用活动种类',
    field: 'nuclideUseActive',
    component: 'Input',
  },
  {
    label: '射线装置生产活动种类',
    field: 'radialProduceActive',
    component: 'Input',
  },
  {
    label: '射线装置销售活动种类',
    field: 'radialSaleActive',
    component: 'Input',
  },
  {
    label: '射线装置使用活动种类',
    field: 'radialUseActive',
    component: 'Input',
  },
  {
    label: '射线装置使用(含建造)I类',
    field: 'radialSaleAndProduce',
    component: 'Input',
  },
  {
    label: '非密封放射物质活动种类',
    field: 'nonSealActive',
    component: 'Input',
  },
  {
    label: '非密封放射物质活动场所',
    field: 'nonSealType',
    component: 'Input',
  },
  {
    label: '使用(含收贮)',
    field: 'useAndCollection',
    component: 'Input',
  },
  {
    label: '辐射管理机构名称',
    field: 'radialOrgname',
    component: 'Input',
  },
  {
    label: '辐射管理机构联系人',
    field: 'radialOrgcontactPerson',
    component: 'Input',
  },
  {
    label: '辐射管理机构负责人电话',
    field: 'radialOrgcontactPhone',
    component: 'Input',
  },
  {
    label: '辐射管理机构联系人手机',
    field: 'radialOrgcontactMobile',
    component: 'Input',
  },
  {
    label: '辐射管理机构传真',
    field: 'radialOrgcontactFax',
    component: 'Input',
  },
  {
    label: '辐射管理机构联系人邮件',
    field: 'radialOrgcontactEmail',
    component: 'Input',
  },
  {
    label: '组织机构代码',
    field: 'organizationCode',
    component: 'Input',
  },
  {
    label: '备注',
    field: 'remark',
    component: 'Input',
  },
  {
    label: '受理状态',
    field: 'responseStatus',
    component: 'InputNumber',
  },
  {
    label: 'PERMISSION',
    field: 'permission',
    component: 'Input',
  },
  {
    label: 'IS_DELETE',
    field: 'isDelete',
    component: 'InputNumber',
  },
  {
    label: '新增人',
    field: 'insertUser',
    component: 'Input',
  },
  {
    label: '新增时间',
    field: 'insertDate',
    component: 'DatePicker'
  },
  {
    label: '修改人',
    field: 'modifyUser',
    component: 'Input',
  },
  {
    label: '修改时间',
    field: 'modifyDate',
    component: 'DatePicker'
  },
  {
    label: '许可证号',
    field: 'licenseNo',
    component: 'Input',
  },
  {
    label: '发证日期',
    field: 'licenseStartDate',
    component: 'DatePicker'
  },
  {
    label: '有效期至',
    field: 'licenseEndDate',
    component: 'DatePicker'
  },
  {
    label: '许可证颁发条件',
    field: 'licenseCondition',
    component: 'Input',
  },
  {
    label: '许可证审批机关',
    field: 'licenseIssueOrgan',
    component: 'Input',
  },
  {
    label: '审批状态',
    field: 'status',
    component: 'Input',
  },
  {
    label: '是否通过  0：否  1：是',
    field: 'bePass',
    component: 'InputNumber',
  },
  {
    label: '不通过理由',
    field: 'nopassReason',
    component: 'Input',
  },
  {
    label: 'REQUEST_SOURCE',
    field: 'requestSource',
    component: 'Input',
  },
  {
    label: 'REQUEST_SOURCE_ID',
    field: 'requestSourceId',
    component: 'InputNumber',
  },
  {
    label: '是否重新申领  0：否  1：是',
    field: 'isApply',
    component: 'Input',
  },
  {
    label: 'MODULE_NUMBER',
    field: 'moduleNumber',
    component: 'Input',
  },
  {
    label: '单位id',
    field: 'instanceid',
    component: 'Input',
  },
  {
    label: 'LICENSE_TYPE',
    field: 'licenseType',
    component: 'Input',
  },
  {
    label: '单位类型',
    field: 'companyType',
    component: 'Input',
  },
  {
    label: '发证机关',
    field: 'licenceIssuingAuthority',
    component: 'Input',
  },
  {
    label: '办理人',
    field: 'doPerson',
    component: 'Input',
  },
  {
    label: '办理时间',
    field: 'doDate',
    component: 'DatePicker'
  },
  {
    label: 'REQUEST_TIME',
    field: 'requestTime',
    component: 'DatePicker'
  },
  {
    label: 'MARK',
    field: 'mark',
    component: 'Input',
  },
  {
    label: '业务id',
    field: 'ywid',
    component: 'Input',
  },
  {
    label: 'NUCLIDE_PRODUCE_SALE_USE',
    field: 'nuclideProduceSaleUse',
    component: 'Input',
  },
  {
    label: 'RADIAL_PRODUCE_SALE_USE',
    field: 'radialProduceSaleUse',
    component: 'Input',
  },
  {
    label: '注册地址最后一级code',
    field: 'regionCode1',
    component: 'Input',
  },
  {
    label: '通讯地址最后一级code',
    field: 'regionCode2',
    component: 'Input',
  },
  {
    label: '省级编码',
    field: 'provinceCode',
    component: 'Input',
  },
  {
    label: '市级编码',
    field: 'cityCode',
    component: 'Input',
  },
  {
    label: '区级编码',
    field: 'districtCode',
    component: 'Input',
  },
  {
    label: '区域编码',
    field: 'areaCode',
    component: 'Input',
  },
  {
    label: '区域名称',
    field: 'areaName',
    component: 'Input',
  },
  {
    label: 'REGIST_PROVINCE_CODE',
    field: 'registProvinceCode',
    component: 'Input',
  },
  {
    label: 'REGIST_CITY_CODE',
    field: 'registCityCode',
    component: 'Input',
  },
  {
    label: 'REGIST_DISTRICT_CODE',
    field: 'registDistrictCode',
    component: 'Input',
  },
  {
    label: 'PROVINCE_CODE2',
    field: 'provinceCode2',
    component: 'Input',
  },
  {
    label: 'CITY_CODE2',
    field: 'cityCode2',
    component: 'Input',
  },
  {
    label: 'DISTRICT_CODE2',
    field: 'districtCode2',
    component: 'Input',
  },
  {
    label: 'AREA_CODE2',
    field: 'areaCode2',
    component: 'Input',
  },
  {
    label: 'AREA_NAME2',
    field: 'areaName2',
    component: 'Input',
  },
  {
    label: 'REGIST_AREA_CODE',
    field: 'registAreaCode',
    component: 'Input',
  },
  {
    label: 'REGIST_AREA_NAME',
    field: 'registAreaName',
    component: 'Input',
  },
  {
    label: '受理时间',
    field: 'acceptDate',
    component: 'DatePicker'
  },
  {
    label: '受理人',
    field: 'acceptPerson',
    component: 'Input',
  },
  {
    label: '提交时间',
    field: 'submitDate',
    component: 'DatePicker'
  },
  {
    label: '提交人',
    field: 'submitUser',
    component: 'Input',
  },
  {
    label: 'UNIFY_SOCIETY_CODE',
    field: 'unifySocietyCode',
    component: 'Input',
  },
  {
    label: 'OLD_MARK',
    field: 'oldMark',
    component: 'Input',
  },
  {
    label: 'INDUSTRY_OTHER',
    field: 'industryOther',
    component: 'Input',
  },
  {
    label: 'KIND_OTHER',
    field: 'kindOther',
    component: 'Input',
  },
  {
    label: 'COMPANY_CODE_TYPE',
    field: 'companyCodeType',
    component: 'Input',
  },
  {
    label: 'TYPEANDRANGE',
    field: 'typeandrange',
    component: 'Input',
  },
  {
    label: 'INDUSTRY_CODE',
    field: 'industryCode',
    component: 'Input',
  },
  {
    label: 'SUPPLEMENT_ACTIVE',
    field: 'supplementActive',
    component: 'Input',
  },
  {
    label: 'licenseEnddate',
    field: 'licenseEnddate',
    component: 'DatePicker'
  },
  {
    label: 'acceptPersonCode',
    field: 'acceptPersonCode',
    component: 'Input',
  },
  {
    label: 'licenseStartdate',
    field: 'licenseStartdate',
    component: 'DatePicker'
  },
  {
    label: 'doPersonCode',
    field: 'doPersonCode',
    component: 'Input',
  },
];
