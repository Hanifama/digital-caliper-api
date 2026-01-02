-- Template wf-beam WF 700X300X13X24
INSERT INTO qc_template (qc_template_id, prodtype_id, size_id, profile, std_dimention, brand_merek, specification, name, status, created_by, created_dt, updated_by, updated_dt) VALUES
('TMP-wfwmmjcn','WF-BEAM','WF 700X300X13X24','WF 700X300X13X24','700X300X13X24','WF-BEAM 700X300X13X24','WF 700X300X13X24','Template WF-BEAM 700X300X13X24','active','Akun Testing Manajer','2025-11-08 13:00:00','Akun Testing Manajer','2025-11-08 13:00:00');

INSERT INTO qc_template_data (input_code, qc_template_id, label, input_type, min_tolerance, t_lt_50_tolerance, nominal_tolerance, t_gt_50_tolerance, max_tolerance, actual_tolerance, order_numb, enabled, sound, position, group_name) VALUES
-- H-Top (1-3)
('H.H-top','TMP-wfwmmjcn','H(H-top)','number',696,698,700,702,704,NULL,1,true,'','H-Top','table'),
('C.H-top','TMP-wfwmmjcn','C(H-top)','number',696,698,700,702,704,NULL,2,true,'','H-Top','table'),
('T.H-top','TMP-wfwmmjcn','T(H-top)','number',696,698,700,702,704,NULL,3,true,'','H-Top','table'),

-- H-Bottom (4-6)
('H.H-bottom','TMP-wfwmmjcn','H(H-bottom)','number',696,698,700,702,704,NULL,4,true,'','H-Bottom','table'),
('C.H-bottom','TMP-wfwmmjcn','C(H-bottom)','number',696,698,700,702,704,NULL,5,true,'','H-Bottom','table'),
('T.H-bottom','TMP-wfwmmjcn','T(H-bottom)','number',696,698,700,702,704,NULL,6,true,'','H-Bottom','table'),

-- B1 (7-9)
('H.B1','TMP-wfwmmjcn','H(B1)','number',297,298.5,300,301.5,303,NULL,7,true,'','B1','table'),
('C.B1','TMP-wfwmmjcn','C(B1)','number',297,298.5,300,301.5,303,NULL,8,true,'','B1','table'),
('T.B1','TMP-wfwmmjcn','T(B1)','number',297,298.5,300,301.5,303,NULL,9,true,'','B1','table'),

-- B2 (10-12)
('H.B2','TMP-wfwmmjcn','H(B2)','number',297,298.5,300,301.5,303,NULL,10,true,'','B2','table'),
('C.B2','TMP-wfwmmjcn','C(B2)','number',297,298.5,300,301.5,303,NULL,11,true,'','B2','table'),
('T.B2','TMP-wfwmmjcn','T(B2)','number',297,298.5,300,301.5,303,NULL,12,true,'','B2','table'),

-- b1 (13-15) - dengan tolerance serupa FormRight Web Off Center (-3.5, -1.75, 0, 1.75, 3.5)
('H.b1','TMP-wfwmmjcn','H(b1)','number',-3.5,-1.75,0,1.75,3.5,NULL,13,true,'','b1','table'),
('C.b1','TMP-wfwmmjcn','C(b1)','number',-3.5,-1.75,0,1.75,3.5,NULL,14,true,'','b1','table'),
('T.b1','TMP-wfwmmjcn','T(b1)','number',-3.5,-1.75,0,1.75,3.5,NULL,15,true,'','b1','table'),

-- b3 (16-18) - dengan tolerance serupa FormRight Web Off Center (-3.5, -1.75, 0, 1.75, 3.5)
('H.b3','TMP-wfwmmjcn','H(b3)','number',-3.5,-1.75,0,1.75,3.5,NULL,16,true,'','b3','table'),
('C.b3','TMP-wfwmmjcn','C(b3)','number',-3.5,-1.75,0,1.75,3.5,NULL,17,true,'','b3','table'),
('T.b3','TMP-wfwmmjcn','T(b3)','number',-3.5,-1.75,0,1.75,3.5,NULL,18,true,'','b3','table'),

