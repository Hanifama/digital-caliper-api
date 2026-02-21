-- Template h-beam 
INSERT INTO qc_template (qc_template_id, prodtype_id, size_id, profile, std_dimention, brand_merek, specification, name, status, created_by, created_dt, updated_by, updated_dt) VALUES
('TMP-rtxtuzd', 'H-BEAM', 'HB 394X398X11X18', 'HB 394X398X11X18', '394X398X11X18', 'H-BEAM 394X398X11X18', 'HB 394X398X11X18', 'Template HB 394X398X11X18', 'active', 'Akun Testing Manajer', '2025-11-04 16:16:53', 'Akun Testing Manajer', '2025-11-04 16:16:53');

INSERT INTO qc_template_data (input_code, qc_template_id, label, input_type, min_tolerance, t_lt_50_tolerance, nominal_tolerance, t_gt_50_tolerance, max_tolerance, actual_tolerance, order_numb, enabled, sound, position, group_name) VALUES
-- H-Top (1-3) - Width of Web = Tinggi Web
('H.H-top','TMP-rtxtuzd','H(H-top)','number',392,393,394,395,396,NULL,1,true,'','H-Top','table'),
('C.H-top','TMP-rtxtuzd','C(H-top)','number',392,393,394,395,396,NULL,2,true,'','H-Top','table'),
('T.H-top','TMP-rtxtuzd','T(H-top)','number',392,393,394,395,396,NULL,3,true,'','H-Top','table'),

-- H-Bottom (4-6) - Width of Web = Tinggi Web
('H.H-bottom','TMP-rtxtuzd','H(H-bottom)','number',392,393,394,395,396,NULL,4,true,'','H-Bottom','table'),
('C.H-bottom','TMP-rtxtuzd','C(H-bottom)','number',392,393,394,395,396,NULL,5,true,'','H-Bottom','table'),
('T.H-bottom','TMP-rtxtuzd','T(H-bottom)','number',392,393,394,395,396,NULL,6,true,'','H-Bottom','table'),

-- B1 (7-9) - Height of Flange = Lebar Kaki
('H.B1','TMP-rtxtuzd','H(B1)','number',395,396.5,398,399.5,401,NULL,7,true,'','B1','table'),
('C.B1','TMP-rtxtuzd','C(B1)','number',395,396.5,398,399.5,401,NULL,8,true,'','B1','table'),
('T.B1','TMP-rtxtuzd','T(B1)','number',395,396.5,398,399.5,401,NULL,9,true,'','B1','table'),

-- B2 (10-12) - Height of Flange = Lebar Kaki
('H.B2','TMP-rtxtuzd','H(B2)','number',395,396.5,398,399.5,401,NULL,10,true,'','B2','table'),
('C.B2','TMP-rtxtuzd','C(B2)','number',395,396.5,398,399.5,401,NULL,11,true,'','B2','table'),
('T.B2','TMP-rtxtuzd','T(B2)','number',395,396.5,398,399.5,401,NULL,12,true,'','B2','table'),

-- b1 (13-15) - Flange Thickness = Tebal Kaki
('H.b1','TMP-rtxtuzd','H(b1)','number',16.5,17.25,18,18.75,19.5,NULL,13,true,'','b1','table'),
('C.b1','TMP-rtxtuzd','C(b1)','number',16.5,17.25,18,18.75,19.5,NULL,14,true,'','b1','table'),
('T.b1','TMP-rtxtuzd','T(b1)','number',16.5,17.25,18,18.75,19.5,NULL,15,true,'','b1','table'),

-- b3 (16-18) - Flange Thickness = Tebal Kaki
('H.b3','TMP-rtxtuzd','H(b3)','number',16.5,17.25,18,18.75,19.5,NULL,16,true,'','b3','table'),
('C.b3','TMP-rtxtuzd','C(b3)','number',16.5,17.25,18,18.75,19.5,NULL,17,true,'','b3','table'),
('T.b3','TMP-rtxtuzd','T(b3)','number',16.5,17.25,18,18.75,19.5,NULL,18,true,'','b3','table'),

