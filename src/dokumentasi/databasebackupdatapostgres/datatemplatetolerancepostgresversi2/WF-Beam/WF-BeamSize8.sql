-- Template wf-beam WF 248X124X5X8
INSERT INTO qc_template (qc_template_id, prodtype_id, size_id, profile, std_dimention, brand_merek, specification, name, status, created_by, created_dt, updated_by, updated_dt) VALUES
('TMP-wfhlvxzg', 'WF-BEAM', 'WF 248X124X5X8', 'WF 248X124X5X8', '248X124X5X8', 'WF-BEAM 248X124X5X8', 'WF 248X124X5X8', 'Template WF-BEAM 248X124X5X8', 'active', 'Akun Testing Manajer', '2025-11-08 13:00:00', 'Akun Testing Manajer', '2025-11-08 13:00:00');

INSERT INTO qc_template_data (input_code, qc_template_id, label, input_type, min_tolerance, t_lt_50_tolerance, nominal_tolerance, t_gt_50_tolerance, max_tolerance, actual_tolerance, order_numb, enabled, sound, position, group_name) VALUES
-- H-Top (1-3) - Width of Web
('H.H-top', 'TMP-wfhlvxzg', 'H(H-top)', 'number', 246, 247, 248, 249, 250, NULL, 1, true, '', 'H-Top', 'table'),
('C.H-top', 'TMP-wfhlvxzg', 'C(H-top)', 'number', 246, 247, 248, 249, 250, NULL, 2, true, '', 'H-Top', 'table'),
('T.H-top', 'TMP-wfhlvxzg', 'T(H-top)', 'number', 246, 247, 248, 249, 250, NULL, 3, true, '', 'H-Top', 'table'),

-- H-Bottom (4-6) - Width of Web
('H.H-bottom', 'TMP-wfhlvxzg', 'H(H-bottom)', 'number', 246, 247, 248, 249, 250, NULL, 4, true, '', 'H-Bottom', 'table'),
('C.H-bottom', 'TMP-wfhlvxzg', 'C(H-bottom)', 'number', 246, 247, 248, 249, 250, NULL, 5, true, '', 'H-Bottom', 'table'),
('T.H-bottom', 'TMP-wfhlvxzg', 'T(H-bottom)', 'number', 246, 247, 248, 249, 250, NULL, 6, true, '', 'H-Bottom', 'table'),

-- B1 (7-9) - Height of Flange
('H.B1', 'TMP-wfhlvxzg', 'H(B1)', 'number', 121.5, 122.75, 124, 125.25, 126.5, NULL, 7, true, '', 'B1', 'table'),
('C.B1', 'TMP-wfhlvxzg', 'C(B1)', 'number', 121.5, 122.75, 124, 125.25, 126.5, NULL, 8, true, '', 'B1', 'table'),
('T.B1', 'TMP-wfhlvxzg', 'T(B1)', 'number', 121.5, 122.75, 124, 125.25, 126.5, NULL, 9, true, '', 'B1', 'table'),

-- B2 (10-12) - Height of Flange
('H.B2', 'TMP-wfhlvxzg', 'H(B2)', 'number', 121.5, 122.75, 124, 125.25, 126.5, NULL, 10, true, '', 'B2', 'table'),
('C.B2', 'TMP-wfhlvxzg', 'C(B2)', 'number', 121.5, 122.75, 124, 125.25, 126.5, NULL, 11, true, '', 'B2', 'table'),
('T.B2', 'TMP-wfhlvxzg', 'T(B2)', 'number', 121.5, 122.75, 124, 125.25, 126.5, NULL, 12, true, '', 'B2', 'table'),

