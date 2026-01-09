-- Template wf-beam 
INSERT INTO qc_template (qc_template_id, prodtype_id, size_id, profile, std_dimention, brand_merek, specification, name, status, created_by, created_dt, updated_by, updated_dt) VALUES
('TMP-wflpbzdk', 'WF-BEAM', 'WF 300X150X6.5X9', 'WF 300X150X6.5X9', '300X150X6.5X9', 'WF-BEAM 300X150X6.5X9', 'WF 300X150X6.5X9', 'Template WF-BEAM 300X150X6.5X9', 'active', 'Akun Testing Manajer', '2025-11-08 13:00:00', 'Akun Testing Manajer', '2025-11-08 13:00:00');

INSERT INTO qc_template_data (input_code, qc_template_id, label, input_type, min_tolerance, t_lt_50_tolerance, nominal_tolerance, t_gt_50_tolerance, max_tolerance, actual_tolerance, order_numb, enabled, sound, position, group_name) VALUES
-- H-Top (1-3) - Width of Web
('H.H-top', 'TMP-wflpbzdk', 'H(H-top)', 'number', 298, 299, 300, 301, 302, NULL, 1, true, '', 'H-Top', 'table'),
('C.H-top', 'TMP-wflpbzdk', 'C(H-top)', 'number', 298, 299, 300, 301, 302, NULL, 2, true, '', 'H-Top', 'table'),
('T.H-top', 'TMP-wflpbzdk', 'T(H-top)', 'number', 298, 299, 300, 301, 302, NULL, 3, true, '', 'H-Top', 'table'),

-- H-Bottom (4-6) - Width of Web
('H.H-bottom', 'TMP-wflpbzdk', 'H(H-bottom)', 'number', 298, 299, 300, 301, 302, NULL, 4, true, '', 'H-Bottom', 'table'),
('C.H-bottom', 'TMP-wflpbzdk', 'C(H-bottom)', 'number', 298, 299, 300, 301, 302, NULL, 5, true, '', 'H-Bottom', 'table'),
('T.H-bottom', 'TMP-wflpbzdk', 'T(H-bottom)', 'number', 298, 299, 300, 301, 302, NULL, 6, true, '', 'H-Bottom', 'table'),

-- B1 (7-9) - Height of Flange
('H.B1', 'TMP-wflpbzdk', 'H(B1)', 'number', 147.5, 148.75, 150, 151.25, 152.5, NULL, 7, true, '', 'B1', 'table'),
('C.B1', 'TMP-wflpbzdk', 'C(B1)', 'number', 147.5, 148.75, 150, 151.25, 152.5, NULL, 8, true, '', 'B1', 'table'),
('T.B1', 'TMP-wflpbzdk', 'T(B1)', 'number', 147.5, 148.75, 150, 151.25, 152.5, NULL, 9, true, '', 'B1', 'table'),

-- B2 (10-12) - Height of Flange
('H.B2', 'TMP-wflpbzdk', 'H(B2)', 'number', 147.5, 148.75, 150, 151.25, 152.5, NULL, 10, true, '', 'B2', 'table'),
('C.B2', 'TMP-wflpbzdk', 'C(B2)', 'number', 147.5, 148.75, 150, 151.25, 152.5, NULL, 11, true, '', 'B2', 'table'),
('T.B2', 'TMP-wflpbzdk', 'T(B2)', 'number', 147.5, 148.75, 150, 151.25, 152.5, NULL, 12, true, '', 'B2', 'table'),

-- b1 (13-15) - PERHATIAN: tolerance diubah dari Web Off Center (-2.5-2.5) ke Flange Thickness (7.5-10.5)
('H.b1', 'TMP-wflpbzdk', 'H(b1)', 'number', 7.5, 8.25, 9, 9.75, 10.5, NULL, 13, true, '', 'b1', 'table'),
('C.b1', 'TMP-wflpbzdk', 'C(b1)', 'number', 7.5, 8.25, 9, 9.75, 10.5, NULL, 14, true, '', 'b1', 'table'),
('T.b1', 'TMP-wflpbzdk', 'T(b1)', 'number', 7.5, 8.25, 9, 9.75, 10.5, NULL, 15, true, '', 'b1', 'table'),

