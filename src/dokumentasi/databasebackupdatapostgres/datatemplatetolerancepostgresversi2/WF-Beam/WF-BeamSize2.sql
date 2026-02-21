-- Template wf-beam 
INSERT INTO qc_template (qc_template_id, prodtype_id, size_id, profile, std_dimention, brand_merek, specification, name, status, created_by, created_dt, updated_by, updated_dt) VALUES
('TMP-wfbgpzta','WF-BEAM','WF 125X60X6X8','WF 125X60X6X8','125X60X6X8','WF-BEAM 125X60X6X8','WF 125X60X6X8','Template WF-BEAM 125X60X6X8','active','Akun Testing Manajer','2025-11-08 13:00:00','Akun Testing Manajer','2025-11-08 13:00:00');

INSERT INTO qc_template_data (input_code, qc_template_id, label, input_type, min_tolerance, t_lt_50_tolerance, nominal_tolerance, t_gt_50_tolerance, max_tolerance, actual_tolerance, order_numb, enabled, sound, position, group_name) VALUES
-- H-Top (1-3) - Widht of Web = Tinggi Web
('H.H-top','TMP-wfbgpzta','H(H-top)','number',123,124,125,126,127,NULL,1,true,'','H-Top','table'),
('C.H-top','TMP-wfbgpzta','C(H-top)','number',123,124,125,126,127,NULL,2,true,'','H-Top','table'),
('T.H-top','TMP-wfbgpzta','T(H-top)','number',123,124,125,126,127,NULL,3,true,'','H-Top','table'),

-- H-Bottom (4-6) - Widht of Web = Tinggi Web
('H.H-bottom','TMP-wfbgpzta','H(H-bottom)','number',123,124,125,126,127,NULL,4,true,'','H-Bottom','table'),
('C.H-bottom','TMP-wfbgpzta','C(H-bottom)','number',123,124,125,126,127,NULL,5,true,'','H-Bottom','table'),
('T.H-bottom','TMP-wfbgpzta','T(H-bottom)','number',123,124,125,126,127,NULL,6,true,'','H-Bottom','table'),

-- B1 (7-9) - Heigh of Flange = Lebar Kaki
('H.B1','TMP-wfbgpzta','H(B1)','number',58,59,60,61,62,NULL,7,true,'','B1','table'),
('C.B1','TMP-wfbgpzta','C(B1)','number',58,59,60,61,62,NULL,8,true,'','B1','table'),
('T.B1','TMP-wfbgpzta','T(B1)','number',58,59,60,61,62,NULL,9,true,'','B1','table'),

-- B2 (10-12) - Heigh of Flange = Lebar Kaki
('H.B2','TMP-wfbgpzta','H(B2)','number',58,59,60,61,62,NULL,10,true,'','B2','table'),
('C.B2','TMP-wfbgpzta','C(B2)','number',58,59,60,61,62,NULL,11,true,'','B2','table'),
('T.B2','TMP-wfbgpzta','T(B2)','number',58,59,60,61,62,NULL,12,true,'','B2','table'),

-- b1 (13-15) - Flange Thicknees = Tebal Kaki
('H.b1','TMP-wfbgpzta','H(b1)','number',6.5,7.25,8,8.75,9.5,NULL,13,true,'','b1','table'),
('C.b1','TMP-wfbgpzta','C(b1)','number',6.5,7.25,8,8.75,9.5,NULL,14,true,'','b1','table'),
('T.b1','TMP-wfbgpzta','T(b1)','number',6.5,7.25,8,8.75,9.5,NULL,15,true,'','b1','table'),

-- b3 (16-18) - Flange Thicknees = Tebal Kaki
('H.b3','TMP-wfbgpzta','H(b3)','number',6.5,7.25,8,8.75,9.5,NULL,16,true,'','b3','table'),
('C.b3','TMP-wfbgpzta','C(b3)','number',6.5,7.25,8,8.75,9.5,NULL,17,true,'','b3','table'),
('T.b3','TMP-wfbgpzta','T(b3)','number',6.5,7.25,8,8.75,9.5,NULL,18,true,'','b3','table'),

