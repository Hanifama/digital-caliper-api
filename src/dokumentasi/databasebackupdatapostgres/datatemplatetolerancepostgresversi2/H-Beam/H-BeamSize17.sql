-- Template h-beam 
INSERT INTO qc_template (qc_template_id, prodtype_id, size_id, profile, std_dimention, brand_merek, specification, name, status, created_by, created_dt, updated_by, updated_dt) VALUES
('TMP-rtxtuzf', 'H-BEAM', 'HB 400X408X21X21', 'HB 400X408X21X21', '400X408X21X21', 'H-BEAM 400X408X21X21', 'HB 400X408X21X21', 'Template HB 400X408X21X21', 'active', 'Akun Testing Manajer', '2025-11-04 16:16:53', 'Akun Testing Manajer', '2025-11-04 16:16:53');

INSERT INTO qc_template_data (input_code, qc_template_id, label, input_type, min_tolerance, t_lt_50_tolerance, nominal_tolerance, t_gt_50_tolerance, max_tolerance, actual_tolerance, order_numb, enabled, sound, position, group_name) VALUES
-- H-Top (1-3) - Width of Web = Tinggi Web
('H.H-top','TMP-rtxtuzf','H(H-top)','number',397,398.5,400,401.5,403,NULL,1,true,'','H-Top','table'),
('C.H-top','TMP-rtxtuzf','C(H-top)','number',397,398.5,400,401.5,403,NULL,2,true,'','H-Top','table'),
('T.H-top','TMP-rtxtuzf','T(H-top)','number',397,398.5,400,401.5,403,NULL,3,true,'','H-Top','table'),

-- H-Bottom (4-6) - Width of Web = Tinggi Web
('H.H-bottom','TMP-rtxtuzf','H(H-bottom)','number',397,398.5,400,401.5,403,NULL,4,true,'','H-Bottom','table'),
('C.H-bottom','TMP-rtxtuzf','C(H-bottom)','number',397,398.5,400,401.5,403,NULL,5,true,'','H-Bottom','table'),
('T.H-bottom','TMP-rtxtuzf','T(H-bottom)','number',397,398.5,400,401.5,403,NULL,6,true,'','H-Bottom','table'),

-- B1 (7-9) - Height of Flange = Lebar Kaki
('H.B1','TMP-rtxtuzf','H(B1)','number',405,406.5,408,409.5,411,NULL,7,true,'','B1','table'),
('C.B1','TMP-rtxtuzf','C(B1)','number',405,406.5,408,409.5,411,NULL,8,true,'','B1','table'),
('T.B1','TMP-rtxtuzf','T(B1)','number',405,406.5,408,409.5,411,NULL,9,true,'','B1','table'),

-- B2 (10-12) - Height of Flange = Lebar Kaki
('H.B2','TMP-rtxtuzf','H(B2)','number',405,406.5,408,409.5,411,NULL,10,true,'','B2','table'),
('C.B2','TMP-rtxtuzf','C(B2)','number',405,406.5,408,409.5,411,NULL,11,true,'','B2','table'),
('T.B2','TMP-rtxtuzf','T(B2)','number',405,406.5,408,409.5,411,NULL,12,true,'','B2','table'),

-- b1 (13-15) - Flange Thickness = Tebal Kaki
('H.b1','TMP-rtxtuzf','H(b1)','number',19.5,20.25,21,21.75,22.5,NULL,13,true,'','b1','table'),
('C.b1','TMP-rtxtuzf','C(b1)','number',19.5,20.25,21,21.75,22.5,NULL,14,true,'','b1','table'),
('T.b1','TMP-rtxtuzf','T(b1)','number',19.5,20.25,21,21.75,22.5,NULL,15,true,'','b1','table'),

-- b3 (16-18) - Flange Thickness = Tebal Kaki
('H.b3','TMP-rtxtuzf','H(b3)','number',19.5,20.25,21,21.75,22.5,NULL,16,true,'','b3','table'),
('C.b3','TMP-rtxtuzf','C(b3)','number',19.5,20.25,21,21.75,22.5,NULL,17,true,'','b3','table'),
('T.b3','TMP-rtxtuzf','T(b3)','number',19.5,20.25,21,21.75,22.5,NULL,18,true,'','b3','table'),

