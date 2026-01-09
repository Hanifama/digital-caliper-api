-- Template h-beam 
INSERT INTO qc_template (qc_template_id, prodtype_id, size_id, profile, std_dimention, brand_merek, specification, name, status, created_by, created_dt, updated_by, updated_dt) VALUES
('TMP-rtxtuzz', 'H-BEAM', 'HB 498X432X45X70', 'HB 498X432X45X70', '498X432X45X70', 'H-BEAM 498X432X45X70', 'HB 498X432X45X70', 'Template HB 498X432X45X70', 'active', 'Akun Testing Manajer', '2025-11-04 16:16:53', 'Akun Testing Manajer', '2025-11-04 16:16:53');

INSERT INTO qc_template_data (input_code, qc_template_id, label, input_type, min_tolerance, t_lt_50_tolerance, nominal_tolerance, t_gt_50_tolerance, max_tolerance, actual_tolerance, order_numb, enabled, sound, position, group_name) VALUES
-- H-Top (1-3)
('H.H-top','TMP-rtxtuzz','H(H-top)','number',495,496.5,498,499.5,501,NULL,1,true,'','H-Top','table'),
('C.H-top','TMP-rtxtuzz','C(H-top)','number',495,496.5,498,499.5,501,NULL,2,true,'','H-Top','table'),
('T.H-top','TMP-rtxtuzz','T(H-top)','number',495,496.5,498,499.5,501,NULL,3,true,'','H-Top','table'),

-- H-Bottom (4-6)
('H.H-bottom','TMP-rtxtuzz','H(H-bottom)','number',495,496.5,498,499.5,501,NULL,4,true,'','H-Bottom','table'),
('C.H-bottom','TMP-rtxtuzz','C(H-bottom)','number',495,496.5,498,499.5,501,NULL,5,true,'','H-Bottom','table'),
('T.H-bottom','TMP-rtxtuzz','T(H-bottom)','number',495,496.5,498,499.5,501,NULL,6,true,'','H-Bottom','table'),

-- B1 (7-9)
('H.B1','TMP-rtxtuzz','H(B1)','number',429,430.5,432,433.5,435,NULL,7,true,'','B1','table'),
('C.B1','TMP-rtxtuzz','C(B1)','number',429,430.5,432,433.5,435,NULL,8,true,'','B1','table'),
('T.B1','TMP-rtxtuzz','T(B1)','number',429,430.5,432,433.5,435,NULL,9,true,'','B1','table'),

-- B2 (10-12)
('H.B2','TMP-rtxtuzz','H(B2)','number',429,430.5,432,433.5,435,NULL,10,true,'','B2','table'),
('C.B2','TMP-rtxtuzz','C(B2)','number',429,430.5,432,433.5,435,NULL,11,true,'','B2','table'),
('T.B2','TMP-rtxtuzz','T(B2)','number',429,430.5,432,433.5,435,NULL,12,true,'','B2','table'),

-- b1 (13-15) - PERHATIAN: tolerance seharusnya 68,69,70,71,72 (sesuai Flange Thickness), tapi di data ini masih -3.5-3.5 (Web Off Center)
('H.b1','TMP-rtxtuzz','H(b1)','number',68,69,70,71,72,NULL,13,true,'','b1','table'),
('C.b1','TMP-rtxtuzz','C(b1)','number',68,69,70,71,72,NULL,14,true,'','b1','table'),
('T.b1','TMP-rtxtuzz','T(b1)','number',68,69,70,71,72,NULL,15,true,'','b1','table'),

-- b3 (16-18) - PERHATIAN: tolerance seharusnya 68,69,70,71,72 (sesuai Flange Thickness), tapi di data ini masih -3.5-3.5 (Web Off Center)
('H.b3','TMP-rtxtuzz','H(b3)','number',68,69,70,71,72,NULL,16,true,'','b3','table'),
('C.b3','TMP-rtxtuzz','C(b3)','number',68,69,70,71,72,NULL,17,true,'','b3','table'),
('T.b3','TMP-rtxtuzz','T(b3)','number',68,69,70,71,72,NULL,18,true,'','b3','table'),

