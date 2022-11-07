-- 注意：该页面对应的前台目录为views/rmhn文件夹下
-- 如果你想更改到其他目录，请修改sql中component字段对应的值


INSERT INTO sys_permission(id, parent_id, name, url, component, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_route, is_leaf, keep_alive, hidden, hide_tab, description, status, del_flag, rule_flag, create_by, create_time, update_by, update_time, internal_or_external) 
VALUES ('2022102810005620470', NULL, 'radio_interference_monitoring', '/rmhn/radioInterferenceMonitoringList', 'rmhn/RadioInterferenceMonitoringList', NULL, NULL, 0, NULL, '1', 1.00, 0, NULL, 1, 1, 0, 0, 0, NULL, '1', 0, 0, 'admin', '2022-10-28 10:00:47', NULL, NULL, 0);

-- 权限控制sql
-- 新增
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022102810005630471', '2022102810005620470', '添加radio_interference_monitoring', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:radio_interference_monitoring:add', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-10-28 10:00:47', NULL, NULL, 0, 0, '1', 0);
-- 编辑
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022102810005630472', '2022102810005620470', '编辑radio_interference_monitoring', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:radio_interference_monitoring:edit', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-10-28 10:00:47', NULL, NULL, 0, 0, '1', 0);
-- 删除
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022102810005680473', '2022102810005620470', '删除radio_interference_monitoring', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:radio_interference_monitoring:delete', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-10-28 10:00:47', NULL, NULL, 0, 0, '1', 0);
-- 批量删除
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022102810005700474', '2022102810005620470', '批量删除radio_interference_monitoring', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:radio_interference_monitoring:deleteBatch', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-10-28 10:00:47', NULL, NULL, 0, 0, '1', 0);
-- 导出excel
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022102810005700475', '2022102810005620470', '导出excel_radio_interference_monitoring', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:radio_interference_monitoring:exportXls', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-10-28 10:00:47', NULL, NULL, 0, 0, '1', 0);
-- 导入excel
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022102810005700476', '2022102810005620470', '导入excel_radio_interference_monitoring', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:radio_interference_monitoring:importExcel', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-10-28 10:00:47', NULL, NULL, 0, 0, '1', 0);