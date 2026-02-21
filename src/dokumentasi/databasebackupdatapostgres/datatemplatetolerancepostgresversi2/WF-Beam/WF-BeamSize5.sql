-- Template wf-beam WF 198X99X4.5X7
INSERT INTO qc_template (qc_template_id, prodtype_id, size_id, profile, std_dimention, brand_merek, specification, name, status, created_by, created_dt, updated_by, updated_dt) VALUES
('TMP-wfeiswvd', 'WF-BEAM', 'WF 198X99X4.5X7', 'WF 198X99X4.5X7', '198X99X4.5X7', 'WF-BEAM 198X99X4.5X7', 'WF 198X99X4.5X7', 'Template WF-BEAM 198X99X4.5X7', 'active', 'Akun Testing Manajer', '2025-11-08 13:00:00', 'Akun Testing Manajer', '2025-11-08 13:00:00');

INSERT INTO qc_template_data (input_code, qc_template_id, label, input_type, min_tolerance, t_lt_50_tolerance, nominal_tolerance, t_gt_50_tolerance, max_tolerance, actual_tolerance, order_numb, enabled, sound, position, group_name) VALUES
-- H-Top (1-3) - Widht of Web = Tinggi Web
('H.H-top', 'TMP-wfeiswvd', 'H(H-top)', 'number', 196, 197, 198, 199, 200, NULL, 1, true, '', 'H-Top', 'table'),
('C.H-top', 'TMP-wfeiswvd', 'C(H-top)', 'number', 196, 197, 198, 199, 200, NULL, 2, true, '', 'H-Top', 'table'),
('T.H-top', 'TMP-wfeiswvd', 'T(H-top)', 'number', 196, 197, 198, 199, 200, NULL, 3, true, '', 'H-Top', 'table'),

-- H-Bottom (4-6) - Widht of Web = Tinggi Web
('H.H-bottom', 'TMP-wfeiswvd', 'H(H-bottom)', 'number', 196, 197, 198, 199, 200, NULL, 4, true, '', 'H-Bottom', 'table'),
('C.H-bottom', 'TMP-wfeiswvd', 'C(H-bottom)', 'number', 196, 197, 198, 199, 200, NULL, 5, true, '', 'H-Bottom', 'table'),
('T.H-bottom', 'TMP-wfeiswvd', 'T(H-bottom)', 'number', 196, 197, 198, 199, 200, NULL, 6, true, '', 'H-Bottom', 'table'),

-- B1 (7-9) - Heigh of Flange = Lebar Kaki
('H.B1', 'TMP-wfeiswvd', 'H(B1)', 'number', 97, 98, 99, 100, 101, NULL, 7, true, '', 'B1', 'table'),
('C.B1', 'TMP-wfeiswvd', 'C(B1)', 'number', 97, 98, 99, 100, 101, NULL, 8, true, '', 'B1', 'table'),
('T.B1', 'TMP-wfeiswvd', 'T(B1)', 'number', 97, 98, 99, 100, 101, NULL, 9, true, '', 'B1', 'table'),

-- B2 (10-12) - Heigh of Flange = Lebar Kaki
('H.B2', 'TMP-wfeiswvd', 'H(B2)', 'number', 97, 98, 99, 100, 101, NULL, 10, true, '', 'B2', 'table'),
('C.B2', 'TMP-wfeiswvd', 'C(B2)', 'number', 97, 98, 99, 100, 101, NULL, 11, true, '', 'B2', 'table'),
('T.B2', 'TMP-wfeiswvd', 'T(B2)', 'number', 97, 98, 99, 100, 101, NULL, 12, true, '', 'B2', 'table'),

-- b1 (13-15) - Flange Thicknees = Tebal Kaki
('H.b1', 'TMP-wfeiswvd', 'H(b1)', 'number', 5.5, 6.25, 7, 7.75, 8.5, NULL, 13, true, '', 'b1', 'table'),
('C.b1', 'TMP-wfeiswvd', 'C(b1)', 'number', 5.5, 6.25, 7, 7.75, 8.5, NULL, 14, true, '', 'b1', 'table'),
('T.b1', 'TMP-wfeiswvd', 'T(b1)', 'number', 5.5, 6.25, 7, 7.75, 8.5, NULL, 15, true, '', 'b1', 'table'),

-- b3 (16-18) - Flange Thicknees = Tebal Kaki
('H.b3', 'TMP-wfeiswvd', 'H(b3)', 'number', 5.5, 6.25, 7, 7.75, 8.5, NULL, 16, true, '', 'b3', 'table'),
('C.b3', 'TMP-wfeiswvd', 'C(b3)', 'number', 5.5, 6.25, 7, 7.75, 8.5, NULL, 17, true, '', 'b3', 'table'),
('T.b3', 'TMP-wfeiswvd', 'T(b3)', 'number', 5.5, 6.25, 7, 7.75, 8.5, NULL, 18, true, '', 'b3', 'table'),