-- b3 (16-18) - PERHATIAN: tolerance diubah dari Web Off Center (-2.5-2.5) ke Flange Thickness (7.5-10.5)
('H.b3', 'TMP-wflpbzdk', 'H(b3)', 'number', 7.5, 8.25, 9, 9.75, 10.5, NULL, 16, true, '', 'b3', 'table'),
('C.b3', 'TMP-wflpbzdk', 'C(b3)', 'number', 7.5, 8.25, 9, 9.75, 10.5, NULL, 17, true, '', 'b3', 'table'),
('T.b3', 'TMP-wflpbzdk', 'T(b3)', 'number', 7.5, 8.25, 9, 9.75, 10.5, NULL, 18, true, '', 'b3', 'table'),

-- b2 (19-21) - PERHATIAN: tolerance diubah dari Web Off Center (-2.5-2.5) ke Flange Thickness (7.5-10.5)
('H.b2', 'TMP-wflpbzdk', 'H(b2)', 'number', 7.5, 8.25, 9, 9.75, 10.5, NULL, 19, true, '', 'b2', 'table'),
('C.b2', 'TMP-wflpbzdk', 'C(b2)', 'number', 7.5, 8.25, 9, 9.75, 10.5, NULL, 20, true, '', 'b2', 'table'),
('T.b2', 'TMP-wflpbzdk', 'T(b2)', 'number', 7.5, 8.25, 9, 9.75, 10.5, NULL, 21, true, '', 'b2', 'table'),

-- b4 (22-24) - PERHATIAN: tolerance diubah dari Web Off Center (-2.5-2.5) ke Flange Thickness (7.5-10.5)
('H.b4', 'TMP-wflpbzdk', 'H(b4)', 'number', 7.5, 8.25, 9, 9.75, 10.5, NULL, 22, true, '', 'b4', 'table'),
('C.b4', 'TMP-wflpbzdk', 'C(b4)', 'number', 7.5, 8.25, 9, 9.75, 10.5, NULL, 23, true, '', 'b4', 'table'),
('T.b4', 'TMP-wflpbzdk', 'T(b4)', 'number', 7.5, 8.25, 9, 9.75, 10.5, NULL, 24, true, '', 'b4', 'table'),