-- b2 (19-21) - Flange Thickness = Tebal Kaki
('H.b2','TMP-rtxtuzd','H(b2)','number',16.5,17.25,18,18.75,19.5,NULL,19,true,'','b2','table'),
('C.b2','TMP-rtxtuzd','C(b2)','number',16.5,17.25,18,18.75,19.5,NULL,20,true,'','b2','table'),
('T.b2','TMP-rtxtuzd','T(b2)','number',16.5,17.25,18,18.75,19.5,NULL,21,true,'','b2','table'),

-- b4 (22-24) - Flange Thickness = Tebal Kaki
('H.b4','TMP-rtxtuzd','H(b4)','number',16.5,17.25,18,18.75,19.5,NULL,22,true,'','b4','table'),
('C.b4','TMP-rtxtuzd','C(b4)','number',16.5,17.25,18,18.75,19.5,NULL,23,true,'','b4','table'),
('T.b4','TMP-rtxtuzd','T(b4)','number',16.5,17.25,18,18.75,19.5,NULL,24,true,'','b4','table'),

-- b1-b2/2 (25-27) - Web of Center = WOC 
('H.b1-b2/2','TMP-rtxtuzd','H(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,25,true,'','b1-b2/2','table'),
('C.b1-b2/2','TMP-rtxtuzd','C(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,26,true,'','b1-b2/2','table'),
('T.b1-b2/2','TMP-rtxtuzd','T(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,27,true,'','b1-b2/2','table'),

-- b3-b4/2 (28-30) - Web of Center = WOC 
('H.b3-b4/2','TMP-rtxtuzd','H(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,28,true,'','b3-b4/2','table'),
('C.b3-b4/2','TMP-rtxtuzd','C(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,29,true,'','b3-b4/2','table'),
('T.b3-b4/2','TMP-rtxtuzd','T(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,30,true,'','b3-b4/2','table'),

-- t1 (31-33) - Flange Thickness = Tebal Kaki
('H.t1','TMP-rtxtuzd','H(t1)','number',16.5,17.25,18,18.75,19.5,NULL,31,true,'','t1','table'),
('C.t1','TMP-rtxtuzd','C(t1)','number',16.5,17.25,18,18.75,19.5,NULL,32,true,'','t1','table'),
('T.t1','TMP-rtxtuzd','T(t1)','number',16.5,17.25,18,18.75,19.5,NULL,33,true,'','t1','table'),

-- t3 (34-36) - Flange Thickness = Tebal Kaki
('H.t3','TMP-rtxtuzd','H(t3)','number',16.5,17.25,18,18.75,19.5,NULL,34,true,'','t3','table'),
('C.t3','TMP-rtxtuzd','C(t3)','number',16.5,17.25,18,18.75,19.5,NULL,35,true,'','t3','table'),
('T.t3','TMP-rtxtuzd','T(t3)','number',16.5,17.25,18,18.75,19.5,NULL,36,true,'','t3','table'),

-- t2 (37-39) - Flange Thickness = Tebal Kaki
('H.t2','TMP-rtxtuzd','H(t2)','number',16.5,17.25,18,18.75,19.5,NULL,37,true,'','t2','table'),
('C.t2','TMP-rtxtuzd','C(t2)','number',16.5,17.25,18,18.75,19.5,NULL,38,true,'','t2','table'),
('T.t2','TMP-rtxtuzd','T(t2)','number',16.5,17.25,18,18.75,19.5,NULL,39,true,'','t2','table'),

-- t4 (40-42) - Flange Thickness = Tebal Kaki
('H.t4','TMP-rtxtuzd','H(t4)','number',16.5,17.25,18,18.75,19.5,NULL,40,true,'','t4','table'),
('C.t4','TMP-rtxtuzd','C(t4)','number',16.5,17.25,18,18.75,19.5,NULL,41,true,'','t4','table'),
('T.t4','TMP-rtxtuzd','T(t4)','number',16.5,17.25,18,18.75,19.5,NULL,42,true,'','t4','table'),

-- t5 (43-45) - Web Thickness = Tebal Web
('H.t5','TMP-rtxtuzd','H(t5)','number',10.3,10.65,11,11.35,11.7,NULL,43,true,'','t5','table'),
('C.t5','TMP-rtxtuzd','C(t5)','number',10.3,10.65,11,11.35,11.7,NULL,44,true,'','t5','table'),
('T.t5','TMP-rtxtuzd','T(t5)','number',10.3,10.65,11,11.35,11.7,NULL,45,true,'','t5','table'),

-- t6 (NULL) - Web Thickness = Tebal Web dengan order_numb NULL
('H.t6','TMP-rtxtuzd','H(t6)','number',10.3,10.65,11,11.35,11.7,NULL,NULL,true,'','t6','table'),
('C.t6','TMP-rtxtuzd','C(t6)','number',10.3,10.65,11,11.35,11.7,NULL,NULL,true,'','t6','table'),
('T.t6','TMP-rtxtuzd','T(t6)','number',10.3,10.65,11,11.35,11.7,NULL,NULL,true,'','t6','table'),

-- t7 (NULL) - Web Thickness = Tebal Web dengan order_numb NULL
('H.t7','TMP-rtxtuzd','H(t7)','number',10.3,10.65,11,11.35,11.7,NULL,NULL,true,'','t7','table'),
('C.t7','TMP-rtxtuzd','C(t7)','number',10.3,10.65,11,11.35,11.7,NULL,NULL,true,'','t7','table'),
('T.t7','TMP-rtxtuzd','T(t7)','number',10.3,10.65,11,11.35,11.7,NULL,NULL,true,'','t7','table'),

-- FormRight (46-54)
('height.of.flange','TMP-rtxtuzd','Height of Flange','number',395,396.5,398,399.5,401,0,46,true,'','FormRight','Height of Flange'),
('flange.thickness','TMP-rtxtuzd','Flange Thickness','number',16.5,17.25,18,18.75,19.5,0,47,true,'','FormRight','Flange Thickness'),
('width.of.web','TMP-rtxtuzd','Width of Web','number',392,393,394,395,396,0,48,true,'','FormRight','Width of Web'),
('web.thickness','TMP-rtxtuzd','Web Thickness','number',10.3,10.65,11,11.35,11.7,0,49,true,'','FormRight','Web Thickness'),
('unit.weight','TMP-rtxtuzd','Unit Weight (Kgm)','number',141.1,144.05,147,149.95,152.9,0,50,true,'','FormRight','Unit Weight (Kgm)'),
('radius','TMP-rtxtuzd','Radius','number',0,0,22,0,0,0,51,true,'','FormRight','Radius'),
('web.off.center','TMP-rtxtuzd','Web Off Center','number',-3.5,-1.75,0,1.75,3.5,0,52,true,'','FormRight','Web Off Center'),
('os','TMP-rtxtuzd','OS','number',0,0,4.78,0,0,0,53,true,'','FormRight','OS'),
('cow','TMP-rtxtuzd','CoW','number',0,0,0,0,0,2,54,true,'','FormRight','CoW');

INSERT INTO qc_template_mapping (mapping_id, qc_template_id, group_name, position, order_numb) VALUES
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzd', 'Flange Thickness', 't4', 3),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzd', 'Width of Web', 'H-Bottom', 1),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzd', 'Flange Thickness', 'b1', 4),  
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzd', 'Flange Thickness', 't1', 0),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzd', 'Width of Web', 'H-Top', 0),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzd', 'Flange Thickness', 'b2', 5),  
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzd', 'Flange Thickness', 'b3', 6),  
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzd', 'Flange Thickness', 'b4', 7),  
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzd', 'Flange Thickness', 't2', 1),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzd', 'Height of Flange', 'B2', 1),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzd', 'OS', '', 0),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzd', 'Flange Thickness', 't3', 2),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzd', 'Radius', '', 0),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzd', 'Unit Weight (Kgm)', '', 0),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzd', 'Height of Flange', 'B1', 0),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzd', 'CoW', '', 0),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzd', 'Web Thickness', 't5', 0),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzd', 'Web Thickness', 't6', 8),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzd', 'Web Thickness', 't7', 9),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzd', 'Web Off Center', 'b1-b2/2', 10),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzd', 'Web Off Center', 'b3-b4/2', 11);