-- b2 (19-21) - dengan tolerance serupa FormRight Web Off Center (-3.5, -1.75, 0, 1.75, 3.5)
('H.b2','TMP-wfwmmjcn','H(b2)','number',-3.5,-1.75,0,1.75,3.5,NULL,19,true,'','b2','table'),
('C.b2','TMP-wfwmmjcn','C(b2)','number',-3.5,-1.75,0,1.75,3.5,NULL,20,true,'','b2','table'),
('T.b2','TMP-wfwmmjcn','T(b2)','number',-3.5,-1.75,0,1.75,3.5,NULL,21,true,'','b2','table'),

-- b4 (22-24) - dengan tolerance serupa FormRight Web Off Center (-3.5, -1.75, 0, 1.75, 3.5)
('H.b4','TMP-wfwmmjcn','H(b4)','number',-3.5,-1.75,0,1.75,3.5,NULL,22,true,'','b4','table'),
('C.b4','TMP-wfwmmjcn','C(b4)','number',-3.5,-1.75,0,1.75,3.5,NULL,23,true,'','b4','table'),
('T.b4','TMP-wfwmmjcn','T(b4)','number',-3.5,-1.75,0,1.75,3.5,NULL,24,true,'','b4','table'),

-- b1-b2/2 (25-27)
('H.b1-b2/2','TMP-wfwmmjcn','H(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,25,true,'','b1-b2/2','table'),
('C.b1-b2/2','TMP-wfwmmjcn','C(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,26,true,'','b1-b2/2','table'),
('T.b1-b2/2','TMP-wfwmmjcn','T(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,27,true,'','b1-b2/2','table'),

-- b3-b4/2 (28-30)
('H.b3-b4/2','TMP-wfwmmjcn','H(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,28,true,'','b3-b4/2','table'),
('C.b3-b4/2','TMP-wfwmmjcn','C(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,29,true,'','b3-b4/2','table'),
('T.b3-b4/2','TMP-wfwmmjcn','T(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,30,true,'','b3-b4/2','table'),

-- t1 (31-33)
('H.t1','TMP-wfwmmjcn','H(t1)','number',22.5,23.25,24,24.75,25.5,NULL,31,true,'','t1','table'),
('C.t1','TMP-wfwmmjcn','C(t1)','number',22.5,23.25,24,24.75,25.5,NULL,32,true,'','t1','table'),
('T.t1','TMP-wfwmmjcn','T(t1)','number',22.5,23.25,24,24.75,25.5,NULL,33,true,'','t1','table'),

-- t3 (34-36)
('H.t3','TMP-wfwmmjcn','H(t3)','number',22.5,23.25,24,24.75,25.5,NULL,34,true,'','t3','table'),
('C.t3','TMP-wfwmmjcn','C(t3)','number',22.5,23.25,24,24.75,25.5,NULL,35,true,'','t3','table'),
('T.t3','TMP-wfwmmjcn','T(t3)','number',22.5,23.25,24,24.75,25.5,NULL,36,true,'','t3','table'),

-- t2 (37-39)
('H.t2','TMP-wfwmmjcn','H(t2)','number',22.5,23.25,24,24.75,25.5,NULL,37,true,'','t2','table'),
('C.t2','TMP-wfwmmjcn','C(t2)','number',22.5,23.25,24,24.75,25.5,NULL,38,true,'','t2','table'),
('T.t2','TMP-wfwmmjcn','T(t2)','number',22.5,23.25,24,24.75,25.5,NULL,39,true,'','t2','table'),

-- t4 (40-42)
('H.t4','TMP-wfwmmjcn','H(t4)','number',22.5,23.25,24,24.75,25.5,NULL,40,true,'','t4','table'),
('C.t4','TMP-wfwmmjcn','C(t4)','number',22.5,23.25,24,24.75,25.5,NULL,41,true,'','t4','table'),
('T.t4','TMP-wfwmmjcn','T(t4)','number',22.5,23.25,24,24.75,25.5,NULL,42,true,'','t4','table'),

-- t5 (43-45)
('H.t5','TMP-wfwmmjcn','H(t5)','number',12.3,12.65,13,13.35,13.7,NULL,43,true,'','t5','table'),
('C.t5','TMP-wfwmmjcn','C(t5)','number',12.3,12.65,13,13.35,13.7,NULL,44,true,'','t5','table'),
('T.t5','TMP-wfwmmjcn','T(t5)','number',12.3,12.65,13,13.35,13.7,NULL,45,true,'','t5','table'),

-- t6 (NULL) - Web Thickness dengan order_numb NULL
('H.t6','TMP-wfwmmjcn','H(t6)','number',12.3,12.65,13,13.35,13.7,NULL,NULL,true,'','t6','table'),
('C.t6','TMP-wfwmmjcn','C(t6)','number',12.3,12.65,13,13.35,13.7,NULL,NULL,true,'','t6','table'),
('T.t6','TMP-wfwmmjcn','T(t6)','number',12.3,12.65,13,13.35,13.7,NULL,NULL,true,'','t6','table'),

-- t7 (NULL) - Web Thickness dengan order_numb NULL
('H.t7','TMP-wfwmmjcn','H(t7)','number',12.3,12.65,13,13.35,13.7,NULL,NULL,true,'','t7','table'),
('C.t7','TMP-wfwmmjcn','C(t7)','number',12.3,12.65,13,13.35,13.7,NULL,NULL,true,'','t7','table'),
('T.t7','TMP-wfwmmjcn','T(t7)','number',12.3,12.65,13,13.35,13.7,NULL,NULL,true,'','t7','table'),

-- FormRight (46-54)
('height.of.flange','TMP-wfwmmjcn','Height of Flange','number',297,298.5,300,301.5,303,0,46,true,'','FormRight','Height of Flange'),
('flange.thickness','TMP-wfwmmjcn','Flange Thickness','number',22.5,23.25,24,24.75,25.5,0,47,true,'','FormRight','Flange Thickness'),
('width.of.web','TMP-wfwmmjcn','Width of Web','number',696,698,700,702,704,0,48,true,'','FormRight','Width of Web'),
('web.thickness','TMP-wfwmmjcn','Web Thickness','number',12.3,12.65,13,13.35,13.7,0,49,true,'','FormRight','Web Thickness'),
('unit.weight','TMP-wfwmmjcn','Unit Weight (Kgm)','number',174.7,178.35,182,185.65,189.3,0,50,true,'','FormRight','Unit Weight (Kgm)'),
('radius','TMP-wfwmmjcn','Radius','number',0,0,18,0,0,0,51,true,'','FormRight','Radius'),
('web.off.center','TMP-wfwmmjcn','Web Off Center','number',-3.5,-1.75,0,1.75,3.5,0,52,true,'','FormRight','Web Off Center'),
('os','TMP-wfwmmjcn','OS','number',0,0,3.6,0,0,0,53,true,'','FormRight','OS'),
('cow','TMP-wfwmmjcn','CoW','number',0,0,0,0,0,2.5,54,true,'','FormRight','CoW');

INSERT INTO qc_template_mapping (mapping_id, qc_template_id, group_name, position, order_numb) VALUES
(CONCAT('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfwmmjcn', 'Width of Web', 'H-Top', 0),
(CONCAT('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfwmmjcn', 'Width of Web', 'H-Bottom', 1),
(CONCAT('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfwmmjcn', 'Height of Flange', 'B1', 0),
(CONCAT('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfwmmjcn', 'Height of Flange', 'B2', 1),
(CONCAT('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfwmmjcn', 'Flange Thickness', 't1', 0),
(CONCAT('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfwmmjcn', 'Flange Thickness', 't2', 1),
(CONCAT('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfwmmjcn', 'Flange Thickness', 't3', 2),
(CONCAT('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfwmmjcn', 'Flange Thickness', 't4', 3),
(CONCAT('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfwmmjcn', 'Web Thickness', 't5', 0),
(CONCAT('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfwmmjcn', 'Web Thickness', 't6', 1),
(CONCAT('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfwmmjcn', 'Web Thickness', 't7', 2),
(CONCAT('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfwmmjcn', 'Web Off Center', 'b1', 0),
(CONCAT('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfwmmjcn', 'Web Off Center', 'b2', 1),
(CONCAT('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfwmmjcn', 'Web Off Center', 'b3', 2),
(CONCAT('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfwmmjcn', 'Web Off Center', 'b4', 3),
(CONCAT('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfwmmjcn', 'Web Off Center', 'b1-b2/2', 4),
(CONCAT('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfwmmjcn', 'Web Off Center', 'b3-b4/2', 5),
(CONCAT('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfwmmjcn', 'Radius', '', 0),
(CONCAT('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfwmmjcn', 'CoW', '', 0),
(CONCAT('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfwmmjcn', 'OS', '', 0),
(CONCAT('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfwmmjcn', 'Unit Weight (Kgm)', '', 0);