-- b1 (13-15) - PERHATIAN: tolerance diubah dari Web Off Center (-2.5-2.5) ke Flange Thickness (6.5-9.5)
('H.b1', 'TMP-wfhlvxzg', 'H(b1)', 'number', 6.5, 7.25, 8, 8.75, 9.5, NULL, 13, true, '', 'b1', 'table'),
('C.b1', 'TMP-wfhlvxzg', 'C(b1)', 'number', 6.5, 7.25, 8, 8.75, 9.5, NULL, 14, true, '', 'b1', 'table'),
('T.b1', 'TMP-wfhlvxzg', 'T(b1)', 'number', 6.5, 7.25, 8, 8.75, 9.5, NULL, 15, true, '', 'b1', 'table'),

-- b3 (16-18) - PERHATIAN: tolerance diubah dari Web Off Center (-2.5-2.5) ke Flange Thickness (6.5-9.5)
('H.b3', 'TMP-wfhlvxzg', 'H(b3)', 'number', 6.5, 7.25, 8, 8.75, 9.5, NULL, 16, true, '', 'b3', 'table'),
('C.b3', 'TMP-wfhlvxzg', 'C(b3)', 'number', 6.5, 7.25, 8, 8.75, 9.5, NULL, 17, true, '', 'b3', 'table'),
('T.b3', 'TMP-wfhlvxzg', 'T(b3)', 'number', 6.5, 7.25, 8, 8.75, 9.5, NULL, 18, true, '', 'b3', 'table'),

-- b2 (19-21) - PERHATIAN: tolerance diubah dari Web Off Center (-2.5-2.5) ke Flange Thickness (6.5-9.5)
('H.b2', 'TMP-wfhlvxzg', 'H(b2)', 'number', 6.5, 7.25, 8, 8.75, 9.5, NULL, 19, true, '', 'b2', 'table'),
('C.b2', 'TMP-wfhlvxzg', 'C(b2)', 'number', 6.5, 7.25, 8, 8.75, 9.5, NULL, 20, true, '', 'b2', 'table'),
('T.b2', 'TMP-wfhlvxzg', 'T(b2)', 'number', 6.5, 7.25, 8, 8.75, 9.5, NULL, 21, true, '', 'b2', 'table'),

-- b4 (22-24) - PERHATIAN: tolerance diubah dari Web Off Center (-2.5-2.5) ke Flange Thickness (6.5-9.5)
('H.b4', 'TMP-wfhlvxzg', 'H(b4)', 'number', 6.5, 7.25, 8, 8.75, 9.5, NULL, 22, true, '', 'b4', 'table'),
('C.b4', 'TMP-wfhlvxzg', 'C(b4)', 'number', 6.5, 7.25, 8, 8.75, 9.5, NULL, 23, true, '', 'b4', 'table'),
('T.b4', 'TMP-wfhlvxzg', 'T(b4)', 'number', 6.5, 7.25, 8, 8.75, 9.5, NULL, 24, true, '', 'b4', 'table'),