-- b2 (19-21) - Flange Thicknees = Tebal Kaki
('H.b2', 'TMP-wfeiswvd', 'H(b2)', 'number', 5.5, 6.25, 7, 7.75, 8.5, NULL, 19, true, '', 'b2', 'table'),
('C.b2', 'TMP-wfeiswvd', 'C(b2)', 'number', 5.5, 6.25, 7, 7.75, 8.5, NULL, 20, true, '', 'b2', 'table'),
('T.b2', 'TMP-wfeiswvd', 'T(b2)', 'number', 5.5, 6.25, 7, 7.75, 8.5, NULL, 21, true, '', 'b2', 'table'),

-- b4 (22-24) - Flange Thicknees = Tebal Kaki
('H.b4', 'TMP-wfeiswvd', 'H(b4)', 'number', 5.5, 6.25, 7, 7.75, 8.5, NULL, 22, true, '', 'b4', 'table'),
('C.b4', 'TMP-wfeiswvd', 'C(b4)', 'number', 5.5, 6.25, 7, 7.75, 8.5, NULL, 23, true, '', 'b4', 'table'),
('T.b4', 'TMP-wfeiswvd', 'T(b4)', 'number', 5.5, 6.25, 7, 7.75, 8.5, NULL, 24, true, '', 'b4', 'table'),

