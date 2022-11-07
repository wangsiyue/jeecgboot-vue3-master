-- 注意：该页面对应的前台目录为views/rmhn文件夹下
-- 如果你想更改到其他目录，请修改sql中component字段对应的值


INSERT INTO sys_permission(id, parent_id, name, url, component, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_route, is_leaf, keep_alive, hidden, hide_tab, description, status, del_flag, rule_flag, create_by, create_time, update_by, update_time, internal_or_external) 
VALUES ('2022102802172850190', NULL, 'instrument_efficiency_calibration', '/rmhn/instrumentEfficiencyCalibrationList', 'rmhn/InstrumentEfficiencyCalibrationList', NULL, NULL, 0, NULL, '1', 1.00, 0, NULL, 1, 1, 0, 0, 0, NULL, '1', 0, 0, 'admin', '2022-10-28 14:17:19', NULL, NULL, 0);

-- 权限控制sql
-- 新增
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022102802172850191', '2022102802172850190', '添加instrument_efficiency_calibration', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:instrument_efficiency_calibration:add', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-10-28 14:17:19', NULL, NULL, 0, 0, '1', 0);
-- 编辑
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022102802172850192', '2022102802172850190', '编辑instrument_efficiency_calibration', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:instrument_efficiency_calibration:edit', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-10-28 14:17:19', NULL, NULL, 0, 0, '1', 0);
-- 删除
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022102802172850193', '2022102802172850190', '删除instrument_efficiency_calibration', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:instrument_efficiency_calibration:delete', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-10-28 14:17:19', NULL, NULL, 0, 0, '1', 0);
-- 批量删除
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022102802172860194', '2022102802172850190', '批量删除instrument_efficiency_calibration', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:instrument_efficiency_calibration:deleteBatch', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-10-28 14:17:19', NULL, NULL, 0, 0, '1', 0);
-- 导出excel
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022102802172860195', '2022102802172850190', '导出excel_instrument_efficiency_calibration', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:instrument_efficiency_calibration:exportXls', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-10-28 14:17:19', NULL, NULL, 0, 0, '1', 0);
-- 导入excel
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022102802172860196', '2022102802172850190', '导入excel_instrument_efficiency_calibration', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:instrument_efficiency_calibration:importExcel', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-10-28 14:17:19', NULL, NULL, 0, 0, '1', 0);