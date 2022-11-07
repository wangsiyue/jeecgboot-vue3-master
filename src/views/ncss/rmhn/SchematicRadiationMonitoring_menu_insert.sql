-- 注意：该页面对应的前台目录为views/rmhn文件夹下
-- 如果你想更改到其他目录，请修改sql中component字段对应的值


INSERT INTO sys_permission(id, parent_id, name, url, component, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_route, is_leaf, keep_alive, hidden, hide_tab, description, status, del_flag, rule_flag, create_by, create_time, update_by, update_time, internal_or_external) 
VALUES ('202210281013740200', NULL, 'schematic_radiation_monitoring', '/rmhn/schematicRadiationMonitoringList', 'rmhn/SchematicRadiationMonitoringList', NULL, NULL, 0, NULL, '1', 1.00, 0, NULL, 1, 1, 0, 0, 0, NULL, '1', 0, 0, 'admin', '2022-10-28 10:13:20', NULL, NULL, 0);

-- 权限控制sql
-- 新增
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('202210281013740201', '202210281013740200', '添加schematic_radiation_monitoring', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:schematic_radiation_monitoring:add', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-10-28 10:13:20', NULL, NULL, 0, 0, '1', 0);
-- 编辑
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('202210281013740202', '202210281013740200', '编辑schematic_radiation_monitoring', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:schematic_radiation_monitoring:edit', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-10-28 10:13:20', NULL, NULL, 0, 0, '1', 0);
-- 删除
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('202210281013740203', '202210281013740200', '删除schematic_radiation_monitoring', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:schematic_radiation_monitoring:delete', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-10-28 10:13:20', NULL, NULL, 0, 0, '1', 0);
-- 批量删除
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('202210281013740204', '202210281013740200', '批量删除schematic_radiation_monitoring', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:schematic_radiation_monitoring:deleteBatch', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-10-28 10:13:20', NULL, NULL, 0, 0, '1', 0);
-- 导出excel
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('202210281013740205', '202210281013740200', '导出excel_schematic_radiation_monitoring', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:schematic_radiation_monitoring:exportXls', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-10-28 10:13:20', NULL, NULL, 0, 0, '1', 0);
-- 导入excel
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('202210281013740206', '202210281013740200', '导入excel_schematic_radiation_monitoring', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:schematic_radiation_monitoring:importExcel', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-10-28 10:13:20', NULL, NULL, 0, 0, '1', 0);