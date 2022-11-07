-- 注意：该页面对应的前台目录为views/rmhn文件夹下
-- 如果你想更改到其他目录，请修改sql中component字段对应的值


INSERT INTO sys_permission(id, parent_id, name, url, component, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_route, is_leaf, keep_alive, hidden, hide_tab, description, status, del_flag, rule_flag, create_by, create_time, update_by, update_time, internal_or_external) 
VALUES ('202210281013180100', NULL, 'radiation_monitoring', '/rmhn/radiationMonitoringList', 'rmhn/RadiationMonitoringList', NULL, NULL, 0, NULL, '1', 1.00, 0, NULL, 1, 1, 0, 0, 0, NULL, '1', 0, 0, 'admin', '2022-10-28 10:13:10', NULL, NULL, 0);

-- 权限控制sql
-- 新增
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('202210281013190101', '202210281013180100', '添加radiation_monitoring', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:radiation_monitoring:add', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-10-28 10:13:10', NULL, NULL, 0, 0, '1', 0);
-- 编辑
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('202210281013190102', '202210281013180100', '编辑radiation_monitoring', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:radiation_monitoring:edit', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-10-28 10:13:10', NULL, NULL, 0, 0, '1', 0);
-- 删除
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('202210281013190103', '202210281013180100', '删除radiation_monitoring', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:radiation_monitoring:delete', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-10-28 10:13:10', NULL, NULL, 0, 0, '1', 0);
-- 批量删除
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('202210281013190104', '202210281013180100', '批量删除radiation_monitoring', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:radiation_monitoring:deleteBatch', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-10-28 10:13:10', NULL, NULL, 0, 0, '1', 0);
-- 导出excel
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('202210281013190105', '202210281013180100', '导出excel_radiation_monitoring', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:radiation_monitoring:exportXls', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-10-28 10:13:10', NULL, NULL, 0, 0, '1', 0);
-- 导入excel
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('202210281013190106', '202210281013180100', '导入excel_radiation_monitoring', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:radiation_monitoring:importExcel', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-10-28 10:13:10', NULL, NULL, 0, 0, '1', 0);