-- Template h-beam 
INSERT INTO qc_template (qc_template_id, prodtype_id, size_id, profile, std_dimention, brand_merek, specification, name, status, created_by, created_dt, updated_by, updated_dt) VALUES
('TMP-rtxtuzg', 'H-BEAM', 'HB 414X405X18X28', 'HB 414X405X18X28', '414X405X18X28', 'H-BEAM 414X405X18X28', 'HB 414X405X18X28', 'Template HB 414X405X18X28', 'active', 'Akun Testing Manajer', '2025-11-04 16:16:53', 'Akun Testing Manajer', '2025-11-04 16:16:53');

INSERT INTO qc_template_data (input_code, qc_template_id, label, input_type, min_tolerance, t_lt_50_tolerance, nominal_tolerance, t_gt_50_tolerance, max_tolerance, actual_tolerance, order_numb, enabled, sound, position, group_name) VALUES
-- H-Top (1-3) - Width of Web = Tinggi Web
('H.H-top','TMP-rtxtuzg','H(H-top)','number',411,412.5,414,415.5,417,NULL,1,true,'','H-Top','table'),
('C.H-top','TMP-rtxtuzg','C(H-top)','number',411,412.5,414,415.5,417,NULL,2,true,'','H-Top','table'),
('T.H-top','TMP-rtxtuzg','T(H-top)','number',411,412.5,414,415.5,417,NULL,3,true,'','H-Top','table'),

-- H-Bottom (4-6) - Width of Web = Tinggi Web
('H.H-bottom','TMP-rtxtuzg','H(H-bottom)','number',411,412.5,414,415.5,417,NULL,4,true,'','H-Bottom','table'),
('C.H-bottom','TMP-rtxtuzg','C(H-bottom)','number',411,412.5,414,415.5,417,NULL,5,true,'','H-Bottom','table'),
('T.H-bottom','TMP-rtxtuzg','T(H-bottom)','number',411,412.5,414,415.5,417,NULL,6,true,'','H-Bottom','table'),

-- B1 (7-9) - Height of Flange = Lebar Kaki
('H.B1','TMP-rtxtuzg','H(B1)','number',402,403.5,405,406.5,408,NULL,7,true,'','B1','table'),
('C.B1','TMP-rtxtuzg','C(B1)','number',402,403.5,405,406.5,408,NULL,8,true,'','B1','table'),
('T.B1','TMP-rtxtuzg','T(B1)','number',402,403.5,405,406.5,408,NULL,9,true,'','B1','table'),

-- B2 (10-12) - Height of Flange = Lebar Kaki
('H.B2','TMP-rtxtuzg','H(B2)','number',402,403.5,405,406.5,408,NULL,10,true,'','B2','table'),
('C.B2','TMP-rtxtuzg','C(B2)','number',402,403.5,405,406.5,408,NULL,11,true,'','B2','table'),
('T.B2','TMP-rtxtuzg','T(B2)','number',402,403.5,405,406.5,408,NULL,12,true,'','B2','table'),

-- b1 (13-15) - Flange Thickness = Tebal Kaki
('H.b1','TMP-rtxtuzg','H(b1)','number',26.3,27.15,28,28.85,29.7,NULL,13,true,'','b1','table'),
('C.b1','TMP-rtxtuzg','C(b1)','number',26.3,27.15,28,28.85,29.7,NULL,14,true,'','b1','table'),
('T.b1','TMP-rtxtuzg','T(b1)','number',26.3,27.15,28,28.85,29.7,NULL,15,true,'','b1','table'),

-- b3 (16-18) - Flange Thickness = Tebal Kaki
('H.b3','TMP-rtxtuzg','H(b3)','number',26.3,27.15,28,28.85,29.7,NULL,16,true,'','b3','table'),
('C.b3','TMP-rtxtuzg','C(b3)','number',26.3,27.15,28,28.85,29.7,NULL,17,true,'','b3','table'),
('T.b3','TMP-rtxtuzg','T(b3)','number',26.3,27.15,28,28.85,29.7,NULL,18,true,'','b3','table'),

-- b2 (19-21) - Flange Thickness = Tebal Kaki
('H.b2','TMP-rtxtuzg','H(b2)','number',26.3,27.15,28,28.85,29.7,NULL,19,true,'','b2','table'),
('C.b2','TMP-rtxtuzg','C(b2)','number',26.3,27.15,28,28.85,29.7,NULL,20,true,'','b2','table'),
('T.b2','TMP-rtxtuzg','T(b2)','number',26.3,27.15,28,28.85,29.7,NULL,21,true,'','b2','table'),