-- b1-b2/2 (25-27) - Web of Center = WOC
('H.b1-b2/2', 'TMP-wfeiswvd', 'H(b1-b2/2)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 25, true, '', 'b1-b2/2', 'table'),
('C.b1-b2/2', 'TMP-wfeiswvd', 'C(b1-b2/2)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 26, true, '', 'b1-b2/2', 'table'),
('T.b1-b2/2', 'TMP-wfeiswvd', 'T(b1-b2/2)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 27, true, '', 'b1-b2/2', 'table'),

-- b3-b4/2 (28-30) - Web of Center = WOC
('H.b3-b4/2', 'TMP-wfeiswvd', 'H(b3-b4/2)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 28, true, '', 'b3-b4/2', 'table'),
('C.b3-b4/2', 'TMP-wfeiswvd', 'C(b3-b4/2)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 29, true, '', 'b3-b4/2', 'table'),
('T.b3-b4/2', 'TMP-wfeiswvd', 'T(b3-b4/2)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 30, true, '', 'b3-b4/2', 'table'),

-- t1 (31-33) - Flange Thicknees = Tebal Kaki
('H.t1', 'TMP-wfeiswvd', 'H(t1)', 'number', 5.5, 6.25, 7, 7.75, 8.5, NULL, 31, true, '', 't1', 'table'),
('C.t1', 'TMP-wfeiswvd', 'C(t1)', 'number', 5.5, 6.25, 7, 7.75, 8.5, NULL, 32, true, '', 't1', 'table'),
('T.t1', 'TMP-wfeiswvd', 'T(t1)', 'number', 5.5, 6.25, 7, 7.75, 8.5, NULL, 33, true, '', 't1', 'table'),

-- t3 (34-36) - Flange Thicknees = Tebal Kaki
('H.t3', 'TMP-wfeiswvd', 'H(t3)', 'number', 5.5, 6.25, 7, 7.75, 8.5, NULL, 34, true, '', 't3', 'table'),
('C.t3', 'TMP-wfeiswvd', 'C(t3)', 'number', 5.5, 6.25, 7, 7.75, 8.5, NULL, 35, true, '', 't3', 'table'),
('T.t3', 'TMP-wfeiswvd', 'T(t3)', 'number', 5.5, 6.25, 7, 7.75, 8.5, NULL, 36, true, '', 't3', 'table'),

-- t2 (37-39) - Flange Thicknees = Tebal Kaki
('H.t2', 'TMP-wfeiswvd', 'H(t2)', 'number', 5.5, 6.25, 7, 7.75, 8.5, NULL, 37, true, '', 't2', 'table'),
('C.t2', 'TMP-wfeiswvd', 'C(t2)', 'number', 5.5, 6.25, 7, 7.75, 8.5, NULL, 38, true, '', 't2', 'table'),
('T.t2', 'TMP-wfeiswvd', 'T(t2)', 'number', 5.5, 6.25, 7, 7.75, 8.5, NULL, 39, true, '', 't2', 'table'),

-- t4 (40-42) - Flange Thicknees = Tebal Kaki
('H.t4', 'TMP-wfeiswvd', 'H(t4)', 'number', 5.5, 6.25, 7, 7.75, 8.5, NULL, 40, true, '', 't4', 'table'),
('C.t4', 'TMP-wfeiswvd', 'C(t4)', 'number', 5.5, 6.25, 7, 7.75, 8.5, NULL, 41, true, '', 't4', 'table'),
('T.t4', 'TMP-wfeiswvd', 'T(t4)', 'number', 5.5, 6.25, 7, 7.75, 8.5, NULL, 42, true, '', 't4', 'table'),

-- t5 (43-45) - Web Thicknees = Tebal Web
('H.t5', 'TMP-wfeiswvd', 'H(t5)', 'number', 3.5, 4.15, 4.8, 5.45, 6.1, NULL, 43, true, '', 't5', 'table'),
('C.t5', 'TMP-wfeiswvd', 'C(t5)', 'number', 3.5, 4.15, 4.8, 5.45, 6.1, NULL, 44, true, '', 't5', 'table'),
('T.t5', 'TMP-wfeiswvd', 'T(t5)', 'number', 3.5, 4.15, 4.8, 5.45, 6.1, NULL, 45, true, '', 't5', 'table'),

-- t6 (NULL) - Web Thicknees = Tebal Web dengan order_numb NULL
('H.t6', 'TMP-wfeiswvd', 'H(t6)', 'number', 3.5, 4.15, 4.8, 5.45, 6.1, NULL, NULL, true, '', 't6', 'table'),
('C.t6', 'TMP-wfeiswvd', 'C(t6)', 'number', 3.5, 4.15, 4.8, 5.45, 6.1, NULL, NULL, true, '', 't6', 'table'),
('T.t6', 'TMP-wfeiswvd', 'T(t6)', 'number', 3.5, 4.15, 4.8, 5.45, 6.1, NULL, NULL, true, '', 't6', 'table'),

-- t7 (NULL) - Web Thicknees = Tebal Web dengan order_numb NULL 
('H.t7', 'TMP-wfeiswvd', 'H(t7)', 'number', 3.5, 4.15, 4.8, 5.45, 6.1, NULL, NULL, true, '', 't7', 'table'),
('C.t7', 'TMP-wfeiswvd', 'C(t7)', 'number', 3.5, 4.15, 4.8, 5.45, 6.1, NULL, NULL, true, '', 't7', 'table'),
('T.t7', 'TMP-wfeiswvd', 'T(t7)', 'number', 3.5, 4.15, 4.8, 5.45, 6.1, NULL, NULL, true, '', 't7', 'table'),

-- FormRight (46-54) 
('height.of.flange', 'TMP-wfeiswvd', 'Height of Flange', 'number', 97, 98, 99, 100, 101, 0, 46, true, '', 'FormRight', 'Height of Flange'),
('flange.thickness', 'TMP-wfeiswvd', 'Flange Thickness', 'number', 5.5, 6.25, 7, 7.75, 8.5, 0, 47, true, '', 'FormRight', 'Flange Thickness'),
('width.of.web', 'TMP-wfeiswvd', 'Width of Web', 'number', 196, 197, 198, 199, 200, 0, 48, true, '', 'FormRight', 'Width of Web'),
('web.thickness', 'TMP-wfeiswvd', 'Web Thickness', 'number', 3.5, 4.15, 4.8, 5.45, 6.1, 0, 49, true, '', 'FormRight', 'Web Thickness'),
('unit.weight', 'TMP-wfeiswvd', 'Unit Weight (Kgm)', 'number', 16.7, 17.25, 17.8, 18.35, 18.9, 0, 50, true, '', 'FormRight', 'Unit Weight (Kgm)'),
('radius', 'TMP-wfeiswvd', 'Radius', 'number', 0, 0, 8, 0, 0, 0, 51, true, '', 'FormRight', 'Radius'),
('web.off.center', 'TMP-wfeiswvd', 'Web Off Center', 'number', -2.5, -1.25, 0, 1.25, 2.5, 0, 52, true, '', 'FormRight', 'Web Off Center'),
('os', 'TMP-wfeiswvd', 'OS', 'number', 0, 0, 1.5, 0, 0, 0, 53, true, '', 'FormRight', 'OS'),
('cow', 'TMP-wfeiswvd', 'CoW', 'number', 0, 0, 0, 0, 0, 2, 54, true, '', 'FormRight', 'CoW');

INSERT INTO qc_template_mapping (mapping_id, qc_template_id, group_name, position, order_numb) VALUES
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfeiswvd', 'Width of Web', 'H-Top', 0),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfeiswvd', 'Width of Web', 'H-Bottom', 1),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfeiswvd', 'Height of Flange', 'B1', 0),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfeiswvd', 'Height of Flange', 'B2', 1),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfeiswvd', 'Flange Thickness', 't1', 0),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfeiswvd', 'Flange Thickness', 't2', 1),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfeiswvd', 'Flange Thickness', 't3', 2),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfeiswvd', 'Flange Thickness', 't4', 3),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfeiswvd', 'Web Thickness', 't5', 0),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfeiswvd', 'Web Thickness', 't6', 1),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfeiswvd', 'Web Thickness', 't7', 2),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfeiswvd', 'Flange Thickness', 'b1', 4), 
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfeiswvd', 'Flange Thickness', 'b2', 5),  
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfeiswvd', 'Flange Thickness', 'b3', 6), 
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfeiswvd', 'Flange Thickness', 'b4', 7),  
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfeiswvd', 'Web Off Center', 'b1-b2/2', 8),  
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfeiswvd', 'Web Off Center', 'b3-b4/2', 9), 
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfeiswvd', 'Radius', '', 0),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfeiswvd', 'CoW', '', 0),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfeiswvd', 'OS', '', 0),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfeiswvd', 'Unit Weight (Kgm)', '', 0);