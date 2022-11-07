import {defHttp} from '/@/utils/http/axios';
import { useMessage } from "/@/hooks/web/useMessage";

const { createConfirm } = useMessage();

enum Api {
  list = '/rmhn/contaminationMeasurement/list',
  save='/rmhn/contaminationMeasurement/add',
  edit='/rmhn/contaminationMeasurement/edit',
  deleteOne = '/rmhn/contaminationMeasurement/delete',
  deleteBatch = '/rmhn/contaminationMeasurement/deleteBatch',
  importExcel = '/rmhn/contaminationMeasurement/importExcel',
  exportXls = '/rmhn/contaminationMeasurement/exportXls',
  contaminationMeasurementDetailsList = '/rmhn/contaminationMeasurement/queryContaminationMeasurementDetailsByMainId',
  contaminationMeasurementDetails2List = '/rmhn/contaminationMeasurement/queryContaminationMeasurementDetails2ByMainId',
}
/**
 * 导出api
 * @param params
 */
export const getExportUrl = Api.exportXls;

/**
 * 导入api
 */
export const getImportUrl = Api.importExcel;
/**
 * 查询子表数据
 * @param params
 */
export const contaminationMeasurementDetailsList = Api.contaminationMeasurementDetailsList;
/**
 * 查询子表数据
 * @param params
 */
export const contaminationMeasurementDetails2List = Api.contaminationMeasurementDetails2List;
/**
 * 列表接口
 * @param params
 */
export const list = (params) =>
  defHttp.get({url: Api.list, params});

/**
 * 删除单个
 */
export const deleteOne = (params,handleSuccess) => {
  return defHttp.delete({url: Api.deleteOne, params}, {joinParamsToUrl: true}).then(() => {
    handleSuccess();
  });
}
/**
 * 批量删除
 * @param params
 */
export const batchDelete = (params, handleSuccess) => {
  createConfirm({
    iconType: 'warning',
    title: '确认删除',
    content: '是否删除选中数据',
    okText: '确认',
    cancelText: '取消',
    onOk: () => {
      return defHttp.delete({url: Api.deleteBatch, data: params}, {joinParamsToUrl: true}).then(() => {
        handleSuccess();
      });
    }
  });
}
/**
 * 保存或者更新
 * @param params
 */
export const saveOrUpdate = (params, isUpdate) => {
  let url = isUpdate ? Api.edit : Api.save;
  return defHttp.post({url: url, params});
}