-- b4 (22-24) - Flange Thickness = Tebal Kaki
('H.b4','TMP-rtxtuzg','H(b4)','number',26.3,27.15,28,28.85,29.7,NULL,22,true,'','b4','table'),
('C.b4','TMP-rtxtuzg','C(b4)','number',26.3,27.15,28,28.85,29.7,NULL,23,true,'','b4','table'),
('T.b4','TMP-rtxtuzg','T(b4)','number',26.3,27.15,28,28.85,29.7,NULL,24,true,'','b4','table'),

-- b1-b2/2 (25-27) - Web of Center = WOC
('H.b1-b2/2','TMP-rtxtuzg','H(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,25,true,'','b1-b2/2','table'),
('C.b1-b2/2','TMP-rtxtuzg','C(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,26,true,'','b1-b2/2','table'),
('T.b1-b2/2','TMP-rtxtuzg','T(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,27,true,'','b1-b2/2','table'),

-- b3-b4/2 (28-30) - Web of Center = WOC
('H.b3-b4/2','TMP-rtxtuzg','H(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,28,true,'','b3-b4/2','table'),
('C.b3-b4/2','TMP-rtxtuzg','C(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,29,true,'','b3-b4/2','table'),
('T.b3-b4/2','TMP-rtxtuzg','T(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,30,true,'','b3-b4/2','table'),

-- t1 (31-33) - Flange Thickness = Tebal Kaki
('H.t1','TMP-rtxtuzg','H(t1)','number',26.3,27.15,28,28.85,29.7,NULL,31,true,'','t1','table'),
('C.t1','TMP-rtxtuzg','C(t1)','number',26.3,27.15,28,28.85,29.7,NULL,32,true,'','t1','table'),
('T.t1','TMP-rtxtuzg','T(t1)','number',26.3,27.15,28,28.85,29.7,NULL,33,true,'','t1','table'),

-- t3 (34-36) - Flange Thickness = Tebal Kaki
('H.t3','TMP-rtxtuzg','H(t3)','number',26.3,27.15,28,28.85,29.7,NULL,34,true,'','t3','table'),
('C.t3','TMP-rtxtuzg','C(t3)','number',26.3,27.15,28,28.85,29.7,NULL,35,true,'','t3','table'),
('T.t3','TMP-rtxtuzg','T(t3)','number',26.3,27.15,28,28.85,29.7,NULL,36,true,'','t3','table'),

-- t2 (37-39) - Flange Thickness = Tebal Kaki
('H.t2','TMP-rtxtuzg','H(t2)','number',26.3,27.15,28,28.85,29.7,NULL,37,true,'','t2','table'),
('C.t2','TMP-rtxtuzg','C(t2)','number',26.3,27.15,28,28.85,29.7,NULL,38,true,'','t2','table'),
('T.t2','TMP-rtxtuzg','T(t2)','number',26.3,27.15,28,28.85,29.7,NULL,39,true,'','t2','table'),

-- t4 (40-42) - Flange Thickness = Tebal Kaki
('H.t4','TMP-rtxtuzg','H(t4)','number',26.3,27.15,28,28.85,29.7,NULL,40,true,'','t4','table'),
('C.t4','TMP-rtxtuzg','C(t4)','number',26.3,27.15,28,28.85,29.7,NULL,41,true,'','t4','table'),
('T.t4','TMP-rtxtuzg','T(t4)','number',26.3,27.15,28,28.85,29.7,NULL,42,true,'','t4','table'),

-- t5 (43-45) - Web Thickness = Tebal Web
('H.t5','TMP-rtxtuzg','H(t5)','number',17,17.5,18,18.5,19,NULL,43,true,'','t5','table'),
('C.t5','TMP-rtxtuzg','C(t5)','number',17,17.5,18,18.5,19,NULL,44,true,'','t5','table'),
('T.t5','TMP-rtxtuzg','T(t5)','number',17,17.5,18,18.5,19,NULL,45,true,'','t5','table'),

-- t6 (NULL) - Web Thickness = Tebal Web dengan order_numb NULL
('H.t6','TMP-rtxtuzg','H(t6)','number',17,17.5,18,18.5,19,NULL,NULL,true,'','t6','table'),
('C.t6','TMP-rtxtuzg','C(t6)','number',17,17.5,18,18.5,19,NULL,NULL,true,'','t6','table'),
('T.t6','TMP-rtxtuzg','T(t6)','number',17,17.5,18,18.5,19,NULL,NULL,true,'','t6','table'),

-- t7 (NULL) - Web Thickness = Tebal Web dengan order_numb NULL
('H.t7','TMP-rtxtuzg','H(t7)','number',17,17.5,18,18.5,19,NULL,NULL,true,'','t7','table'),
('C.t7','TMP-rtxtuzg','C(t7)','number',17,17.5,18,18.5,19,NULL,NULL,true,'','t7','table'),
('T.t7','TMP-rtxtuzg','T(t7)','number',17,17.5,18,18.5,19,NULL,NULL,true,'','t7','table'),

-- FormRight (52-60)
('height.of.flange','TMP-rtxtuzg','Height of Flange','number',402,403.5,405,406.5,408,0,52,true,'','FormRight','Height of Flange'),
('flange.thickness','TMP-rtxtuzg','Flange Thickness','number',26.3,27.15,28,28.85,29.7,0,53,true,'','FormRight','Flange Thickness'),
('width.of.web','TMP-rtxtuzg','Width of Web','number',411,412.5,414,415.5,417,0,54,true,'','FormRight','Width of Web'),
('web.thickness','TMP-rtxtuzg','Web Thickness','number',17,17.5,18,18.5,19,0,55,true,'','FormRight','Web Thickness'),
('unit.weight','TMP-rtxtuzg','Unit Weight (Kgm)','number',222.7,226.85,232,237.15,241.3,0,56,true,'','FormRight','Unit Weight (Kgm)'),
('radius','TMP-rtxtuzg','Radius','number',0,0,22,0,0,0,57,true,'','FormRight','Radius'),
('web.off.center','TMP-rtxtuzg','Web Off Center','number',-3.5,-1.75,0,1.75,3.5,0,58,true,'','FormRight','Web Off Center'),
('os','TMP-rtxtuzg','OS','number',0,0,4.86,0,0,0,59,true,'','FormRight','OS'),
('cow','TMP-rtxtuzg','CoW','number',0,0,0,0,0,2.5,60,true,'','FormRight','CoW');

INSERT INTO qc_template_mapping (mapping_id, qc_template_id, group_name, position, order_numb) VALUES
('MAP' || LEFT(md5(random()::text), 8), 'TMP-rtxtuzg', 'Flange Thickness', 't4', 3),
('MAP' || LEFT(md5(random()::text), 8), 'TMP-rtxtuzg', 'Width of Web', 'H-Bottom', 1),
('MAP' || LEFT(md5(random()::text), 8), 'TMP-rtxtuzg', 'Flange Thickness', 'b1', 4), 
('MAP' || LEFT(md5(random()::text), 8), 'TMP-rtxtuzg', 'Flange Thickness', 't1', 0),
('MAP' || LEFT(md5(random()::text), 8), 'TMP-rtxtuzg', 'Width of Web', 'H-Top', 0),
('MAP' || LEFT(md5(random()::text), 8), 'TMP-rtxtuzg', 'Flange Thickness', 'b2', 5), 
('MAP' || LEFT(md5(random()::text), 8), 'TMP-rtxtuzg', 'Flange Thickness', 'b3', 6), 
('MAP' || LEFT(md5(random()::text), 8), 'TMP-rtxtuzg', 'Flange Thickness', 'b4', 7), 
('MAP' || LEFT(md5(random()::text), 8), 'TMP-rtxtuzg', 'Flange Thickness', 't2', 1),
('MAP' || LEFT(md5(random()::text), 8), 'TMP-rtxtuzg', 'Height of Flange', 'B2', 1),
('MAP' || LEFT(md5(random()::text), 8), 'TMP-rtxtuzg', 'OS', '', 0),
('MAP' || LEFT(md5(random()::text), 8), 'TMP-rtxtuzg', 'Flange Thickness', 't3', 2),
('MAP' || LEFT(md5(random()::text), 8), 'TMP-rtxtuzg', 'Radius', '', 0),
('MAP' || LEFT(md5(random()::text), 8), 'TMP-rtxtuzg', 'Unit Weight (Kgm)', '', 0),
('MAP' || LEFT(md5(random()::text), 8), 'TMP-rtxtuzg', 'Height of Flange', 'B1', 0),
('MAP' || LEFT(md5(random()::text), 8), 'TMP-rtxtuzg', 'CoW', '', 0),
('MAP' || LEFT(md5(random()::text), 8), 'TMP-rtxtuzg', 'Web Thickness', 't5', 0),
('MAP' || LEFT(md5(random()::text), 8), 'TMP-rtxtuzg', 'Web Thickness', 't6', 0),
('MAP' || LEFT(md5(random()::text), 8), 'TMP-rtxtuzg', 'Web Thickness', 't7', 0),
('MAP' || LEFT(md5(random()::text), 8), 'TMP-rtxtuzg', 'Web Off Center', 'b1-b2/2', 8), 
('MAP' || LEFT(md5(random()::text), 8), 'TMP-rtxtuzg', 'Web Off Center', 'b3-b4/2', 9);