-- b2 (19-21) - Flange Thicknees = Tebal Kaki
('H.b2','TMP-wfbgpzta','H(b2)','number',6.5,7.25,8,8.75,9.5,NULL,19,true,'','b2','table'),
('C.b2','TMP-wfbgpzta','C(b2)','number',6.5,7.25,8,8.75,9.5,NULL,20,true,'','b2','table'),
('T.b2','TMP-wfbgpzta','T(b2)','number',6.5,7.25,8,8.75,9.5,NULL,21,true,'','b2','table'),

-- b4 (22-24) - Flange Thicknees = Tebal Kaki
('H.b4','TMP-wfbgpzta','H(b4)','number',6.5,7.25,8,8.75,9.5,NULL,22,true,'','b4','table'),
('C.b4','TMP-wfbgpzta','C(b4)','number',6.5,7.25,8,8.75,9.5,NULL,23,true,'','b4','table'),
('T.b4','TMP-wfbgpzta','T(b4)','number',6.5,7.25,8,8.75,9.5,NULL,24,true,'','b4','table'),

-- b1-b2/2 (25-27) - Web of Center = WOC
('H.b1-b2/2','TMP-wfbgpzta','H(b1-b2/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,25,true,'','b1-b2/2','table'),
('C.b1-b2/2','TMP-wfbgpzta','C(b1-b2/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,26,true,'','b1-b2/2','table'),
('T.b1-b2/2','TMP-wfbgpzta','T(b1-b2/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,27,true,'','b1-b2/2','table'),

-- b3-b4/2 (28-30) - Web of Center = WOC
('H.b3-b4/2','TMP-wfbgpzta','H(b3-b4/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,28,true,'','b3-b4/2','table'),
('C.b3-b4/2','TMP-wfbgpzta','C(b3-b4/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,29,true,'','b3-b4/2','table'),
('T.b3-b4/2','TMP-wfbgpzta','T(b3-b4/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,30,true,'','b3-b4/2','table'),

-- t1 (31-33) - Flange Thicknees = Tebal Kaki
('H.t1','TMP-wfbgpzta','H(t1)','number',6.5,7.25,8,8.75,9.5,NULL,31,true,'','t1','table'),
('C.t1','TMP-wfbgpzta','C(t1)','number',6.5,7.25,8,8.75,9.5,NULL,32,true,'','t1','table'),
('T.t1','TMP-wfbgpzta','T(t1)','number',6.5,7.25,8,8.75,9.5,NULL,33,true,'','t1','table'),

-- t3 (34-36) - Flange Thicknees = Tebal Kaki
('H.t3','TMP-wfbgpzta','H(t3)','number',6.5,7.25,8,8.75,9.5,NULL,34,true,'','t3','table'),
('C.t3','TMP-wfbgpzta','C(t3)','number',6.5,7.25,8,8.75,9.5,NULL,35,true,'','t3','table'),
('T.t3','TMP-wfbgpzta','T(t3)','number',6.5,7.25,8,8.75,9.5,NULL,36,true,'','t3','table'),

-- t2 (37-39) - Flange Thicknees = Tebal Kaki
('H.t2','TMP-wfbgpzta','H(t2)','number',6.5,7.25,8,8.75,9.5,NULL,37,true,'','t2','table'),
('C.t2','TMP-wfbgpzta','C(t2)','number',6.5,7.25,8,8.75,9.5,NULL,38,true,'','t2','table'),
('T.t2','TMP-wfbgpzta','T(t2)','number',6.5,7.25,8,8.75,9.5,NULL,39,true,'','t2','table'),

-- t4 (40-42) - Flange Thicknees = Tebal Kaki
('H.t4','TMP-wfbgpzta','H(t4)','number',6.5,7.25,8,8.75,9.5,NULL,40,true,'','t4','table'),
('C.t4','TMP-wfbgpzta','C(t4)','number',6.5,7.25,8,8.75,9.5,NULL,41,true,'','t4','table'),
('T.t4','TMP-wfbgpzta','T(t4)','number',6.5,7.25,8,8.75,9.5,NULL,42,true,'','t4','table'),

-- t5 (43-45) - Web Thicknees = Tebal Web
('H.t5','TMP-wfbgpzta','H(t5)','number',5,5.65,6.3,6.95,7.6,NULL,43,true,'','t5','table'),
('C.t5','TMP-wfbgpzta','C(t5)','number',5,5.65,6.3,6.95,7.6,NULL,44,true,'','t5','table'),
('T.t5','TMP-wfbgpzta','T(t5)','number',5,5.65,6.3,6.95,7.6,NULL,45,true,'','t5','table'),

-- t6 (NULL) - Web Thicknees = Tebal Web dengan order_numb NULL
('H.t6','TMP-wfbgpzta','H(t6)','number',5,5.65,6.3,6.95,7.6,NULL,NULL,true,'','t6','table'),
('C.t6','TMP-wfbgpzta','C(t6)','number',5,5.65,6.3,6.95,7.6,NULL,NULL,true,'','t6','table'),
('T.t6','TMP-wfbgpzta','T(t6)','number',5,5.65,6.3,6.95,7.6,NULL,NULL,true,'','t6','table'),

-- t7 (NULL) - Web Thicknees = Tebal Web dengan order_numb NULL
('H.t7','TMP-wfbgpzta','H(t7)','number',5,5.65,6.3,6.95,7.6,NULL,NULL,true,'','t7','table'),
('C.t7','TMP-wfbgpzta','C(t7)','number',5,5.65,6.3,6.95,7.6,NULL,NULL,true,'','t7','table'),
('T.t7','TMP-wfbgpzta','T(t7)','number',5,5.65,6.3,6.95,7.6,NULL,NULL,true,'','t7','table'),

-- FormRight (46-54) 
('height.of.flange','TMP-wfbgpzta','Height of Flange','number',58,59,60,61,62,0,46,true,'','FormRight','Height of Flange'),
('flange.thickness','TMP-wfbgpzta','Flange Thickness','number',6.5,7.25,8,8.75,9.5,0,47,true,'','FormRight','Flange Thickness'),
('width.of.web','TMP-wfbgpzta','Width of Web','number',123,124,125,126,127,0,48,true,'','FormRight','Width of Web'),
('web.thickness','TMP-wfbgpzta','Web Thickness','number',5,5.65,6.3,6.95,7.6,0,49,true,'','FormRight','Web Thickness'),
('unit.weight','TMP-wfbgpzta','Unit Weight (Kgm)','number',12.2,12.65,13.1,13.55,14,0,50,true,'','FormRight','Unit Weight (Kgm)'),
('radius','TMP-wfbgpzta','Radius','number',0,0,8,0,0,0,51,true,'','FormRight','Radius'),
('web.off.center','TMP-wfbgpzta','Web Off Center','number',-2.5,-1.25,0,1.25,2.5,0,52,true,'','FormRight','Web Off Center'),
('os','TMP-wfbgpzta','OS','number',0,0,1.5,0,0,0,53,true,'','FormRight','OS'),
('cow','TMP-wfbgpzta','CoW','number',0,0,0,0,0,2,54,true,'','FormRight','CoW');

INSERT INTO qc_template_mapping (mapping_id, qc_template_id, group_name, position, order_numb) VALUES
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-wfbgpzta', 'Width of Web', 'H-Top', 0),
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-wfbgpzta', 'Width of Web', 'H-Bottom', 1),
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-wfbgpzta', 'Height of Flange', 'B1', 0),
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-wfbgpzta', 'Height of Flange', 'B2', 1),
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-wfbgpzta', 'Flange Thickness', 't1', 0),
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-wfbgpzta', 'Flange Thickness', 't2', 1),
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-wfbgpzta', 'Flange Thickness', 't3', 2),
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-wfbgpzta', 'Flange Thickness', 't4', 7), 
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-wfbgpzta', 'Flange Thickness', 'b1', 3),  
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-wfbgpzta', 'Flange Thickness', 'b2', 4),  
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-wfbgpzta', 'Flange Thickness', 'b3', 5),  
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-wfbgpzta', 'Flange Thickness', 'b4', 6),  
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-wfbgpzta', 'Web Thickness', 't5', 0),
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-wfbgpzta', 'Web Thickness', 't6', 0),
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-wfbgpzta', 'Web Thickness', 't7', 0),
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-wfbgpzta', 'Web Off Center', 'b1-b2/2', 0), 
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-wfbgpzta', 'Web Off Center', 'b3-b4/2', 1), 
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-wfbgpzta', 'Radius', '', 0),
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-wfbgpzta', 'CoW', '', 0),
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-wfbgpzta', 'OS', '', 0),
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-wfbgpzta', 'Unit Weight (Kgm)', '', 0);