-- b2 (19-21) - Flange Thickness = Tebal Kaki
('H.b2','TMP-rtxtuzf','H(b2)','number',19.5,20.25,21,21.75,22.5,NULL,19,true,'','b2','table'),
('C.b2','TMP-rtxtuzf','C(b2)','number',19.5,20.25,21,21.75,22.5,NULL,20,true,'','b2','table'),
('T.b2','TMP-rtxtuzf','T(b2)','number',19.5,20.25,21,21.75,22.5,NULL,21,true,'','b2','table'),

-- b4 (22-24) - Flange Thickness = Tebal Kaki
('H.b4','TMP-rtxtuzf','H(b4)','number',19.5,20.25,21,21.75,22.5,NULL,22,true,'','b4','table'),
('C.b4','TMP-rtxtuzf','C(b4)','number',19.5,20.25,21,21.75,22.5,NULL,23,true,'','b4','table'),
('T.b4','TMP-rtxtuzf','T(b4)','number',19.5,20.25,21,21.75,22.5,NULL,24,true,'','b4','table'),

-- b1-b2/2 (25-27) - Web of Center = WOC
('H.b1-b2/2','TMP-rtxtuzf','H(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,25,true,'','b1-b2/2','table'),
('C.b1-b2/2','TMP-rtxtuzf','C(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,26,true,'','b1-b2/2','table'),
('T.b1-b2/2','TMP-rtxtuzf','T(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,27,true,'','b1-b2/2','table'),

-- b3-b4/2 (28-30) - Web of Center = WOC
('H.b3-b4/2','TMP-rtxtuzf','H(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,28,true,'','b3-b4/2','table'),
('C.b3-b4/2','TMP-rtxtuzf','C(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,29,true,'','b3-b4/2','table'),
('T.b3-b4/2','TMP-rtxtuzf','T(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,30,true,'','b3-b4/2','table'),

-- t1 (31-33) - Flange Thickness = Tebal Kaki
('H.t1','TMP-rtxtuzf','H(t1)','number',19.5,20.25,21,21.75,22.5,NULL,31,true,'','t1','table'),
('C.t1','TMP-rtxtuzf','C(t1)','number',19.5,20.25,21,21.75,22.5,NULL,32,true,'','t1','table'),
('T.t1','TMP-rtxtuzf','T(t1)','number',19.5,20.25,21,21.75,22.5,NULL,33,true,'','t1','table'),

-- t3 (34-36) - Flange Thickness = Tebal Kaki
('H.t3','TMP-rtxtuzf','H(t3)','number',19.5,20.25,21,21.75,22.5,NULL,34,true,'','t3','table'),
('C.t3','TMP-rtxtuzf','C(t3)','number',19.5,20.25,21,21.75,22.5,NULL,35,true,'','t3','table'),
('T.t3','TMP-rtxtuzf','T(t3)','number',19.5,20.25,21,21.75,22.5,NULL,36,true,'','t3','table'),

-- t2 (37-39) - Flange Thickness = Tebal Kaki
('H.t2','TMP-rtxtuzf','H(t2)','number',19.5,20.25,21,21.75,22.5,NULL,37,true,'','t2','table'),
('C.t2','TMP-rtxtuzf','C(t2)','number',19.5,20.25,21,21.75,22.5,NULL,38,true,'','t2','table'),
('T.t2','TMP-rtxtuzf','T(t2)','number',19.5,20.25,21,21.75,22.5,NULL,39,true,'','t2','table'),

-- t4 (40-42) - Flange Thickness = Tebal Kaki
('H.t4','TMP-rtxtuzf','H(t4)','number',19.5,20.25,21,21.75,22.5,NULL,40,true,'','t4','table'),
('C.t4','TMP-rtxtuzf','C(t4)','number',19.5,20.25,21,21.75,22.5,NULL,41,true,'','t4','table'),
('T.t4','TMP-rtxtuzf','T(t4)','number',19.5,20.25,21,21.75,22.5,NULL,42,true,'','t4','table'),

-- t5 (43-45) - Web Thickness = Tebal Web
('H.t5','TMP-rtxtuzf','H(t5)','number',20,20.5,21,21.5,22,NULL,43,true,'','t5','table'),
('C.t5','TMP-rtxtuzf','C(t5)','number',20,20.5,21,21.5,22,NULL,44,true,'','t5','table'),
('T.t5','TMP-rtxtuzf','T(t5)','number',20,20.5,21,21.5,22,NULL,45,true,'','t5','table'),

-- t6 (NULL) - Web Thickness = Tebal Web dengan order_numb NULL
('H.t6','TMP-rtxtuzf','H(t6)','number',20,20.5,21,21.5,22,NULL,NULL,true,'','t6','table'),
('C.t6','TMP-rtxtuzf','C(t6)','number',20,20.5,21,21.5,22,NULL,NULL,true,'','t6','table'),
('T.t6','TMP-rtxtuzf','T(t6)','number',20,20.5,21,21.5,22,NULL,NULL,true,'','t6','table'),

-- t7 (NULL) - Web Thickness = Tebal Web dengan order_numb NULL
('H.t7','TMP-rtxtuzf','H(t7)','number',20,20.5,21,21.5,22,NULL,NULL,true,'','t7','table'),
('C.t7','TMP-rtxtuzf','C(t7)','number',20,20.5,21,21.5,22,NULL,NULL,true,'','t7','table'),
('T.t7','TMP-rtxtuzf','T(t7)','number',20,20.5,21,21.5,22,NULL,NULL,true,'','t7','table'),

-- FormRight (46-54)
('height.of.flange','TMP-rtxtuzf','Height of Flange','number',405,406.5,408,409.5,411,0,46,true,'','FormRight','Height of Flange'),
('flange.thickness','TMP-rtxtuzf','Flange Thickness','number',19.5,20.25,21,21.75,22.5,0,47,true,'','FormRight','Flange Thickness'),
('width.of.web','TMP-rtxtuzf','Width of Web','number',397,398.5,400,401.5,403,0,48,true,'','FormRight','Width of Web'),
('web.thickness','TMP-rtxtuzf','Web Thickness','number',20,20.5,21,21.5,22,0,49,true,'','FormRight','Web Thickness'),
('unit.weight','TMP-rtxtuzf','Unit Weight (Kgm)','number',189.1,193.05,197,200.95,204.9,0,50,true,'','FormRight','Unit Weight (Kgm)'),
('radius','TMP-rtxtuzf','Radius','number',0,0,22,0,0,0,51,true,'','FormRight','Radius'),
('web.off.center','TMP-rtxtuzf','Web Off Center','number',-3.5,-1.75,0,1.75,3.5,0,52,true,'','FormRight','Web Off Center'),
('os','TMP-rtxtuzf','OS','number',0,0,4.90,0,0,0,53,true,'','FormRight','OS'),
('cow','TMP-rtxtuzf','CoW','number',0,0,0,0,0,2.5,54,true,'','FormRight','CoW');

INSERT INTO qc_template_mapping (mapping_id, qc_template_id, group_name, position, order_numb) VALUES
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzf', 'Flange Thickness', 't4', 3),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzf', 'Width of Web', 'H-Bottom', 1),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzf', 'Flange Thickness', 'b1', 4),  
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzf', 'Flange Thickness', 't1', 0),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzf', 'Width of Web', 'H-Top', 0),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzf', 'Flange Thickness', 'b2', 5), 
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzf', 'Flange Thickness', 'b3', 6), 
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzf', 'Flange Thickness', 'b4', 7), 
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzf', 'Flange Thickness', 't2', 1),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzf', 'Height of Flange', 'B2', 1),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzf', 'OS', '', 0),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzf', 'Flange Thickness', 't3', 2),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzf', 'Radius', '', 0),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzf', 'Unit Weight (Kgm)', '', 0),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzf', 'Height of Flange', 'B1', 0),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzf', 'CoW', '', 0),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzf', 'Web Thickness', 't5', 0),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzf', 'Web Thickness', 't6', 8),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzf', 'Web Thickness', 't7', 9),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzf', 'Web Off Center', 'b1-b2/2', 10),
('MAP' || LEFT(REPLACE(gen_random_uuid()::text, '-', ''), 8), 'TMP-rtxtuzf', 'Web Off Center', 'b3-b4/2', 11);