-- b2 (19-21) - PERHATIAN: tolerance seharusnya 68,69,70,71,72 (sesuai Flange Thickness), tapi di data ini masih -3.5-3.5 (Web Off Center)
('H.b2','TMP-rtxtuzz','H(b2)','number',68,69,70,71,72,NULL,19,true,'','b2','table'),
('C.b2','TMP-rtxtuzz','C(b2)','number',68,69,70,71,72,NULL,20,true,'','b2','table'),
('T.b2','TMP-rtxtuzz','T(b2)','number',68,69,70,71,72,NULL,21,true,'','b2','table'),

-- b4 (22-24) - PERHATIAN: tolerance seharusnya 68,69,70,71,72 (sesuai Flange Thickness), tapi di data ini masih -3.5-3.5 (Web Off Center)
('H.b4','TMP-rtxtuzz','H(b4)','number',68,69,70,71,72,NULL,22,true,'','b4','table'),
('C.b4','TMP-rtxtuzz','C(b4)','number',68,69,70,71,72,NULL,23,true,'','b4','table'),
('T.b4','TMP-rtxtuzz','T(b4)','number',68,69,70,71,72,NULL,24,true,'','b4','table'),

-- b1-b2/2 (25-27)
('H.b1-b2/2','TMP-rtxtuzz','H(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,25,true,'','b1-b2/2','table'),
('C.b1-b2/2','TMP-rtxtuzz','C(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,26,true,'','b1-b2/2','table'),
('T.b1-b2/2','TMP-rtxtuzz','T(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,27,true,'','b1-b2/2','table'),

-- b3-b4/2 (28-30)
('H.b3-b4/2','TMP-rtxtuzz','H(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,28,true,'','b3-b4/2','table'),
('C.b3-b4/2','TMP-rtxtuzz','C(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,29,true,'','b3-b4/2','table'),
('T.b3-b4/2','TMP-rtxtuzz','T(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,30,true,'','b3-b4/2','table'),

-- t1 (31-33)
('H.t1','TMP-rtxtuzz','H(t1)','number',68,69,70,71,72,NULL,31,true,'','t1','table'),
('C.t1','TMP-rtxtuzz','C(t1)','number',68,69,70,71,72,NULL,32,true,'','t1','table'),
('T.t1','TMP-rtxtuzz','T(t1)','number',68,69,70,71,72,NULL,33,true,'','t1','table'),

-- t3 (34-36)
('H.t3','TMP-rtxtuzz','H(t3)','number',68,69,70,71,72,NULL,34,true,'','t3','table'),
('C.t3','TMP-rtxtuzz','C(t3)','number',68,69,70,71,72,NULL,35,true,'','t3','table'),
('T.t3','TMP-rtxtuzz','T(t3)','number',68,69,70,71,72,NULL,36,true,'','t3','table'),

-- t2 (37-39)
('H.t2','TMP-rtxtuzz','H(t2)','number',68,69,70,71,72,NULL,37,true,'','t2','table'),
('C.t2','TMP-rtxtuzz','C(t2)','number',68,69,70,71,72,NULL,38,true,'','t2','table'),
('T.t2','TMP-rtxtuzz','T(t2)','number',68,69,70,71,72,NULL,39,true,'','t2','table'),

-- t4 (40-42)
('H.t4','TMP-rtxtuzz','H(t4)','number',68,69,70,71,72,NULL,40,true,'','t4','table'),
('C.t4','TMP-rtxtuzz','C(t4)','number',68,69,70,71,72,NULL,41,true,'','t4','table'),
('T.t4','TMP-rtxtuzz','T(t4)','number',68,69,70,71,72,NULL,42,true,'','t4','table'),

-- t5 (43-45)
('H.t5','TMP-rtxtuzz','H(t5)','number',43,44,45,46,47,NULL,43,true,'','t5','table'),
('C.t5','TMP-rtxtuzz','C(t5)','number',43,44,45,46,47,NULL,44,true,'','t5','table'),
('T.t5','TMP-rtxtuzz','T(t5)','number',43,44,45,46,47,NULL,45,true,'','t5','table'),

-- t6 (NULL) - dengan order_numb NULL
('H.t6','TMP-rtxtuzz','H(t6)','number',43,44,45,46,47,NULL,NULL,true,'','t6','table'),
('C.t6','TMP-rtxtuzz','C(t6)','number',43,44,45,46,47,NULL,NULL,true,'','t6','table'),
('T.t6','TMP-rtxtuzz','T(t6)','number',43,44,45,46,47,NULL,NULL,true,'','t6','table'),

-- t7 (NULL) - dengan order_numb NULL
('H.t7','TMP-rtxtuzz','H(t7)','number',43,44,45,46,47,NULL,NULL,true,'','t7','table'),
('C.t7','TMP-rtxtuzz','C(t7)','number',43,44,45,46,47,NULL,NULL,true,'','t7','table'),
('T.t7','TMP-rtxtuzz','T(t7)','number',43,44,45,46,47,NULL,NULL,true,'','t7','table'),

-- FormRight (46-54)
('height.of.flange','TMP-rtxtuzz','Height of Flange','number',429,430.5,432,433.5,435,0,46,true,'','FormRight','Height of Flange'),
('flange.thickness','TMP-rtxtuzz','Flange Thickness','number',68,69,70,71,72,0,47,true,'','FormRight','Flange Thickness'),
('width.of.web','TMP-rtxtuzz','Width of Web','number',495,496.5,498,499.5,501,0,48,true,'','FormRight','Width of Web'),
('web.thickness','TMP-rtxtuzz','Web Thickness','number',43,44,45,46,47,0,49,true,'','FormRight','Web Thickness'),
('unit.weight','TMP-rtxtuzz','Unit Weight (Kgm)','number',580.8,592.9,605,617.1,629.2,0,50,true,'','FormRight','Unit Weight (Kgm)'),
('radius','TMP-rtxtuzz','Radius','number',0,0,22,0,0,0,51,true,'','FormRight','Radius'),
('web.off.center','TMP-rtxtuzz','Web Off Center','number',-3.5,-1.75,0,1.75,3.5,0,52,true,'','FormRight','Web Off Center'),
('os','TMP-rtxtuzz','OS','number',0,0,5.18,0,0,0,53,true,'','FormRight','OS'),
('cow','TMP-rtxtuzz','CoW','number',0,0,0,0,0,2.5,54,true,'','FormRight','CoW');

INSERT INTO qc_template_mapping (mapping_id, qc_template_id, group_name, position, order_numb) VALUES
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-rtxtuzz', 'Flange Thickness', 't4', 7),
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-rtxtuzz', 'Width of Web', 'H-Bottom', 1),
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-rtxtuzz', 'Flange Thickness', 'b1', 3),  -- b1 dipindah ke Flange Thickness
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-rtxtuzz', 'Flange Thickness', 't1', 0),
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-rtxtuzz', 'Width of Web', 'H-Top', 0),
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-rtxtuzz', 'Flange Thickness', 'b2', 4),  -- b2 dipindah ke Flange Thickness
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-rtxtuzz', 'Flange Thickness', 'b3', 5),  -- b3 dipindah ke Flange Thickness
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-rtxtuzz', 'Flange Thickness', 'b4', 6),  -- b4 dipindah ke Flange Thickness
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-rtxtuzz', 'Flange Thickness', 't2', 1),
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-rtxtuzz', 'Height of Flange', 'B2', 1),
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-rtxtuzz', 'OS', '', 0),
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-rtxtuzz', 'Flange Thickness', 't3', 2),
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-rtxtuzz', 'Radius', '', 0),
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-rtxtuzz', 'Unit Weight (Kgm)', '', 0),
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-rtxtuzz', 'Height of Flange', 'B1', 0),
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-rtxtuzz', 'CoW', '', 0),
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-rtxtuzz', 'Web Thickness', 't5', 0),
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-rtxtuzz', 'Web Thickness', 't6', 0),
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-rtxtuzz', 'Web Thickness', 't7', 0),
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-rtxtuzz', 'Web Off Center', 'b1-b2/2', 0),
(concat('MAP', left(gen_random_uuid()::text, 8)), 'TMP-rtxtuzz', 'Web Off Center', 'b3-b4/2', 1);