-- b1-b2/2 (25-27) - Tetap Web Off Center
('H.b1-b2/2', 'TMP-wflpbzdk', 'H(b1-b2/2)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 25, true, '', 'b1-b2/2', 'table'),
('C.b1-b2/2', 'TMP-wflpbzdk', 'C(b1-b2/2)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 26, true, '', 'b1-b2/2', 'table'),
('T.b1-b2/2', 'TMP-wflpbzdk', 'T(b1-b2/2)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 27, true, '', 'b1-b2/2', 'table'),

-- b3-b4/2 (28-30) - Tetap Web Off Center
('H.b3-b4/2', 'TMP-wflpbzdk', 'H(b3-b4/2)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 28, true, '', 'b3-b4/2', 'table'),
('C.b3-b4/2', 'TMP-wflpbzdk', 'C(b3-b4/2)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 29, true, '', 'b3-b4/2', 'table'),
('T.b3-b4/2', 'TMP-wflpbzdk', 'T(b3-b4/2)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 30, true, '', 'b3-b4/2', 'table'),

-- t1 (31-33) - Flange Thickness
('H.t1', 'TMP-wflpbzdk', 'H(t1)', 'number', 7.5, 8.25, 9, 9.75, 10.5, NULL, 31, true, '', 't1', 'table'),
('C.t1', 'TMP-wflpbzdk', 'C(t1)', 'number', 7.5, 8.25, 9, 9.75, 10.5, NULL, 32, true, '', 't1', 'table'),
('T.t1', 'TMP-wflpbzdk', 'T(t1)', 'number', 7.5, 8.25, 9, 9.75, 10.5, NULL, 33, true, '', 't1', 'table'),

-- t3 (34-36) - Flange Thickness
('H.t3', 'TMP-wflpbzdk', 'H(t3)', 'number', 7.5, 8.25, 9, 9.75, 10.5, NULL, 34, true, '', 't3', 'table'),
('C.t3', 'TMP-wflpbzdk', 'C(t3)', 'number', 7.5, 8.25, 9, 9.75, 10.5, NULL, 35, true, '', 't3', 'table'),
('T.t3', 'TMP-wflpbzdk', 'T(t3)', 'number', 7.5, 8.25, 9, 9.75, 10.5, NULL, 36, true, '', 't3', 'table'),

-- t2 (37-39) - Flange Thickness
('H.t2', 'TMP-wflpbzdk', 'H(t2)', 'number', 7.5, 8.25, 9, 9.75, 10.5, NULL, 37, true, '', 't2', 'table'),
('C.t2', 'TMP-wflpbzdk', 'C(t2)', 'number', 7.5, 8.25, 9, 9.75, 10.5, NULL, 38, true, '', 't2', 'table'),
('T.t2', 'TMP-wflpbzdk', 'T(t2)', 'number', 7.5, 8.25, 9, 9.75, 10.5, NULL, 39, true, '', 't2', 'table'),

-- t4 (40-42) - Flange Thickness
('H.t4', 'TMP-wflpbzdk', 'H(t4)', 'number', 7.5, 8.25, 9, 9.75, 10.5, NULL, 40, true, '', 't4', 'table'),
('C.t4', 'TMP-wflpbzdk', 'C(t4)', 'number', 7.5, 8.25, 9, 9.75, 10.5, NULL, 41, true, '', 't4', 'table'),
('T.t4', 'TMP-wflpbzdk', 'T(t4)', 'number', 7.5, 8.25, 9, 9.75, 10.5, NULL, 42, true, '', 't4', 'table'),

-- t5 (43-45) - Web Thickness
('H.t5', 'TMP-wflpbzdk', 'H(t5)', 'number', 5.5, 6.15, 6.8, 7.45, 8.1, NULL, 43, true, '', 't5', 'table'),
('C.t5', 'TMP-wflpbzdk', 'C(t5)', 'number', 5.5, 6.15, 6.8, 7.45, 8.1, NULL, 44, true, '', 't5', 'table'),
('T.t5', 'TMP-wflpbzdk', 'T(t5)', 'number', 5.5, 6.15, 6.8, 7.45, 8.1, NULL, 45, true, '', 't5', 'table'),

-- t6 (NULL) - Web Thickness - order_numb NULL
('H.t6', 'TMP-wflpbzdk', 'H(t6)', 'number', 5.5, 6.15, 6.8, 7.45, 8.1, NULL, NULL, true, '', 't6', 'table'),
('C.t6', 'TMP-wflpbzdk', 'C(t6)', 'number', 5.5, 6.15, 6.8, 7.45, 8.1, NULL, NULL, true, '', 't6', 'table'),
('T.t6', 'TMP-wflpbzdk', 'T(t6)', 'number', 5.5, 6.15, 6.8, 7.45, 8.1, NULL, NULL, true, '', 't6', 'table'),

-- t7 (NULL) - Web Thickness - order_numb NULL
('H.t7', 'TMP-wflpbzdk', 'H(t7)', 'number', 5.5, 6.15, 6.8, 7.45, 8.1, NULL, NULL, true, '', 't7', 'table'),
('C.t7', 'TMP-wflpbzdk', 'C(t7)', 'number', 5.5, 6.15, 6.8, 7.45, 8.1, NULL, NULL, true, '', 't7', 'table'),
('T.t7', 'TMP-wflpbzdk', 'T(t7)', 'number', 5.5, 6.15, 6.8, 7.45, 8.1, NULL, NULL, true, '', 't7', 'table'),

-- FormRight (46-54)
('height.of.flange', 'TMP-wflpbzdk', 'Height of Flange', 'number', 147.5, 148.75, 150, 151.25, 152.5, 0, 46, true, '', 'FormRight', 'Height of Flange'),
('flange.thickness', 'TMP-wflpbzdk', 'Flange Thickness', 'number', 7.5, 8.25, 9, 9.75, 10.5, 0, 47, true, '', 'FormRight', 'Flange Thickness'),
('width.of.web', 'TMP-wflpbzdk', 'Width of Web', 'number', 298, 299, 300, 301, 302, 0, 48, true, '', 'FormRight', 'Width of Web'),
('web.thickness', 'TMP-wflpbzdk', 'Web Thickness', 'number', 5.5, 6.15, 6.8, 7.45, 8.1, 0, 49, true, '', 'FormRight', 'Web Thickness'),
('unit.weight', 'TMP-wflpbzdk', 'Unit Weight (Kgm)', 'number', 35, 35.85, 36.7, 37.55, 38.4, 0, 50, true, '', 'FormRight', 'Unit Weight (Kgm)'),
('radius', 'TMP-wflpbzdk', 'Radius', 'number', 0, 0, 13, 0, 0, 0, 51, true, '', 'FormRight', 'Radius'),
('web.off.center', 'TMP-wflpbzdk', 'Web Off Center', 'number', -2.5, -1.25, 0, 1.25, 2.5, 0, 52, true, '', 'FormRight', 'Web Off Center'),
('os', 'TMP-wflpbzdk', 'OS', 'number', 0, 0, 1.5, 0, 0, 0, 53, true, '', 'FormRight', 'OS'),
('cow', 'TMP-wflpbzdk', 'CoW', 'number', 0, 0, 0, 0, 0, 2, 54, true, '', 'FormRight', 'CoW');

INSERT INTO qc_template_mapping (mapping_id, qc_template_id, group_name, position, order_numb) VALUES
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wflpbzdk', 'Width of Web', 'H-Top', 0),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wflpbzdk', 'Width of Web', 'H-Bottom', 1),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wflpbzdk', 'Height of Flange', 'B1', 0),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wflpbzdk', 'Height of Flange', 'B2', 1),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wflpbzdk', 'Flange Thickness', 't1', 0),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wflpbzdk', 'Flange Thickness', 't2', 1),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wflpbzdk', 'Flange Thickness', 't3', 2),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wflpbzdk', 'Flange Thickness', 't4', 7), -- diubah dari 3 ke 7
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wflpbzdk', 'Flange Thickness', 'b1', 3),  -- b1 dipindah ke Flange Thickness
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wflpbzdk', 'Flange Thickness', 'b2', 4),  -- b2 dipindah ke Flange Thickness
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wflpbzdk', 'Flange Thickness', 'b3', 5),  -- b3 dipindah ke Flange Thickness
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wflpbzdk', 'Flange Thickness', 'b4', 6),  -- b4 dipindah ke Flange Thickness
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wflpbzdk', 'Web Thickness', 't5', 0),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wflpbzdk', 'Web Thickness', 't6', 2), -- t6 order_numb NULL (sesuai data)
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wflpbzdk', 'Web Thickness', 't7', 1), -- t7 order_numb NULL (sesuai data)
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wflpbzdk', 'Web Off Center', 'b1-b2/2', 0), -- order_numb disesuaikan
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wflpbzdk', 'Web Off Center', 'b3-b4/2', 1), -- order_numb disesuaikan
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wflpbzdk', 'Radius', '', 0),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wflpbzdk', 'CoW', '', 0),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wflpbzdk', 'OS', '', 0),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wflpbzdk', 'Unit Weight (Kgm)', '', 0);