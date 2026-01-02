-- master data role
INSERT INTO role (role_id, name, status) VALUES
('1', 'Operator', 'active'),
('2', 'Manajer', 'active');

-- master data menu
INSERT INTO menu (menu_id, name, status) VALUES
('dashboard', 'Dashboard', 'active'),
('qc_template', 'Qc Template', 'active'),
('product', 'Product', 'active'),
('product_detail', 'Product Detail', 'active'),
('qc_list', 'QC List', 'active'),
('user', 'User', 'active'),
('location', 'Location', 'active'),
('role', 'Role', 'active'),

('qc_template_add', 'Add QC Template', 'active'),
('qc_template_edit', 'Edit QC Template', 'active'),
('qc_template_delete', 'Delete QC Template', 'active'),

('qc_list_add', 'Add QC List', 'active'),
('qc_list_edit', 'Edit QC List', 'active'),
('qc_list_delete', 'Delete QC List', 'active'),

('user_add', 'Add User', 'active'),
('user_edit', 'Edit User', 'active'),
('user_delete', 'Delete User', 'active'),

('location_add', 'Add Location', 'active'),
('location_edit', 'Edit Location', 'active'),
('location_delete', 'Delete Location', 'active'),

('role_add', 'Add Role', 'active'),
('role_edit', 'Edit Role', 'active'),
('role_delete', 'Delete Role', 'active');


-- Role 2 (Manajer) akses semua menu + CRUD
INSERT INTO role_menu (role_id, menu_id, status) VALUES
('2', 'dashboard', 'active'),
('2', 'qc_template', 'active'),
('2', 'product', 'active'),
('2', 'qc_list', 'active'),
('2', 'user', 'active'),
('2', 'location', 'active'),
('2', 'role', 'active'),

-- QC Template CRUD
('2', 'qc_template_add', 'active'),
('2', 'qc_template_edit', 'active'),
('2', 'qc_template_delete', 'active'),

-- QC List CRUD
('2', 'qc_list_add', 'active'),
('2', 'qc_list_edit', 'active'),
('2', 'qc_list_delete', 'active'),

-- User CRUD
('2', 'user_add', 'active'),
('2', 'user_edit', 'active'),
('2', 'user_delete', 'active'),

-- Location CRUD
('2', 'location_add', 'active'),
('2', 'location_edit', 'active'),
('2', 'location_delete', 'active'),

-- Role CRUD
('2', 'role_add', 'active'),
('2', 'role_edit', 'active'),
('2', 'role_delete', 'active');


-- Role 1 (Operator) hanya akses dashboard & qc_list + CRUD
INSERT INTO role_menu (role_id, menu_id, status) VALUES
('1', 'dashboard', 'active'),
('1', 'qc_list', 'active'),

-- QC List CRUD
('1', 'qc_list_add', 'active'),
('1', 'qc_list_edit', 'active'),
('1', 'qc_list_delete', 'active');