-- b1-b2/2 (25-27) - Tetap Web Off Center
('H.b1-b2/2', 'TMP-wfhlvxzg', 'H(b1-b2/2)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 25, true, '', 'b1-b2/2', 'table'),
('C.b1-b2/2', 'TMP-wfhlvxzg', 'C(b1-b2/2)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 26, true, '', 'b1-b2/2', 'table'),
('T.b1-b2/2', 'TMP-wfhlvxzg', 'T(b1-b2/2)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 27, true, '', 'b1-b2/2', 'table'),

-- b3-b4/2 (28-30) - Tetap Web Off Center
('H.b3-b4/2', 'TMP-wfhlvxzg', 'H(b3-b4/2)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 28, true, '', 'b3-b4/2', 'table'),
('C.b3-b4/2', 'TMP-wfhlvxzg', 'C(b3-b4/2)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 29, true, '', 'b3-b4/2', 'table'),
('T.b3-b4/2', 'TMP-wfhlvxzg', 'T(b3-b4/2)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 30, true, '', 'b3-b4/2', 'table'),

-- t1 (31-33) - Flange Thickness
('H.t1', 'TMP-wfhlvxzg', 'H(t1)', 'number', 6.5, 7.25, 8, 8.75, 9.5, NULL, 31, true, '', 't1', 'table'),
('C.t1', 'TMP-wfhlvxzg', 'C(t1)', 'number', 6.5, 7.25, 8, 8.75, 9.5, NULL, 32, true, '', 't1', 'table'),
('T.t1', 'TMP-wfhlvxzg', 'T(t1)', 'number', 6.5, 7.25, 8, 8.75, 9.5, NULL, 33, true, '', 't1', 'table'),

-- t3 (34-36) - Flange Thickness
('H.t3', 'TMP-wfhlvxzg', 'H(t3)', 'number', 6.5, 7.25, 8, 8.75, 9.5, NULL, 34, true, '', 't3', 'table'),
('C.t3', 'TMP-wfhlvxzg', 'C(t3)', 'number', 6.5, 7.25, 8, 8.75, 9.5, NULL, 35, true, '', 't3', 'table'),
('T.t3', 'TMP-wfhlvxzg', 'T(t3)', 'number', 6.5, 7.25, 8, 8.75, 9.5, NULL, 36, true, '', 't3', 'table'),

-- t2 (37-39) - Flange Thickness
('H.t2', 'TMP-wfhlvxzg', 'H(t2)', 'number', 6.5, 7.25, 8, 8.75, 9.5, NULL, 37, true, '', 't2', 'table'),
('C.t2', 'TMP-wfhlvxzg', 'C(t2)', 'number', 6.5, 7.25, 8, 8.75, 9.5, NULL, 38, true, '', 't2', 'table'),
('T.t2', 'TMP-wfhlvxzg', 'T(t2)', 'number', 6.5, 7.25, 8, 8.75, 9.5, NULL, 39, true, '', 't2', 'table'),

-- t4 (40-42) - Flange Thickness
('H.t4', 'TMP-wfhlvxzg', 'H(t4)', 'number', 6.5, 7.25, 8, 8.75, 9.5, NULL, 40, true, '', 't4', 'table'),
('C.t4', 'TMP-wfhlvxzg', 'C(t4)', 'number', 6.5, 7.25, 8, 8.75, 9.5, NULL, 41, true, '', 't4', 'table'),
('T.t4', 'TMP-wfhlvxzg', 'T(t4)', 'number', 6.5, 7.25, 8, 8.75, 9.5, NULL, 42, true, '', 't4', 'table'),

-- t5 (43-45) - Web Thickness
('H.t5', 'TMP-wfhlvxzg', 'H(t5)', 'number', 4, 4.65, 5.3, 5.95, 6.6, NULL, 43, true, '', 't5', 'table'),
('C.t5', 'TMP-wfhlvxzg', 'C(t5)', 'number', 4, 4.65, 5.3, 5.95, 6.6, NULL, 44, true, '', 't5', 'table'),
('T.t5', 'TMP-wfhlvxzg', 'T(t5)', 'number', 4, 4.65, 5.3, 5.95, 6.6, NULL, 45, true, '', 't5', 'table'),

-- t6 (NULL) - Web Thickness dengan order_numb NULL
('H.t6', 'TMP-wfhlvxzg', 'H(t6)', 'number', 4, 4.65, 5.3, 5.95, 6.6, NULL, NULL, true, '', 't6', 'table'),
('C.t6', 'TMP-wfhlvxzg', 'C(t6)', 'number', 4, 4.65, 5.3, 5.95, 6.6, NULL, NULL, true, '', 't6', 'table'),
('T.t6', 'TMP-wfhlvxzg', 'T(t6)', 'number', 4, 4.65, 5.3, 5.95, 6.6, NULL, NULL, true, '', 't6', 'table'),

-- t7 (NULL) - Web Thickness dengan order_numb NULL
('H.t7', 'TMP-wfhlvxzg', 'H(t7)', 'number', 4, 4.65, 5.3, 5.95, 6.6, NULL, NULL, true, '', 't7', 'table'),
('C.t7', 'TMP-wfhlvxzg', 'C(t7)', 'number', 4, 4.65, 5.3, 5.95, 6.6, NULL, NULL, true, '', 't7', 'table'),
('T.t7', 'TMP-wfhlvxzg', 'T(t7)', 'number', 4, 4.65, 5.3, 5.95, 6.6, NULL, NULL, true, '', 't7', 'table'),

-- FormRight (46-54)
('height.of.flange', 'TMP-wfhlvxzg', 'Height of Flange', 'number', 121.5, 122.75, 124, 125.25, 126.5, 0, 46, true, '', 'FormRight', 'Height of Flange'),
('flange.thickness', 'TMP-wfhlvxzg', 'Flange Thickness', 'number', 6.5, 7.25, 8, 8.75, 9.5, 0, 47, true, '', 'FormRight', 'Flange Thickness'),
('width.of.web', 'TMP-wfhlvxzg', 'Width of Web', 'number', 246, 247, 248, 249, 250, 0, 48, true, '', 'FormRight', 'Width of Web'),
('web.thickness', 'TMP-wfhlvxzg', 'Web Thickness', 'number', 4, 4.65, 5.3, 5.95, 6.6, 0, 49, true, '', 'FormRight', 'Web Thickness'),
('unit.weight', 'TMP-wfhlvxzg', 'Unit Weight (Kgm)', 'number', 23.6, 24.35, 25.1, 25.85, 26.6, 0, 50, true, '', 'FormRight', 'Unit Weight (Kgm)'),
('radius', 'TMP-wfhlvxzg', 'Radius', 'number', 0, 0, 8, 0, 0, 0, 51, true, '', 'FormRight', 'Radius'),
('web.off.center', 'TMP-wfhlvxzg', 'Web Off Center', 'number', -2.5, -1.25, 0, 1.25, 2.5, 0, 52, true, '', 'FormRight', 'Web Off Center'),
('os', 'TMP-wfhlvxzg', 'OS', 'number', 0, 0, 1.5, 0, 0, 0, 53, true, '', 'FormRight', 'OS'),
('cow', 'TMP-wfhlvxzg', 'CoW', 'number', 0, 0, 0, 0, 0, 2, 54, true, '', 'FormRight', 'CoW');

INSERT INTO qc_template_mapping (mapping_id, qc_template_id, group_name, position, order_numb) VALUES
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfhlvxzg', 'Width of Web', 'H-Top', 0),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfhlvxzg', 'Width of Web', 'H-Bottom', 1),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfhlvxzg', 'Height of Flange', 'B1', 0),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfhlvxzg', 'Height of Flange', 'B2', 1),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfhlvxzg', 'Flange Thickness', 't1', 0),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfhlvxzg', 'Flange Thickness', 't2', 1),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfhlvxzg', 'Flange Thickness', 't3', 2),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfhlvxzg', 'Flange Thickness', 't4', 7), -- diubah dari 3 ke 7
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfhlvxzg', 'Flange Thickness', 'b1', 3),  -- b1 dipindah ke Flange Thickness
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfhlvxzg', 'Flange Thickness', 'b2', 4),  -- b2 dipindah ke Flange Thickness
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfhlvxzg', 'Flange Thickness', 'b3', 5),  -- b3 dipindah ke Flange Thickness
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfhlvxzg', 'Flange Thickness', 'b4', 6),  -- b4 dipindah ke Flange Thickness
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfhlvxzg', 'Web Thickness', 't5', 0),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfhlvxzg', 'Web Thickness', 't6', 1), -- order_numb disesuaikan
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfhlvxzg', 'Web Thickness', 't7', 2), -- order_numb disesuaikan
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfhlvxzg', 'Web Off Center', 'b1-b2/2', 0), -- order_numb disesuaikan
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfhlvxzg', 'Web Off Center', 'b3-b4/2', 1), -- order_numb disesuaikan
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfhlvxzg', 'Radius', '', 0),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfhlvxzg', 'CoW', '', 0),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfhlvxzg', 'OS', '', 0),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfhlvxzg', 'Unit Weight (Kgm)', '', 0);